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

  app.use(express.json());

  // Contact API Route
  app.post("/api/contact", async (req, res) => {
    const { email, message } = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({ error: "A valid email is required" });
    }

    const resend = getResend();
    
    if (!resend) {
      return res.status(500).json({ 
        error: "RESEND_API_KEY is not configured in environment variables." 
      });
    }

    try {
      console.log(`[Contact API] Attempting to send email via Resend to hello@inflectionpartners.io`);
      const { data, error } = await resend.emails.send({
        from: 'Inflection Partners <onboarding@resend.dev>',
        to: ['hello@inflectionpartners.io'],
        subject: `New Operator Inquiry: ${email}`,
        text: `
          New inquiry received from Inflection Partners website.
          
          Sender: ${email}
          Inquiry Details: ${message || 'No description provided.'}
          
          Timestamp: ${new Date().toISOString()}
        `,
      });

      if (error) {
        console.error('[Resend API Error]', error);
        return res.status(500).json({ 
          error: `Resend Error: ${error.name || 'API_ERROR'} - ${error.message || 'Unknown error'}`,
          details: error 
        });
      }

      console.log('[Resend Success]', data);
      return res.json({ success: true, message: "Inquiry received successfully." });
    } catch (err) {
      console.error('[Resend Exception]', err);
      const errorMessage = err instanceof Error ? err.message : String(err);
      return res.status(500).json({ 
        error: `Inquiry Transmission Failure: ${errorMessage}` 
      });
    }
  });

  // Vite integration
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
