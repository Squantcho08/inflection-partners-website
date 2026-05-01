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

    console.log(`[Contact Form] Processing inquiry from: ${email}`);
    
    const resend = getResend();
    
    if (resend) {
      try {
        const { data, error } = await resend.emails.send({
          from: 'Inflection Partners <onboarding@resend.dev>', // Resend's default free-tier sender
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
          console.error('[Resend Error]', error);
          return res.status(500).json({ 
            error: error.message || "Failed to transmit inquiry.",
            details: error
          });
        }

        console.log('[Resend Success]', data);
      } catch (err) {
        console.error('[Email Exception]', err);
        return res.status(500).json({ error: "Internal transmission error." });
      }
    } else {
      // Fallback for when API Key is missing (dev/preview)
      console.log('--- EMAIL LOG (No API Key) ---');
      console.log(`To: hello@inflectionpartners.io`);
      console.log(`From: ${email}`);
      console.log(`Message: ${message}`);
      console.log('------------------------------');
    }

    res.json({ success: true, message: "Inquiry received successfully." });
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
