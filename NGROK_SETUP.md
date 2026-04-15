# Ngrok Setup Guide for Selarasa

This guide explains how to run the Selarasa React application with ngrok for external access.

## Prerequisites

1. Install ngrok: https://ngrok.com/download
2. Sign up for a free ngrok account and get your authtoken

## Setup Steps

### 1. Configure ngrok

```bash
ngrok config add-authtoken YOUR_AUTHTOKEN
```

### 2. Build the React App

```bash
npm run build
```

### 3. Serve the Build Folder

#### Option A: Using serve (recommended)
```bash
npm install -g serve
serve -s build -l 3000
```

#### Option B: Using npx (no install)
```bash
npx serve -s build -l 3000
```

### 4. Start ngrok Tunnel

In a new terminal:
```bash
ngrok http 3000
```

ngrok will provide you with a public URL like:
- `https://abc123-def.ngrok.io`

### 5. Access Your App

Open the ngrok URL in your browser. The app should work normally with:
- All routes working (React Router)
- Images loading correctly
- localStorage functioning
- No CORS issues (since it's a static build)

## Backend API with Ngrok (Optional)

If you're using the backend API:

### 1. Start Backend Server
```bash
cd backend
npm install
npm start
```

### 2. Create ngrok Tunnel for Backend
```bash
ngrok http 5000
```

### 3. Update Frontend Environment

Create `.env.local` in the project root:
```
REACT_APP_API_URL=https://your-backend-ngrok-url.ngrok.io
```

Then rebuild:
```bash
npm run build
```

## Environment Variables

The app uses these environment variables:

| Variable | Purpose | Default |
|----------|---------|---------|
| `REACT_APP_API_URL` | Backend API base URL | '' (relative) |
| `REACT_APP_ENV` | Environment name | 'development' |

## Troubleshooting

### White Screen / Blank Page
- Make sure you built the app: `npm run build`
- Check that `serve` is running on the correct port
- Verify ngrok is pointing to the right port

### Images Not Loading
- Ensure images are in the `public/` folder
- Check that image paths use relative paths (not absolute)

### Routing Issues (404 on refresh)
- The `_redirects` file in `public/` handles this for Netlify
- For ngrok with `serve`, SPAs should work automatically
- If issues persist, try HashRouter instead of BrowserRouter

### API Not Working
- Check CORS settings in `backend/src/app.js`
- Verify `REACT_APP_API_URL` is set correctly
- Ensure backend ngrok URL is HTTPS (not HTTP)

## CORS Configuration

The backend (`backend/src/app.js`) is configured to allow:
- All origins (for ngrok compatibility)
- Credentials (cookies/auth headers)
- All standard HTTP methods

For production, update the CORS settings to restrict origins.

## Security Notes

- ngrok URLs are public - anyone with the URL can access your app
- ngrok free tier URLs change every time you restart
- Use ngrok auth for persistent URLs (paid feature)
- Don't expose sensitive data through ngrok

## Alternative: Development Mode with Ngrok

If you need hot reload during development:

```bash
# Terminal 1: Start React dev server
npm start

# Terminal 2: Create ngrok tunnel to dev server
ngrok http 3000
```

Note: This is slower than the production build method.
