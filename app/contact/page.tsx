export default function ServicesPage() {
  return (
    <div>
      {/* Section Contact */}
      <section id="contact" className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Titre */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary-dark">
            Besoin d'une intervention ?
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Remplissez ce formulaire, nous vous recontactons rapidement.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Colonne gauche - Formulaire */}
            <div className="bg-white rounded-xl shadow-xl p-8">
              <form
                action="mailto:georgeais@jgs-elec.com?subject=Demande de contact JGS-ELEC"
                method="post"
                encType="text/plain"
                className="space-y-6"
              >
                {/* Nom */}
                <div>
                  <label
                    htmlFor="nom"
                    className="block text-sm font-semibold text-primary-dark mb-2"
                  >
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent transition-all"
                    placeholder="Votre nom"
                  />
                </div>

                {/* Téléphone */}
                <div>
                  <label
                    htmlFor="telephone"
                    className="block text-sm font-semibold text-primary-dark mb-2"
                  >
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent transition-all"
                    placeholder="06 12 34 56 78"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-primary-dark mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent transition-all"
                    placeholder="votre@email.fr"
                  />
                </div>

                {/* Code postal */}
                <div>
                  <label
                    htmlFor="code-postal"
                    className="block text-sm font-semibold text-primary-dark mb-2"
                  >
                    Code postal *
                  </label>
                  <input
                    type="text"
                    id="code-postal"
                    name="code-postal"
                    required
                    pattern="[0-9]{5}"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent transition-all"
                    placeholder="91800"
                  />
                </div>

                {/* Type d'intervention */}
                <div>
                  <label
                    htmlFor="intervention"
                    className="block text-sm font-semibold text-primary-dark mb-2"
                  >
                    Type d'intervention *
                  </label>
                  <select
                    id="intervention"
                    name="intervention"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Sélectionnez une option</option>
                    <option value="depannage">Dépannage urgent</option>
                    <option value="renovation">
                      Rénovation / Mise aux normes
                    </option>
                    <option value="installation">Installation neuve</option>
                    <option value="domotique">
                      Domotique / Solutions économiques
                    </option>
                    <option value="securite">
                      Sécurité (alarme, vidéo, interphone)
                    </option>
                    <option value="borne">Borne de recharge</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                {/* Message optionnel */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-primary-dark mb-2"
                  >
                    Votre message (optionnel)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent transition-all resize-none"
                    placeholder="Décrivez brièvement votre besoin..."
                  />
                </div>

                {/* Captcha simple */}
                <div>
                  <label
                    htmlFor="captcha"
                    className="block text-sm font-semibold text-primary-dark mb-2"
                  >
                    Combien font 2 + 2 ? *
                  </label>
                  <input
                    type="number"
                    id="captcha"
                    name="captcha"
                    required
                    min="0"
                    max="20"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent transition-all"
                    placeholder="Votre réponse"
                  />
                </div>

                {/* RGPD */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="rgpd"
                    name="rgpd"
                    required
                    className="mt-1 w-5 h-5 text-cta border-gray-300 rounded focus:ring-2 focus:ring-cta"
                  />
                  <label
                    htmlFor="rgpd"
                    className="text-sm text-gray-700 leading-relaxed"
                  >
                    En cochant cette case, j'accepte que mes données
                    personnelles soient utilisées pour me recontacter dans le
                    cadre de ma demande.
                    <a href="#" className="text-cta hover:underline ml-1">
                      En savoir plus sur la protection des données
                    </a>
                  </label>
                </div>

                {/* Bouton submit */}
                <button
                  type="submit"
                  className="w-full bg-cta text-white py-4 rounded-lg font-bold text-lg hover:bg-cta-hover transition-colors shadow-lg hover:shadow-xl"
                >
                  Envoyer ma demande
                </button>
              </form>
            </div>

            {/* Colonne droite - Coordonnées */}
            <div className="space-y-8">
              {/* Bloc téléphone */}
              <div className="bg-white rounded-xl shadow-xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-cta rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-primary-dark">
                      Appelez-nous
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Du lundi au samedi, 8h30 - 20h30
                    </p>
                  </div>
                </div>
                <a
                  href="tel:0768752487"
                  className="block w-full text-center bg-cta text-white py-4 rounded-lg font-bold text-xl hover:bg-cta-hover transition-colors mt-4"
                >
                  07 68 75 24 87
                </a>
              </div>

              {/* Bloc email */}
              <div className="bg-white rounded-xl shadow-xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-primary-dark">
                      Email
                    </h3>
                    <p className="text-gray-600 text-sm">Réponse sous 24h</p>
                  </div>
                </div>
                <a
                  href="mailto:georgeais@jgs-elec.com"
                  className="block text-primary hover:text-cta transition-colors text-lg font-semibold break-all"
                >
                  georgeais@jgs-elec.com
                </a>
              </div>

              {/* Bloc adresse */}
              <div className="bg-white rounded-xl shadow-xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-primary-dark">
                      Zone d'intervention
                    </h3>
                    <p className="text-gray-700 mt-2 leading-relaxed">
                      Essonne (91), Val-de-Marne (94), Seine-et-Marne (77)
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      Basé à Boussy-Saint-Antoine
                    </p>
                  </div>
                </div>
              </div>

              {/* Horaires */}
              <div className="bg-gradient-to-br from-primary-dark to-primary text-white rounded-xl shadow-xl p-8">
                <h3 className="font-bold text-xl mb-4">
                  Horaires d'intervention
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span className="font-semibold">8h30 - 20h30</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi</span>
                    <span className="font-semibold">8h30 - 13h30</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche</span>
                    <span className="font-semibold">Fermé</span>
                  </div>
                </div>
                <p className="text-xs mt-4 opacity-90">
                  Dépannages urgents : intervention possible 7j/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
