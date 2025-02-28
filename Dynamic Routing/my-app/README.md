# Dynamic Routing in Next.js

## Overview
Dynamic routing in Next.js allows you to create pages that capture URL parameters dynamically. This is useful for building pages that depend on dynamic data, such as user profiles, blog posts, or product pages.

## Creating Dynamic Routes
### 1. Single Dynamic Route
To create a dynamic route, use square brackets `[]` in the filename inside the `pages` directory. For example:

```bash
/pages/post/[id].js
```

**Example Code:**
```jsx
import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return <h1>Post ID: {id}</h1>;
};

export default Post;
```

Accessing `/post/123` will display `Post ID: 123`.

---

### 2. Catch-All Routes
If you need to match multiple segments dynamically, use `[...param]`.

```bash
/pages/category/[...slug].js
```

**Example Code:**
```jsx
import { useRouter } from 'next/router';

const Category = () => {
  const router = useRouter();
  const { slug } = router.query;

  return <h1>Category Path: {JSON.stringify(slug)}</h1>;
};

export default Category;
```

- Accessing `/category/sports/football` will display `Category Path: ["sports", "football"]`

---

## Custom 404 Page
Next.js provides a default `404` page, but you can customize it by creating `pages/404.js`.

```jsx
const Custom404 = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
    </div>
  );
};

export default Custom404;
```

---

## Custom Error Page
For handling global errors like server-side failures, create `pages/_error.js`.

```jsx
const ErrorPage = ({ statusCode }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{statusCode ? `Error ${statusCode}` : 'An error occurred'}</h1>
      <p>Something went wrong.</p>
    </div>
  );
};

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
```

---

## Summary
- Use `[param]` for single dynamic routes.
- Use `[...param]` for catch-all routes.
- Customize the `404` page in `pages/404.js`.
- Handle global errors in `pages/_error.js`.

Now you can implement dynamic routing in your Next.js project efficiently!

