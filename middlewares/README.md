# Next.js Middleware Guide

## Overview
Next.js Middleware allows you to modify requests and responses before they reach the final destination. It runs before caching and enables functionalities like route redirection, rewriting, authentication, and more.

## Setup
To create a middleware in Next.js, add a `middleware.ts` or `middleware.js` file at the root of your project (`pages` or `src` directory).

```typescript
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  
  // Example: Redirecting if user visits '/old-route'
  if (url.pathname === '/old-route') {
    return NextResponse.redirect(new URL('/new-route', req.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/old-route', '/protected-route'], // Apply middleware to specific routes
};
```

## Route Rewriting
Rewriting allows you to change the requested path while keeping the URL unchanged in the browser.

```typescript
export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === '/rewrite-me') {
    return NextResponse.rewrite(new URL('/new-path', req.url));
  }
  return NextResponse.next();
}
```

## Conditional Redirects
You can implement conditional redirects based on request properties like headers, cookies, or geolocation.

```typescript
export function middleware(req: NextRequest) {
  const token = req.cookies.get('authToken');
  if (!token && req.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
  return NextResponse.next();
}
```

## Using Middleware with Matchers
The `config` object allows you to specify which routes should use middleware.

```typescript
export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*'],
};
```

## Notes
- Middleware runs before the request reaches the page.
- It cannot modify the response body.
- It works at the Edge runtime, making it efficient.

## Conclusion
Middleware in Next.js is powerful for handling redirections, rewriting routes, and managing authentication. Use it wisely to improve your app's performance and security.

