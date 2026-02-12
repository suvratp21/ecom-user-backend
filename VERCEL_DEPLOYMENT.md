# Backend Deployment Guide - Vercel

## Setup Instructions

### 1. Prerequisites
- Vercel account (sign up at vercel.com)
- Your code pushed to GitHub, GitLab, or Bitbucket
- Environment variables ready

### 2. Environment Variables to Set on Vercel
Before deploying, add these environment variables in your Vercel project settings:

```
MONGO_URL=your_mongodb_connection_string
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

### 3. Deployment Steps

1. **Push your code to Git repository**
   ```bash
   git add .
   git commit -m "Setup for Vercel deployment"
   git push origin main
   ```

2. **Import project on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New..." → "Project"
   - Select your repository
   - Click "Import"

3. **Configure Environment Variables**
   - In Vercel dashboard, go to Settings → Environment Variables
   - Add the three required variables from step 2
   - Save and redeploy

4. **Deploy**
   - Vercel will automatically build and deploy when you push to main
   - Your backend URL will be: `https://your-project-name.vercel.app`

### 4. Update Frontend API URL
In your frontend code, update the API endpoint to your Vercel backend URL:

```javascript
// Example in your axios/fetch calls:
const API_URL = "https://your-project-name.vercel.app/api";
```

## File Structure for Vercel

```
backend/
├── api/
│   └── index.js          (Main serverless function)
├── Routes/               (Your route files)
├── Models/               (Your MongoDB models)
├── Controllers/          (Your controllers)
├── Middlewares/          (Your middlewares)
├── package.json
├── vercel.json          (Vercel configuration)
├── .vercelignore        (Files to ignore during deployment)
└── .env.example         (Example env variables)
```

## Troubleshooting

- **CORS issues**: Update the `origin` in vercel.json if needed
- **MongoDB connection fails**: Verify MONGO_URL is correct and IP whitelist is set in MongoDB Atlas
- **Routes not found**: Ensure all routes start with `/api/`

## Local Testing

To test locally before deploying:
```bash
npm install vercel -g
vercel dev
```

This will run your backend locally with Vercel's serverless environment simulation.
