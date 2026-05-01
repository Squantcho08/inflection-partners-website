<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/8698094a-640e-494e-8f52-e220b29ad674

## Environment Variables

This app requires the following environment variables to function properly, especially for the contact form:

- `RESEND_API_KEY`: Your API key from [Resend](https://resend.com).

### Local Setup
Create a `.env` file in the root directory and add your key:
```env
RESEND_API_KEY=your_key_here
```

### Production Deployment (Vercel/Render/etc.)
1. **Security**: Never commit your `.env` file to GitHub.
2. **Setup**: Go to your hosting provider's dashboard (e.g., Vercel Settings > Environment Variables).
3. **Add Key**: Add `RESEND_API_KEY` with your actual secret value.
4. **Redeploy**: Trigger a new deployment for the changes to take effect.

## Custom Server
This app uses a custom Express + Vite server (`server.ts`). Ensure your hosting provider is configured to run the `start` script:
`npm run start` (which runs `tsx server.ts`)
