export { auth as middleware } from "./auth";

// Protect every route except the auth endpoints, the sign-in page, and Next internals.
export const config = {
  matcher: ["/((?!api/auth|_next/static|_next/image|favicon.ico|signin).*)"],
};
