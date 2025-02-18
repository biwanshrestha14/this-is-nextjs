# Next.js Comprehensive Guide

## Overview
Next.js is a React framework that provides features like server-side rendering, API routes, dynamic routing, authentication, and middleware for building scalable applications.

## Installation
To start a Next.js project, run:
```sh
npx create-next-app@latest my-next-app
cd my-next-app
npm run dev
```

## Key Features
### 1. **Routing & Dynamic Routing**
Next.js uses a file-based routing system:
```plaintext
/pages
  index.js → `/`
  about.js → `/about`
  blog/[id].js → `/blog/:id`
```

### 2. **API Routes**
You can create backend logic using API routes:
```javascript
// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: "Hello from API!" });
}
```

### 3. **Middleware**
Middleware can be used for redirection, authentication, or modifying requests:
```typescript
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === '/old-route') {
    return NextResponse.redirect(new URL('/new-route', req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/old-route', '/protected-route'],
};
```

### 4. **Server Actions**
Server actions allow direct data mutation without API endpoints.
```typescript
"use server";

export async function saveData(formData) {
  const res = await fetch("/api/save", {
    method: "POST",
    body: JSON.stringify(formData),
  });
  return res.json();
}
```

### 5. **Authentication**
NextAuth.js is commonly used for authentication:
```javascript
import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    })
  ]
});
```

### 6. **Data Fetching (SSR, SSG, ISR, CSR)**
```javascript
// Server-Side Rendering (SSR)
export async function getServerSideProps() {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();
  return { props: { data } };
}

// Static Site Generation (SSG)
export async function getStaticProps() {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();
  return { props: { data } };
}
```

### 7. **Deployment**
Deploy Next.js apps easily on platforms like Vercel:
```sh
git init
git add .
git commit -m "Initial commit"
git push origin main
```
Then, connect your repository to **Vercel** for automatic deployments.

## Conclusion
Next.js provides a powerful set of tools for modern web applications. Mastering these concepts will help you build scalable and optimized applications efficiently.

