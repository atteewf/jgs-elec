export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-primary-dark mb-8">
          Mentions Légales
        </h1>

        {/* Éditeur du site */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-primary-dark mb-4">
            Éditeur du site
          </h2>
          <div className="space-y-2 text-gray-700">
            <p>
              <strong>Raison sociale :</strong> JGS-ELEC
            </p>
            <p>
              <strong>Forme juridique :</strong> EURL
            </p>
            <p>
              <strong>SIRET :</strong> 995 024 049 00018
            </p>
            <p>
              <strong>Adresse :</strong>68 RUE DE LA JUSTICE
              Boussy-Saint-Antoine, 91800
            </p>
            <p>
              <strong>Téléphone :</strong> 07 68 75 24 87
            </p>
            <p>
              <strong>Email :</strong> contact@jgs-elec.com
            </p>
            <p>
              <strong>Responsable de publication :</strong> Julien GEORGEAIS
            </p>
          </div>
        </section>

        {/* Hébergeur */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-primary-dark mb-4">
            Hébergement
          </h2>
          <div className="space-y-2 text-gray-700">
            <p>
              <strong>Hébergeur :</strong> Vercel Inc.
            </p>
            <p>
              <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA
              91789, USA
            </p>
            <p>
              <strong>Site web :</strong>{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cta hover:underline"
              >
                vercel.com
              </a>
            </p>
          </div>
        </section>

        {/* Propriété intellectuelle */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-primary-dark mb-4">
            Propriété intellectuelle
          </h2>
          <p className="text-gray-700 leading-relaxed">
            L'ensemble de ce site relève de la législation française et
            internationale sur le droit d'auteur et la propriété intellectuelle.
            Tous les droits de reproduction sont réservés, y compris pour les
            documents téléchargeables et les représentations iconographiques et
            photographiques.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            La reproduction de tout ou partie de ce site sur un support
            électronique quel qu'il soit est formellement interdite sauf
            autorisation expresse de JGS-ELEC.
          </p>
        </section>

        {/* Protection des données */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-primary-dark mb-4">
            Protection des données personnelles
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Conformément à la loi « Informatique et Libertés » du 6 janvier 1978
            modifiée et au Règlement Général sur la Protection des Données
            (RGPD), vous disposez d'un droit d'accès, de rectification, de
            suppression et d'opposition aux données personnelles vous
            concernant.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Pour exercer ces droits, vous pouvez nous contacter par email à :{" "}
            <a
              href="mailto:contact@jgs-elec.com"
              className="text-cta hover:underline"
            >
              contact@jgs-elec.com
            </a>
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Pour plus d'informations, consultez notre{" "}
            <a
              href="/politique-confidentialite"
              className="text-cta hover:underline font-semibold"
            >
              Politique de confidentialité
            </a>
            .
          </p>
        </section>

        {/* Cookies */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-primary-dark mb-4">Cookies</h2>
          <p className="text-gray-700 leading-relaxed">
            Ce site n'utilise actuellement aucun cookie de tracking ou
            d'analyse. Si cela devait évoluer, un bandeau de consentement
            conforme au RGPD sera mis en place.
          </p>
        </section>

        {/* Crédits */}
        <section>
          <h2 className="text-2xl font-bold text-primary-dark mb-4">Crédits</h2>
          <div className="space-y-2 text-gray-700">
            <p>
              <strong>Conception et développement :</strong> ateeew@gmail.com
            </p>
            <p>
              <strong>Photos :</strong> JGS-ELEC et banques d'images libres de
              droits
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
