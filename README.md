# Mmeri Scholars website

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/soluwafemi-nerdlogiclabs-projects/v0-mmeri-scholars)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/nSqs2KIEmY2)

## Overview

This repository will stay in sync with your deployed chats on [v0.app](https://v0.app).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.app](https://v0.app).

## Deployment

Your project is live at:

**[https://vercel.com/soluwafemi-nerdlogiclabs-projects/v0-mmeri-scholars](https://vercel.com/soluwafemi-nerdlogiclabs-projects/v0-mmeri-scholars)**

## Build your app

Continue building your app on:

**[https://v0.app/chat/nSqs2KIEmY2](https://v0.app/chat/nSqs2KIEmY2)**

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository

## Deploying to Vercel

### Option 1: Deploy via v0.app (Recommended)
1. Click the **Publish** button in the top right of your v0 chat
2. Your project will be automatically deployed to Vercel

### Option 2: Deploy via GitHub
1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **Add New Project**
4. Import your GitHub repository
5. Click **Deploy**

## Binding a Custom Domain with HTTPS

### Step 1: Add Your Domain in Vercel
1. Go to your project dashboard on [Vercel](https://vercel.com)
2. Navigate to **Settings** → **Domains**
3. Enter your custom domain (e.g., `mmerischolars.org`) and click **Add**

### Step 2: Configure DNS Records
Vercel will provide you with DNS configuration options. Choose one:

**Option A: Using Vercel Nameservers (Recommended)**
- Update your domain registrar's nameservers to Vercel's nameservers
- Vercel will automatically manage all DNS records

**Option B: Using A/CNAME Records**
- For apex domains (e.g., `mmerischolars.org`):
  - Add an **A Record** pointing to `76.76.21.21`
- For subdomains (e.g., `www.mmerischolars.org`):
  - Add a **CNAME Record** pointing to `cname.vercel-dns.com`

### Step 3: SSL/HTTPS Certificate
- Vercel automatically provisions and renews free SSL certificates via Let's Encrypt
- HTTPS is enabled by default once your domain is verified
- No additional configuration required

### Step 4: Verify Domain
1. After configuring DNS, return to Vercel's domain settings
2. Click **Refresh** to verify DNS propagation
3. Once verified, your site will be accessible via HTTPS at your custom domain

> **Note:** DNS propagation can take up to 48 hours, but typically completes within a few minutes to a few hours.

### Redirect Configuration
- Vercel automatically redirects HTTP to HTTPS
- You can configure `www` to non-`www` redirects (or vice versa) in the Domains settings
