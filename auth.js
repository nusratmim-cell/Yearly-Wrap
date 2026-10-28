import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

// Only this Google Workspace domain may sign in.
const ALLOWED_DOMAIN = "shikho.com";

export const { handlers, auth, signIn, signOut } = NextAuth({
  trustHost: true,
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      // hd hints Google to show only shikho.com accounts; the callback below enforces it.
      authorization: { params: { hd: ALLOWED_DOMAIN, prompt: "select_account" } },
    }),
  ],
  pages: { signIn: "/signin" },
  callbacks: {
    // Reject anyone whose verified email is not @shikho.com.
    signIn({ profile }) {
      const email = (profile?.email ?? "").toLowerCase();
      const verified = profile?.email_verified !== false;
      return verified && email.endsWith("@" + ALLOWED_DOMAIN);
    },
    // Used by the middleware: allow the request only if signed in.
    authorized({ auth }) {
      return !!auth?.user;
    },
  },
});
