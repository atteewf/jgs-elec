import { Realisation } from "@/types/realisation";
import Image from "next/image";

function RealisationCard({ realisation }: { realisation: Realisation }) {
  return (
    <div className="h-[500px] perspective-1000 cursor-pointer group">
      <div className="relative w-full h-full transition-transform duration-[1200ms] transform-style-preserve-3d group-hover:rotate-y-180">
        <div className="absolute inset-0 backface-hidden">
          <div className="relative w-full h-full bg-white rounded-xl overflow-hidden shadow-xl">
            <div className="relative h-80">
              <div className="absolute top-4 left-4 bg-cta text-white px-4 py-2 text-sm font-bold rounded-lg z-10 shadow-lg">
                AVANT
              </div>
              {realisation.image_avant ? (
                <Image
                  src={realisation.image_avant}
                  alt="Image Avant"
                  fill
                  className="object-cover"
                />
              ) : null}
            </div>
            <div className="p-6 bg-gradient-to-t from-gray-100 to-white">
              <h3 className="font-bold text-xl text-primary-dark mb-2">
                {realisation.titre ?? ""}
              </h3>
              <p className="text-sm text-gray-500 mt-2 flex items-center gap-2">
                <span className="text-cta">→</span> Passez sur la carte pour
                voir le résultat
              </p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="relative w-full h-full bg-white rounded-xl overflow-hidden shadow-xl">
            <div className="relative h-80">
              <div className="absolute top-4 left-4 bg-cta-hover text-white px-4 py-2 text-sm font-bold rounded-lg z-10 shadow-lg">
                APRÈS
              </div>
              {realisation.image_apres ? (
                <Image
                  src={realisation.image_apres}
                  alt="Image Apres"
                  fill
                  className="object-cover"
                />
              ) : null}
            </div>
            <div className="p-6 bg-gradient-to-t from-cta-hover/10 to-white">
              <h3 className="font-bold text-xl text-primary-dark mb-3">
                Résultat final
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {realisation.description ?? ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RealisationCard;
