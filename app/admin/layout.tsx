import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  // getUser() est la méthode standard Supabase Auth — fonctionne dans toutes les versions
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  // Si pas d'utilisateur connecté ou erreur → redirection vers /login
  if (error || !user) redirect("/login");

  return <div className="min-h-screen bg-gray-100">{children}</div>;
}
