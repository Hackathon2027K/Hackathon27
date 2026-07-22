import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());

// API Health Check
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Hackathon27 API server is running smoothly',
    timestamp: new Date().toISOString()
  });
});

// Mock Auth Status/User profile
app.get('/api/auth/me', (req, res) => {
  // If authenticated, returns mock user. In this static mockup, client can toggle auth status.
  res.status(200).json({
    authenticated: false,
    user: null
  });
});

// Mock GitHub OAuth Route
app.get('/api/auth/github', (req, res) => {
  const clientId = process.env.GITHUB_CLIENT_ID;
  const redirectUri = encodeURIComponent(process.env.GITHUB_CALLBACK_URL || '');
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user`);
});

// Mock GitHub Callback
app.get('/api/auth/github/callback', (req, res) => {
  // Mock login and redirect to frontend
  res.redirect(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}?login_success=true&provider=github`);
});

// Mock Google OAuth Route
app.get('/api/auth/google', (req, res) => {
  // Mock OAuth redirection
  res.redirect(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}?login_success=true&provider=google`);
});

app.listen(PORT, () => {
  console.log(`[Backend] Hackathon27 API Server listening on http://localhost:${PORT}`);
});
