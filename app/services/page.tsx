import { Realisation } from "@/types/realisation";
import { createClient } from "@/lib/supabase/server";
import RealisationCard from "./RealisationCard";

export default async function ServicesPage() {
  let data: Realisation[] = [];
  let errorMessage: string | null = null;

  try {
    const supabase = await createClient();
    const response = await supabase
      .from("realisations")
      .select("*")
      .order("ordre", { ascending: true });
    if (!response.data || response.error) {
      throw new Error("Erreur de connexion à la base de données");
    }
    data = response.data;
  } catch (error) {
    errorMessage = error instanceof Error ? error.message : String(error);
  }

  if (errorMessage) {
    return <p>Erreur de chargement {errorMessage}</p>;
  }

  return (
    <div>
      <section id="realisations" className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary-dark">
            Nos Réalisations
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Des installations électriques réalisées avec rigueur et
            professionnalisme.
            <br />
            <span className="text-sm text-cta font-semibold">
              Passez sur une carte pour découvrir le résultat !
            </span>
          </p>

          {data.length === 0 ? (
            <p className="text-center text-gray-500">
              Aucune réalisation pour le moment.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {data.map((realisation: Realisation) => (
                <RealisationCard
                  key={realisation.id}
                  realisation={realisation}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
