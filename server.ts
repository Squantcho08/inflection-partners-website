import 'dotenv/config';
import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import { Resend } from 'resend';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Lazy initialization of Resend
let resendClient: Resend | null = null;
function getResend() {
  if (!resendClient) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn("RESEND_API_KEY is not set. Emails will be logged but not sent.");
      return null;
    }
    resendClient = new Resend(apiKey);
  }
  return resendClient;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  // 1. Mandatory Middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // 2. PRIMARY API ROUTES (Directly on app for maximum priority)
  app.get("/api/health", (req, res) => res.status(200).json({ status: "ok", env: process.env.NODE_ENV }));
  
  app.get("/api/contact/check", (req, res) => {
    res.json({ status: "API Reachable", timestamp: new Date().toISOString() });
  });

  app.post("/api/contact", async (req, res) => {
    const { email, message } = req.body;
    console.log(`[API] Received inquiry from: ${email}`);

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: "A valid email is required." });
    }

    const resend = getResend();
    if (!resend) {
      console.error('[API] RESEND_API_KEY is missing from environment.');
      return res.status(500).json({ error: "Email service not configured on server." });
    }

    try {
      const { data, error } = await resend.emails.send({
        from: 'Inflection Partners <onboarding@resend.dev>',
        to: ['hello@inflectionpartners.io'],
        subject: `Inquiry: ${email}`,
        text: `From: ${email}\n\nMessage:\n${message || 'No description provided.'}\n\nSent: ${new Date().toISOString()}`,
      });

      if (error) {
        console.error('[Resend API Error]', error);
        return res.status(500).json({ error: error.message || "Resend failed to send." });
      }

      console.log('[API] Email sent successfully');
      return res.status(200).json({ success: true });
    } catch (err) {
      console.error('[Server Exception]', err);
      const msg = err instanceof Error ? err.message : 'Unknown error';
      return res.status(500).json({ error: `Server delivery failure: ${msg}` });
    }
  });

  // 3. Fallback for any other /api/* routes to prevent SPA hijacking
  app.all("/api/*", (req, res) => {
    res.status(404).json({ error: "API route not found" });
  });

  // 4. VITE / STATIC CONTENT (Must come AFTER API routes)
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer();
