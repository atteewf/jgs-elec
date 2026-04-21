import Image from "next/image";

export default function ServicesPage() {
  return (
    <div>
      {/* Section Réalisations avec Flip 3D */}
      <section id="realisations" className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Titre */}
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

          {/* Grid de 8 réalisations avec flip */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* Réalisation 1 */}
            <div className="h-[500px] perspective-1000 cursor-pointer group">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* FACE AVANT */}
                <div className="absolute inset-0 backface-hidden">
                  <div className="relative w-full h-full bg-white rounded-xl overflow-hidden shadow-xl">
                    <div className="relative h-80">
                      <div className="absolute top-4 left-4 bg-cta text-white px-4 py-2 text-sm font-bold rounded-lg z-10 shadow-lg">
                        AVANT
                      </div>
                      <Image
                        src="/realisations/realisation-1-avant.jpg"
                        alt="Avant rénovation"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 bg-gradient-to-t from-gray-100 to-white">
                      <h3 className="font-bold text-xl text-primary-dark mb-2">
                        Rénovation tableau électrique
                      </h3>
                      <p className="text-sm text-gray-500 mt-2 flex items-center gap-2">
                        <span className="text-cta">→</span> Passez sur la carte
                        pour voir le résultat
                      </p>
                    </div>
                  </div>
                </div>

                {/* FACE ARRIÈRE */}
                <div className="absolute inset-0 backface-hidden rotate-y-180">
                  <div className="relative w-full h-full bg-white rounded-xl overflow-hidden shadow-xl">
                    <div className="relative h-80">
                      <div className="absolute top-4 left-4 bg-cta-hover text-white px-4 py-2 text-sm font-bold rounded-lg z-10 shadow-lg">
                        APRÈS
                      </div>
                      <Image
                        src="/realisations/realisation-1-apres.jpg"
                        alt="Après rénovation"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 bg-gradient-to-t from-cta-hover/10 to-white">
                      <h3 className="font-bold text-xl text-primary-dark mb-3">
                        Résultat final
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Mise aux normes NF C 15-100 complète. Tableau
                        réorganisé, câblage propre, protection optimale.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Réalisation 2 */}
            <div className="h-[500px] perspective-1000 cursor-pointer group">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                <div className="absolute inset-0 backface-hidden">
                  <div className="relative w-full h-full bg-white rounded-xl overflow-hidden shadow-xl">
                    <div className="relative h-80">
                      <div className="absolute top-4 left-4 bg-cta text-white px-4 py-2 text-sm font-bold rounded-lg z-10 shadow-lg">
                        AVANT
                      </div>
                      <Image
                        src="/realisations/realisation-2-avant.jpg"
                        alt="Avant installation"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 bg-gradient-to-t from-gray-100 to-white">
                      <h3 className="font-bold text-xl text-primary-dark mb-2">
                        Installation prises & interrupteurs
                      </h3>
                      <p className="text-sm text-gray-500 mt-2 flex items-center gap-2">
                        <span className="text-cta">→</span> Passez sur la carte
                        pour voir le résultat
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
                      <Image
                        src="/realisations/realisation-2-apres.jpg"
                        alt="Après installation"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 bg-gradient-to-t from-cta-hover/10 to-white">
                      <h3 className="font-bold text-xl text-primary-dark mb-3">
                        Résultat final
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Rénovation complète d'un salon. Prises murales
                        encastrées, finitions impeccables.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Réalisation 3 */}
            <div className="h-[500px] perspective-1000 cursor-pointer group">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                <div className="absolute inset-0 backface-hidden">
                  <div className="relative w-full h-full bg-white rounded-xl overflow-hidden shadow-xl">
                    <div className="relative h-80">
                      <div className="absolute top-4 left-4 bg-cta text-white px-4 py-2 text-sm font-bold rounded-lg z-10 shadow-lg">
                        AVANT
                      </div>
                      <Image
                        src="/realisations/realisation-3-avant.jpg"
                        alt="Avant câblage"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 bg-gradient-to-t from-gray-100 to-white">
                      <h3 className="font-bold text-xl text-primary-dark mb-2">
                        Encastrement câblage
                      </h3>
                      <p className="text-sm text-gray-500 mt-2 flex items-center gap-2">
                        <span className="text-cta">→</span> Passez sur la carte
                        pour voir le résultat
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
                      <Image
                        src="/realisations/realisation-3-apres.jpg"
                        alt="Après câblage"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 bg-gradient-to-t from-cta-hover/10 to-white">
                      <h3 className="font-bold text-xl text-primary-dark mb-3">
                        Résultat final
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Finition soignée et discrète. Câbles encastrés dans les
                        murs, aucune trace visible.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Réalisation 4 */}
            <div className="h-[500px] perspective-1000 cursor-pointer group">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                <div className="absolute inset-0 backface-hidden">
                  <div className="relative w-full h-full bg-white rounded-xl overflow-hidden shadow-xl">
                    <div className="relative h-80">
                      <div className="absolute top-4 left-4 bg-cta text-white px-4 py-2 text-sm font-bold rounded-lg z-10 shadow-lg">
                        AVANT
                      </div>
                      <Image
                        src="/realisations/realisation-4-avant.jpg"
                        alt="Avant éclairage"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 bg-gradient-to-t from-gray-100 to-white">
                      <h3 className="font-bold text-xl text-primary-dark mb-2">
                        Éclairage extérieur LED
                      </h3>
                      <p className="text-sm text-gray-500 mt-2 flex items-center gap-2">
                        <span className="text-cta">→</span> Passez sur la carte
                        pour voir le résultat
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
                      <Image
                        src="/realisations/realisation-4-apres.jpg"
                        alt="Après éclairage"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 bg-gradient-to-t from-cta-hover/10 to-white">
                      <h3 className="font-bold text-xl text-primary-dark mb-3">
                        Résultat final
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Jardin et terrasse sécurisés avec éclairage LED basse
                        consommation programmable.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Réalisation 5 */}
            <div className="h-[500px] perspective-1000 cursor-pointer group">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                <div className="absolute inset-0 backface-hidden">
                  <div className="relative w-full h-full bg-white rounded-xl overflow-hidden shadow-xl">
                    <div className="relative h-80">
                      <div className="absolute top-4 left-4 bg-cta text-white px-4 py-2 text-sm font-bold rounded-lg z-10 shadow-lg">
                        AVANT
                      </div>
                      <Image
                        src="/realisations/realisation-5-avant.jpg"
                        alt="Avant VMC"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 bg-gradient-to-t from-gray-100 to-white">
                      <h3 className="font-bold text-xl text-primary-dark mb-2">
                        Installation VMC double flux
                      </h3>
                      <p className="text-sm text-gray-500 mt-2 flex items-center gap-2">
                        <span className="text-cta">→</span> Passez sur la carte
                        pour voir le résultat
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
                      <Image
                        src="/realisations/realisation-5-apres.jpg"
                        alt="Après VMC"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 bg-gradient-to-t from-cta-hover/10 to-white">
                      <h3 className="font-bold text-xl text-primary-dark mb-3">
                        Résultat final
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Économie d'énergie garantie. VMC double flux installée,
                        air renouvelé en continu.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Réalisation 6 */}
            <div className="h-[500px] perspective-1000 cursor-pointer group">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                <div className="absolute inset-0 backface-hidden">
                  <div className="relative w-full h-full bg-white rounded-xl overflow-hidden shadow-xl">
                    <div className="relative h-80">
                      <div className="absolute top-4 left-4 bg-cta text-white px-4 py-2 text-sm font-bold rounded-lg z-10 shadow-lg">
                        AVANT
                      </div>
                      <Image
                        src="/realisations/realisation-6-avant.jpg"
                        alt="Avant dépannage"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 bg-gradient-to-t from-gray-100 to-white">
                      <h3 className="font-bold text-xl text-primary-dark mb-2">
                        Dépannage court-circuit
                      </h3>
                      <p className="text-sm text-gray-500 mt-2 flex items-center gap-2">
                        <span className="text-cta">→</span> Passez sur la carte
                        pour voir le résultat
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
                      <Image
                        src="/realisations/realisation-6-apres.jpg"
                        alt="Après dépannage"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 bg-gradient-to-t from-cta-hover/10 to-white">
                      <h3 className="font-bold text-xl text-primary-dark mb-3">
                        Résultat final
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Intervention rapide sous 2h. Court-circuit identifié et
                        réparé, installation sécurisée.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Réalisation 7 */}
            <div className="h-[500px] perspective-1000 cursor-pointer group">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                <div className="absolute inset-0 backface-hidden">
                  <div className="relative w-full h-full bg-white rounded-xl overflow-hidden shadow-xl">
                    <div className="relative h-80">
                      <div className="absolute top-4 left-4 bg-cta text-white px-4 py-2 text-sm font-bold rounded-lg z-10 shadow-lg">
                        AVANT
                      </div>
                      <Image
                        src="/realisations/realisation-7-avant.jpg"
                        alt="Avant interphone"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 bg-gradient-to-t from-gray-100 to-white">
                      <h3 className="font-bold text-xl text-primary-dark mb-2">
                        Interphone vidéo connecté
                      </h3>
                      <p className="text-sm text-gray-500 mt-2 flex items-center gap-2">
                        <span className="text-cta">→</span> Passez sur la carte
                        pour voir le résultat
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
                      <Image
                        src="/realisations/realisation-7-apres.jpg"
                        alt="Après interphone"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 bg-gradient-to-t from-cta-hover/10 to-white">
                      <h3 className="font-bold text-xl text-primary-dark mb-3">
                        Résultat final
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Sécurité et confort renforcés. Interphone HD connecté
                        avec application mobile.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Réalisation 8 */}
            <div className="h-[500px] perspective-1000 cursor-pointer group">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                <div className="absolute inset-0 backface-hidden">
                  <div className="relative w-full h-full bg-white rounded-xl overflow-hidden shadow-xl">
                    <div className="relative h-80">
                      <div className="absolute top-4 left-4 bg-cta text-white px-4 py-2 text-sm font-bold rounded-lg z-10 shadow-lg">
                        AVANT
                      </div>
                      <Image
                        src="/realisations/realisation-8-avant.jpg"
                        alt="Avant domotique"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 bg-gradient-to-t from-gray-100 to-white">
                      <h3 className="font-bold text-xl text-primary-dark mb-2">
                        Système domotique complet
                      </h3>
                      <p className="text-sm text-gray-500 mt-2 flex items-center gap-2">
                        <span className="text-cta">→</span> Passez sur la carte
                        pour voir le résultat
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
                      <Image
                        src="/realisations/realisation-8-apres.jpg"
                        alt="Après domotique"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 bg-gradient-to-t from-cta-hover/10 to-white">
                      <h3 className="font-bold text-xl text-primary-dark mb-3">
                        Résultat final
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Maison connectée et pilotable. Éclairages, volets,
                        chauffage contrôlés à distance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
