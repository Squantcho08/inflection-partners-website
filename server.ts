import 'dotenv/config';
import express from "express";
import cors from "cors";
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
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // STARTUP LOGGING
  console.log(`[Startup] Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`[Startup] API Key present: ${!!process.env.RESEND_API_KEY}`);

  // 2. PRIMARY API ROUTES
  const apiRouter = express.Router();

  // Root health check for the 전체 API
  apiRouter.get("/health", (req, res) => {
    res.json({ 
      status: "API_ONLINE", 
      time: new Date().toISOString(),
      key_configured: !!process.env.RESEND_API_KEY 
    });
  });

  apiRouter.all("/contact", async (req, res) => {
    console.log(`[API] ${req.method} request to /api/contact`);
    
    if (req.method !== 'POST') {
      return res.status(200).json({ message: "Endpoint active. Please use POST." });
    }

    const { email, message } = req.body;
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: "A valid email is required." });
    }

    const resend = getResend();
    if (!resend) {
      console.error('[API] Contact failed: RESEND_API_KEY not found');
      return res.status(500).json({ error: "Server email service not configured." });
    }

    try {
      const { data, error } = await resend.emails.send({
        from: 'Inflection Partners <onboarding@resend.dev>',
        to: ['hello@inflectionpartners.io'],
        subject: `New Inquiry: ${email}`,
        text: `From: ${email}\n\nMessage:\n${message || 'N/A'}`,
      });

      if (error) {
        console.error('[Resend Error]', error);
        return res.status(500).json({ error: error.message });
      }

      console.log('[API] Email sent successfully');
      return res.status(200).json({ success: true });
    } catch (err) {
      console.error('[Server Exception]', err);
      return res.status(500).json({ error: "Internal delivery failure" });
    }
  });

  // Mount API router FIRST
  app.use("/api", apiRouter);

  // 3. VITE / STATIC CONTENT
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
