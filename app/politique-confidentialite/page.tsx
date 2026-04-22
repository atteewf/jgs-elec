export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-primary-dark mb-8">
          Politique de Confidentialité
        </h1>

        <p className="text-gray-600 mb-8">
          Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
        </p>

        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-primary-dark mb-4">
            Introduction
          </h2>
          <p className="text-gray-700 leading-relaxed">
            JGS-ELEC s'engage à protéger la vie privée de ses utilisateurs.
            Cette politique de confidentialité explique quelles données
            personnelles nous collectons, pourquoi nous les collectons, et
            comment nous les utilisons.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Conformément au Règlement Général sur la Protection des Données
            (RGPD) et à la loi Informatique et Libertés, vous disposez de droits
            sur vos données personnelles que vous pouvez exercer à tout moment.
          </p>
        </section>

        {/* Données collectées */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-primary-dark mb-4">
            1. Données personnelles collectées
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nous collectons les données personnelles suivantes uniquement
            lorsque vous remplissez notre formulaire de contact :
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>Nom complet</li>
            <li>Numéro de téléphone</li>
            <li>Adresse email</li>
            <li>Code postal</li>
            <li>Type d'intervention souhaité</li>
            <li>Message (optionnel)</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            <strong>
              Aucune donnée n'est collectée automatiquement lors de votre
              navigation sur le site.
            </strong>
          </p>
        </section>

        {/* Finalité */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-primary-dark mb-4">
            2. Finalité du traitement
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Les données collectées via le formulaire de contact sont utilisées
            uniquement pour :
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-4">
            <li>Répondre à votre demande d'intervention ou de renseignement</li>
            <li>Vous recontacter par téléphone ou email</li>
            <li>Établir un devis si nécessaire</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            <strong>
              Nous ne vendons, ne louons, ni ne partageons vos données
              personnelles avec des tiers à des fins commerciales.
            </strong>
          </p>
        </section>

        {/* Base légale */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-primary-dark mb-4">
            3. Base légale du traitement
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Le traitement de vos données repose sur votre{" "}
            <strong>consentement explicite</strong>, donné lors de la validation
            du formulaire de contact en cochant la case prévue à cet effet.
          </p>
        </section>

        {/* Destinataires */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-primary-dark mb-4">
            4. Destinataires des données
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Vos données personnelles sont accessibles uniquement par :
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-4">
            <li>
              <strong>JGS-ELEC</strong> (Julien GEORGEAIS) - responsable du
              traitement
            </li>
            <li>
              Notre hébergeur technique <strong>Vercel Inc.</strong> dans le
              cadre strict de l'hébergement du site
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Aucun sous-traitant marketing, commercial ou publicitaire n'a accès
            à vos données.
          </p>
        </section>

        {/* Durée de conservation */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-primary-dark mb-4">
            5. Durée de conservation
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Les données issues du formulaire de contact sont conservées pendant
            :
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-4">
            <li>
              <strong>3 ans</strong> à compter de votre dernier contact,
              conformément aux recommandations de la CNIL
            </li>
            <li>
              Passé ce délai, vos données sont automatiquement supprimées de nos
              systèmes
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Vous pouvez demander la suppression anticipée de vos données à tout
            moment (voir section "Vos droits").
          </p>
        </section>

        {/* Sécurité */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-primary-dark mb-4">
            6. Sécurité des données
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Nous mettons en œuvre toutes les mesures techniques et
            organisationnelles appropriées pour protéger vos données contre :
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-4">
            <li>L'accès non autorisé</li>
            <li>La perte accidentelle</li>
            <li>La modification ou la divulgation non autorisée</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Le site est hébergé sur une infrastructure sécurisée (Vercel) avec
            connexion HTTPS (certificat SSL).
          </p>
        </section>

        {/* Vos droits */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-primary-dark mb-4">
            7. Vos droits (RGPD)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Conformément au RGPD, vous disposez des droits suivants concernant
            vos données personnelles :
          </p>
          <div className="space-y-4 text-gray-700">
            <div>
              <p className="font-semibold text-primary-dark">✓ Droit d'accès</p>
              <p className="ml-4">
                Vous pouvez demander une copie de toutes les données que nous
                détenons sur vous.
              </p>
            </div>
            <div>
              <p className="font-semibold text-primary-dark">
                ✓ Droit de rectification
              </p>
              <p className="ml-4">
                Vous pouvez demander la correction de données inexactes ou
                incomplètes.
              </p>
            </div>
            <div>
              <p className="font-semibold text-primary-dark">
                ✓ Droit à l'effacement ("droit à l'oubli")
              </p>
              <p className="ml-4">
                Vous pouvez demander la suppression de vos données personnelles.
              </p>
            </div>
            <div>
              <p className="font-semibold text-primary-dark">
                ✓ Droit à la limitation du traitement
              </p>
              <p className="ml-4">
                Vous pouvez demander la suspension du traitement de vos données.
              </p>
            </div>
            <div>
              <p className="font-semibold text-primary-dark">
                ✓ Droit à la portabilité
              </p>
              <p className="ml-4">
                Vous pouvez récupérer vos données dans un format structuré et
                lisible.
              </p>
            </div>
            <div>
              <p className="font-semibold text-primary-dark">
                ✓ Droit d'opposition
              </p>
              <p className="ml-4">
                Vous pouvez vous opposer au traitement de vos données.
              </p>
            </div>
            <div>
              <p className="font-semibold text-primary-dark">
                ✓ Droit de retirer votre consentement
              </p>
              <p className="ml-4">
                Vous pouvez retirer votre consentement à tout moment.
              </p>
            </div>
          </div>

          <div className="mt-6 p-6 bg-cta/10 border-l-4 border-cta rounded">
            <p className="font-semibold text-primary-dark mb-2">
              Comment exercer vos droits ?
            </p>
            <p className="text-gray-700">
              Pour exercer l'un de ces droits, contactez-nous par email à :
              <a
                href="mailto:georgeais@jgs-elec.com"
                className="text-cta hover:underline font-semibold ml-1"
              >
                georgeais@jgs-elec.com
              </a>
            </p>
            <p className="text-gray-700 mt-2">
              Nous vous répondrons dans un délai maximum de{" "}
              <strong>1 mois</strong>.
            </p>
          </div>
        </section>

        {/* Cookies */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-primary-dark mb-4">
            8. Cookies et traceurs
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Ce site{" "}
            <strong>
              n'utilise actuellement aucun cookie de tracking, d'analyse ou
              publicitaire
            </strong>
            .
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Si nous décidons d'utiliser des cookies à l'avenir (ex: Google
            Analytics), un bandeau de consentement conforme au RGPD sera mis en
            place et cette politique sera mise à jour.
          </p>
        </section>

        {/* Réclamation */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-primary-dark mb-4">
            9. Droit de réclamation auprès de la CNIL
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Si vous estimez que vos droits ne sont pas respectés, vous avez le
            droit d'introduire une réclamation auprès de la Commission Nationale
            de l'Informatique et des Libertés (CNIL) :
          </p>
          <div className="mt-4 p-6 bg-gray-50 rounded-lg">
            <p className="text-gray-700">
              <strong>CNIL</strong>
            </p>
            <p className="text-gray-700">3 Place de Fontenoy - TSA 80715</p>
            <p className="text-gray-700">75334 PARIS CEDEX 07</p>
            <p className="text-gray-700">Téléphone : 01 53 73 22 22</p>
            <p className="text-gray-700">
              Site web :{" "}
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cta hover:underline"
              >
                www.cnil.fr
              </a>
            </p>
          </div>
        </section>

        {/* Modifications */}
        <section>
          <h2 className="text-2xl font-bold text-primary-dark mb-4">
            10. Modifications de cette politique
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Nous nous réservons le droit de modifier cette politique de
            confidentialité à tout moment. La date de dernière mise à jour est
            indiquée en haut de cette page.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            En cas de modification substantielle, nous vous en informerons par
            email si nous disposons de vos coordonnées.
          </p>
        </section>

        {/* Contact */}
        <div className="mt-12 p-6 bg-primary-dark text-white rounded-lg">
          <h3 className="font-bold text-xl mb-3">
            Des questions sur vos données ?
          </h3>
          <p className="mb-4">Contactez-nous, nous sommes à votre écoute :</p>
          <p>
            📧 Email :{" "}
            <a
              href="mailto:georgeais@jgs-elec.com"
              className="underline hover:text-cta"
            >
              georgeais@jgs-elec.com
            </a>
          </p>
          <p>📞 Téléphone : 07 68 75 24 87</p>
        </div>
      </div>
    </div>
  );
}
