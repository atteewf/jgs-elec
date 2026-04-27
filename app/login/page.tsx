"use client";
import { createClient } from "@/lib/supabase/client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const Connection = async () => {
    setLoading(true);
    setErrorMessage("");
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setErrorMessage("Email ou mot de passe incorrect.");
      setLoading(false);
      return;
    }
    router.push("/admin");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-md border-t-4 border-cta p-8">
        {/* HEADER */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-primary-dark">JGS-ELEC</h1>
          <div className="h-1 w-12 bg-cta mx-auto mt-2 rounded"></div>
          <p className="text-sm text-gray-400 mt-3">Espace administration</p>
        </div>

        {/* FORMULAIRE */}
        <div className="flex flex-col gap-4">
          <div>
            <label className="block mb-1 text-sm font-semibold text-primary-dark">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email.com"
              className="w-full border border-gray-200 p-2 rounded focus:outline-none focus:border-primary"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold text-primary-dark">
              Mot de passe
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full border border-gray-200 p-2 rounded focus:outline-none focus:border-primary"
            />
          </div>

          {errorMessage && (
            <p className="text-red-500 text-sm text-center">{errorMessage}</p>
          )}

          <button
            onClick={Connection}
            disabled={loading}
            className="bg-primary text-white py-2 rounded font-semibold hover:bg-primary-dark transition-colors mt-2"
          >
            {loading ? "Connexion en cours..." : "Se connecter"}
          </button>
        </div>
      </div>
    </div>
  );
}
