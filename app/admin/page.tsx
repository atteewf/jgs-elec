"use client";
import { createClient } from "@/lib/supabase/client";
import { useState, useEffect } from "react";
import { Realisation } from "@/types/realisation";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const [realisations, setRealisations] = useState<Realisation[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [imageAvant, setImageAvant] = useState<File | null>(null);
  const [imageApres, setImageApres] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const supabase = createClient();
  const router = useRouter();

  const fetchRealisations = async () => {
    const { data } = await supabase
      .from("realisations")
      .select("*")
      .order("ordre", { ascending: true });
    setRealisations(data ?? []);
  };

  useEffect(() => {
    fetchRealisations();
  }, []);

  const resetForm = () => {
    setEditingId(null);
    setTitre("");
    setDescription("");
    setImageAvant(null);
    setImageApres(null);
  };

  const handleEdit = (realisation: Realisation) => {
    setEditingId(realisation.id);
    setTitre(realisation.titre);
    setDescription(realisation.description ?? "");
    setImageAvant(null);
    setImageApres(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Supprimer cette réalisation ?")) return;
    await supabase.from("realisations").delete().eq("id", id);
    await fetchRealisations();
  };

  const uploadImage = async (file: File, suffix: string) => {
    const { data, error } = await supabase.storage
      .from("realisations")
      .upload(`${Date.now()}-${suffix}`, file);
    if (error || !data) return null;
    const { data: urlData } = supabase.storage
      .from("realisations")
      .getPublicUrl(data.path);
    return urlData.publicUrl;
  };

  const handleSubmit = async () => {
    if (!titre) return;
    setLoading(true);

    if (editingId) {
      const updates: Partial<Realisation> = { titre, description };
      if (imageAvant) {
        const url = await uploadImage(imageAvant, "avant");
        if (url) updates.image_avant = url;
      }
      if (imageApres) {
        const url = await uploadImage(imageApres, "apres");
        if (url) updates.image_apres = url;
      }
      const { error } = await supabase
        .from("realisations")
        .update(updates)
        .eq("id", editingId);
      console.log("Update error:", error);
    } else {
      if (!imageAvant || !imageApres) {
        setLoading(false);
        return;
      }
      const urlAvant = await uploadImage(imageAvant, "avant");
      const urlApres = await uploadImage(imageApres, "apres");
      if (!urlAvant || !urlApres) {
        console.error("Upload échoué");
        setLoading(false);
        return;
      }
      const { error } = await supabase.from("realisations").insert({
        titre,
        description,
        image_avant: urlAvant,
        image_apres: urlApres,
        ordre: realisations.length + 1,
      });
      console.log("Insert error:", error);
    }

    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
    resetForm();
    await fetchRealisations();
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto p-4 sm:p-8">
        {/* HEADER - empile sur mobile, côte à côte sur desktop */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-primary-dark">
              {editingId
                ? "✏️ Modifier la réalisation"
                : "➕ Ajouter une réalisation"}
            </h1>
            <div className="h-1 w-16 bg-cta mt-2 rounded"></div>
          </div>
          <button
            onClick={handleLogout}
            className="text-sm text-gray-400 hover:text-red-500 transition-colors font-semibold self-start sm:self-auto"
          >
            Déconnexion
          </button>
        </div>

        {/* FORMULAIRE */}
        <div className="flex flex-col gap-5 bg-white p-4 sm:p-6 rounded-xl shadow-md mb-10 border-t-4 border-cta">
          <div>
            <label className="block mb-1 font-semibold text-primary-dark">
              Titre
            </label>
            <input
              type="text"
              placeholder="Ex: Rénovation tableau électrique PAC"
              value={titre}
              onChange={(e) => setTitre(e.target.value)}
              className="border border-gray-200 p-2 rounded w-full focus:outline-none focus:border-primary"
            />
            <p className="text-xs text-gray-400 mt-1">
              4 à 6 mots maximum pour un rendu optimal
            </p>
          </div>

          <div>
            <label className="block mb-1 font-semibold text-primary-dark">
              Description
            </label>
            <textarea
              placeholder="Ex: Mise aux normes NF C 15-100 complète. Tableau réorganisé, câblage propre."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border border-gray-200 p-2 rounded w-full focus:outline-none focus:border-primary"
              rows={3}
            />
            <p className="text-xs text-gray-400 mt-1">
              1 à 2 phrases maximum (15-20 mots). Décrit le résultat final.
            </p>
          </div>

          <div>
            <label className="block mb-1 font-semibold text-primary-dark">
              Photo avant{" "}
              {editingId && (
                <span className="text-cta font-normal text-sm">
                  (laisser vide pour garder l'actuelle)
                </span>
              )}
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImageAvant(e.target.files?.[0] ?? null)}
              className="w-full"
            />
            <p className="text-xs text-gray-400 mt-1">
              Format portrait recommandé. Minimum 800x600px.
            </p>
          </div>

          <div>
            <label className="block mb-1 font-semibold text-primary-dark">
              Photo après{" "}
              {editingId && (
                <span className="text-cta font-normal text-sm">
                  (laisser vide pour garder l'actuelle)
                </span>
              )}
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImageApres(e.target.files?.[0] ?? null)}
              className="w-full"
            />
            <p className="text-xs text-gray-400 mt-1">
              Même cadrage que la photo avant pour un meilleur effet.
            </p>
          </div>

          {success && (
            <p className="text-green-600 font-semibold">
              ✅{" "}
              {editingId
                ? "Modification enregistrée !"
                : "Réalisation ajoutée !"}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="bg-primary text-white px-4 py-3 sm:py-2 rounded hover:bg-primary-dark flex-1 font-semibold transition-colors"
            >
              {loading
                ? "Envoi en cours..."
                : editingId
                  ? "Enregistrer les modifications"
                  : "Ajouter la réalisation"}
            </button>
            {editingId && (
              <button
                onClick={resetForm}
                className="bg-gray-200 text-gray-700 px-4 py-3 sm:py-2 rounded hover:bg-gray-300 font-semibold transition-colors"
              >
                Annuler
              </button>
            )}
          </div>

          {/* PROMPT IA */}
          <div className="mt-4 bg-blue-50 border border-blue-100 rounded-lg p-4">
            <p className="text-sm font-semibold text-primary-dark mb-2">
              💡 Générer le titre et la description avec l'IA
            </p>
            <p className="text-xs text-gray-500 mb-3">
              Copie ce prompt dans ChatGPT ou Claude, uploade tes deux photos,
              et colle le résultat dans le formulaire.
            </p>
            <div className="bg-white border border-gray-200 rounded p-3 text-xs text-gray-600 leading-relaxed select-all">
              Tu es un assistant pour JGS-ELEC, une entreprise d'électricité
              professionnelle. Je vais te partager deux photos d'un chantier :
              une photo AVANT et une photo APRÈS mon intervention. Génère moi un
              titre court et professionnel (4 à 6 mots maximum) qui décrit le
              type de travaux, et une description courte du résultat final (1 à
              2 phrases, 15 à 20 mots maximum). Le titre doit être factuel comme
              "Rénovation tableau électrique PAC". La description parle
              uniquement du résultat, pas du problème de départ. Pas d'emoji,
              texte simple et professionnel. Réponds uniquement avec le titre et
              la description, rien d'autre.
            </div>
            <button
              onClick={() =>
                navigator.clipboard.writeText(
                  `Tu es un assistant pour JGS-ELEC, une entreprise d'électricité professionnelle. Je vais te partager deux photos d'un chantier : une photo AVANT et une photo APRÈS mon intervention. Génère moi un titre court et professionnel (4 à 6 mots maximum) qui décrit le type de travaux, et une description courte du résultat final (1 à 2 phrases, 15 à 20 mots maximum). Le titre doit être factuel comme "Rénovation tableau électrique PAC". La description parle uniquement du résultat, pas du problème de départ. Pas d'emoji, texte simple et professionnel. Réponds uniquement avec le titre et la description, rien d'autre.`,
                )
              }
              className="mt-2 text-xs text-primary underline hover:text-primary-dark"
            >
              📋 Copier le prompt
            </button>
          </div>
        </div>

        {/* LISTE */}
        <div className="mb-4 flex items-center gap-3">
          <h2 className="text-xl font-bold text-primary-dark">Réalisations</h2>
          <span className="bg-cta text-white text-sm font-bold px-2 py-0.5 rounded-full">
            {realisations.length}
          </span>
        </div>

        <div className="flex flex-col gap-3">
          {realisations.map((r, index) => (
            <div
              key={r.id}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-100 gap-3"
            >
              <span className="font-medium text-primary-dark">
                <span className="text-cta font-bold mr-3">#{index + 1}</span>
                {r.titre}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(r)}
                  className="bg-cta text-white px-3 py-2 rounded hover:bg-cta-hover text-sm font-semibold transition-colors flex-1 sm:flex-none"
                >
                  Modifier
                </button>
                <button
                  onClick={() => handleDelete(r.id)}
                  className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 text-sm font-semibold transition-colors flex-1 sm:flex-none"
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
