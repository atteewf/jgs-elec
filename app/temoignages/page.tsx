export default function ServicesPage() {
  return (
    <div>
      {/* Section Témoignages */}
      <section id="temoignages" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Titre */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary-dark">
            Ils nous font confiance
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Découvrez les retours de nos clients satisfaits.
          </p>

          {/* Grid de témoignages */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Avis 1 - AS dL */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg">
                    AD
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-dark">AS dL</h3>
                    <div className="flex gap-1 text-cta">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                  alt="Google"
                  className="w-6 h-6"
                />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Électricien efficace qui répond rapidement aux besoins.
                Compte-rendu clair. C'est agréable de se sentir en confiance !
                Merci JGS. Recommande ++
              </p>
              <p className="text-xs text-gray-500">Il y a 2 mois</p>
            </div>

            {/* Avis 2 - at */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-cta rounded-full flex items-center justify-center text-white font-bold text-lg">
                    AT
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-dark">at</h3>
                    <div className="flex gap-1 text-cta">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                  alt="Google"
                  className="w-6 h-6"
                />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Suite à l'achat d'une maison ancienne, nous avons eu de très
                grosses galères électriques (plus d'élec à l'étage, problème de
                terre sur des appareils de la cuisine). Julien est venu
                rapidement et a fait des miracles de ses deux mains...
              </p>
              <p className="text-xs text-gray-500">Il y a 2 mois</p>
            </div>

            {/* Avis 3 - Sophie Couteau */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    SC
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-dark">
                      Sophie Couteau
                    </h3>
                    <div className="flex gap-1 text-cta">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                  alt="Google"
                  className="w-6 h-6"
                />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Intervention pour installer une nouvelle prise électrique,
                technicien sympa et efficace, tarif abordable, je recommande et
                referai appel à JGS elec sans hésiter
              </p>
              <p className="text-xs text-gray-500">Il y a 2 mois</p>
            </div>

            {/* Avis 4 - Cyrielle */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg">
                    CY
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-dark">Cyrielle</h3>
                    <div className="flex gap-1 text-cta">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                  alt="Google"
                  className="w-6 h-6"
                />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Professionnel sérieux et compétent. Je n'hésiterai pas à vous
                recontacter.
              </p>
              <p className="text-xs text-gray-500">Il y a 2 mois</p>
            </div>

            {/* Avis 5 - Elise Da Col-Mansutti */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-cta rounded-full flex items-center justify-center text-white font-bold text-lg">
                    ED
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-dark">
                      Elise Da Col-Mansutti
                    </h3>
                    <div className="flex gap-1 text-cta">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                  alt="Google"
                  className="w-6 h-6"
                />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Intervention rapide et efficace. Je conseille.
              </p>
              <p className="text-xs text-gray-500">Il y a 3 semaines</p>
            </div>

            {/* Avis 6 - Yann Maigret */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    YM
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-dark">
                      Yann Maigret
                    </h3>
                    <div className="flex gap-1 text-cta">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                  alt="Google"
                  className="w-6 h-6"
                />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Service professionnel et de qualité.
              </p>
              <p className="text-xs text-gray-500">Il y a 1 mois</p>
            </div>
          </div>

          {/* CTA vers Google */}
          <div className="text-center mt-12">
            <a
              href="https://www.google.com/search?q=JGS-ELEC+Avis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-cta hover:text-cta transition-colors font-semibold shadow-md"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Voir tous les avis sur Google
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
