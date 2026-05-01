import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Please use POST.' });
  }

  const { email, message } = req.body;

  // Validate email
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'A valid email is required.' });
  }

  // Check API key
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[Contact] RESEND_API_KEY is not configured.');
    return res.status(500).json({ error: 'Email service is not configured.' });
  }

  // Send email via Resend
  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: 'Inflection Partners <onboarding@resend.dev>',
      to: ['hello@inflectionpartners.io'],
      subject: `New Inquiry: ${email}`,
      text: `From: ${email}\n\nMessage:\n${message || 'N/A'}`,
    });

    if (error) {
      console.error('[Resend Error]', error);
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('[Contact] Unexpected error:', err);
    return res.status(500).json({ error: 'Internal delivery failure.' });
  }
}
