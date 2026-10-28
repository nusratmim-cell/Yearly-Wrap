import { signIn } from "../../auth";

export default function SignIn({ searchParams }) {
  const denied = searchParams?.error;
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24 }}>
      <div
        style={{
          maxWidth: 380,
          width: "100%",
          textAlign: "center",
          background: "#fff",
          border: "1px solid #E3E0D8",
          borderRadius: 16,
          padding: "34px 28px",
          boxShadow: "0 10px 28px rgba(53,72,148,.10)",
        }}
      >
        <div style={{ fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", color: "#C2257F", fontWeight: 700 }}>
          Shikho Year-End Wrap 2026
        </div>
        <h1 style={{ fontSize: 20, margin: "10px 0 6px" }}>Internal — Shikho only</h1>
        <p style={{ color: "#4B5060", fontSize: 14, margin: "0 0 20px", lineHeight: 1.5 }}>
          Sign in with your <b>@shikho.com</b> Google account to view the document.
        </p>
        {denied ? (
          <p style={{ color: "#B8304B", fontSize: 13, background: "#FAE3E8", borderRadius: 8, padding: "9px 11px", margin: "0 0 16px" }}>
            Only <b>@shikho.com</b> accounts can access this.
          </p>
        ) : null}
        <form
          action={async () => {
            "use server";
            await signIn("google", { redirectTo: "/" });
          }}
        >
          <button
            type="submit"
            style={{
              cursor: "pointer",
              background: "#354894",
              color: "#fff",
              border: 0,
              borderRadius: 999,
              padding: "12px 22px",
              fontWeight: 700,
              fontSize: 14,
            }}
          >
            Sign in with Google
          </button>
        </form>
      </div>
    </main>
  );
}
