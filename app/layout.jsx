export const metadata = {
  title: "Shikho Year-End Wrap 2026",
  description: "Internal PRD — Shikho only",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
          background: "#F9F8F5",
          color: "#1A1D26",
        }}
      >
        {children}
      </body>
    </html>
  );
}
