// The site is served under Vite's `base` (/v1/ in production), so root-relative paths need that prefix.
export const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");
export const withBase = (path: string) => `${BASE}${path}`;
