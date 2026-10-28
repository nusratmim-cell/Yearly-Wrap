import { redirect } from "next/navigation";

// Signed-in users land here, then go straight to the document.
export default function Home() {
  redirect("/wrap-2026-prd.html");
}
