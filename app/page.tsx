import Image from "next/image";
import { FaPhone } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import ElectricLogo from "@/components/Electriclogo";
export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section
        id="accueil"
        className="relative min-h-screen flex flex-col items-center justify-center text-white px-6 py-16"
      >
        {/* Image de fond */}
        <Image
          src="/hero-sg.png"
          alt="hero-sg JGS-ELEC"
          fill
          className="object-cover -z-10"
          priority
        />

        {/* Overlay sombre pour lisibilité du texte */}
        <div className="absolute inset-0 bg-black/60 -z-10"></div>

        {/* Logo centré */}
        <div className="mb-8">
          <ElectricLogo />
        </div>
        {/* Titre principal */}
        <h1 className="text-4xl md:text-7xl font-bold text-center mb-4">
          Votre électricien de confiance à Boussy-Saint-Antoine (91).
        </h1>

        {/* Sous-titre */}
        <p className="text-lg md:text-3xl text-center max-w-3xl mb-8">
          Installation, rénovation et intervention rapide pour particuliers et
          professionnels.
        </p>

        {/* Boutons CTA */}
        <div className="flex gap-4 flex-col md:flex-row">
          <button className="bg-cta text-white px-6 py-3 rounded hover:bg-cta-hover flex items-center gap-2 transition-colors shadow-lg">
            <FaPhone />
            07 68 75 24 87
          </button>
          <button className="bg-white text-primary px-6 py-3 rounded hover:bg-gray-100 transition-colors shadow-lg">
            Devis gratuit
          </button>
        </div>
      </section>
      {/* Section Services */}
      <section id="services" className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Titre */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary-dark">
            Des prestations complètes
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Basée à Boussy-Saint-Antoine, JGS-ELEC vous accompagne dans tous vos
            projets électriques.
          </p>

          {/* Grid de 5 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 - Dépannages */}
            <div className="group relative h-80 rounded-lg overflow-hidden cursor-pointer">
              <Image
                src="/service-depannage.jpg"
                alt="Dépannages électriques"
                fill
                className="object-cover transition-all duration-500 group-hover:scale-110"
              />
              {/* Label */}
              <div className="absolute bottom-4 left-4 bg-cta text-white px-4 py-2 font-bold text-sm rounded z-10">
                DÉPANNAGES
              </div>
              {/* Overlay texte qui slide */}
              <div className="absolute inset-x-0 bottom-0 bg-black/90 text-white p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-bold text-lg mb-2">Dépannages</h3>
                <p className="text-sm">
                  Intervention pour toute panne électrique, court-circuit,
                  problème de disjoncteur.
                </p>
              </div>
            </div>

            {/* Card 2 - Rénovation */}
            <div className="group relative h-80 rounded-lg overflow-hidden cursor-pointer">
              <Image
                src="/service-renovation.jpg"
                alt="Rénovation électrique"
                fill
                className="object-cover transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-4 left-4 bg-cta text-white px-4 py-2 font-bold text-sm rounded z-10">
                RÉNOVATION
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-black/90 text-white p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-bold text-lg mb-2">
                  Rénovation et Mise aux normes
                </h3>
                <p className="text-sm">
                  Modernisation de vos installations électriques pour plus de
                  sécurité. Mise en conformité du tableau, remplacement de
                  câblage.
                </p>
              </div>
            </div>

            {/* Card 3 - Installations */}
            <div className="group relative h-80 rounded-lg overflow-hidden cursor-pointer">
              <Image
                src="/service-installation.jpg"
                alt="Nouvelles installations"
                fill
                className="object-cover transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-4 left-4 bg-cta text-white px-4 py-2 font-bold text-sm rounded z-10">
                INSTALLATIONS
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-black/90 text-white p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-bold text-lg mb-2">
                  Nouvelles Installations
                </h3>
                <p className="text-sm">
                  Câblage complet pour constructions neuves. Pose de prises,
                  interrupteurs, éclairages intérieurs et extérieurs.
                </p>
              </div>
            </div>

            {/* Card 4 - Domotique */}
            <div className="group relative h-80 rounded-lg overflow-hidden cursor-pointer">
              <Image
                src="/service-domotique.jpg"
                alt="Solutions économiques et domotique"
                fill
                className="object-cover transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-4 left-4 bg-cta text-white px-4 py-2 font-bold text-sm rounded z-10">
                DOMOTIQUE
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-black/90 text-white p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-bold text-lg mb-2">
                  Solutions Économiques
                </h3>
                <p className="text-sm">
                  Installation de VMC, détecteurs de fumée, systèmes d'économie
                  d'énergie, domotique.
                </p>
              </div>
            </div>

            {/* Card 5 - Sécurité */}
            <div className="group relative h-80 rounded-lg overflow-hidden cursor-pointer">
              <Image
                src="/service-securite.jpg"
                alt="Sécurité et surveillance"
                fill
                className="object-cover transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-4 left-4 bg-cta text-white px-4 py-2 font-bold text-sm rounded z-10">
                SÉCURITÉ
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-black/90 text-white p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-bold text-lg mb-2">Sécurité</h3>
                <p className="text-sm">
                  Pose de vidéosurveillance, alarme, interphone, contrôle
                  d'accès.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section À propos */}
      <section id="a-propos" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Colonne gauche - Texte */}
            <div>
              <h2 className="text-7xl md:text-5xl font-bold mb-6 text-primary-dark">
                L’exigence au cœur de chaque intervention
              </h2>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Fondée en 2025 par Julien Georgeais, <strong>JGS-ELEC</strong>{" "}
                  est née d’une conviction simple : dans le domaine de
                  l’électricité, il n’y a pas de place pour l’approximation.
                </p>

                <p>
                  Avant de devenir électricien, j’ai évolué dans un
                  environnement où la
                  <strong> rigueur</strong>, la <strong>discipline</strong> et
                  le
                  <strong> respect absolu des procédures</strong> sont
                  essentiels : l’armée.
                </p>

                <p>
                  Cette exigence, je l’applique aujourd’hui à chacun de mes
                  chantiers. Chaque installation est pensée, réalisée et
                  vérifiée avec un seul objectif : garantir un résultat{" "}
                  <strong>fiable, sécurisé et durable</strong>.
                </p>

                <p>
                  Pas de compromis. Pas d’à-peu-près. Un travail propre,
                  conforme et fait pour durer.
                </p>

                <p>
                  Choisir <strong>JGS-ELEC</strong>, c’est faire appel à un
                  professionnel engagé, qui considère votre sécurité et la
                  qualité de votre installation comme une priorité absolue.
                </p>
              </div>

              {/* 3 points clés */}
              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <FaCheckCircle className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Méthodologie</h3>
                    <p className="text-gray-600 text-xm">
                      Chaque projet est étudié en amont pour éviter les
                      mauvaises surprises.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <FaCheckCircle className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">
                      Rigueur d'exécution
                    </h3>
                    <p className="text-gray-600 text-xm">
                      Des finitions soignées et un respect absolu des normes en
                      vigueur.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <FaCheckCircle className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Fiabilité</h3>
                    <p className="text-gray-600 text-xm">
                      Je suis votre unique interlocuteur, de la signature du
                      devis jusqu'à la livraison finale du chantier.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <p className="text-xl font-semibold mb-4">
                  Prêt à démarrer votre projet ?
                </p>
                <button className="bg-cta text-white px-6 py-3 rounded hover:bg-cta-hover transition-colors shadow-lg flex items-center gap-2">
                  <FaPhone />
                  Contactez-moi
                </button>
              </div>
            </div>

            {/* Colonne droite - Photo */}
            <div className="relative h-96 lg:h-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/electricien-jgs.png" // L'image IA avec casque
                alt="Georgeais Julien - Électricien JGS-ELEC"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Section Abonnements */}
      <section className="py-16 px-6 bg-primary-dark text-white">
        <div className="max-w-7xl mx-auto">
          {/* Titres */}
          <div className="text-center mb-12">
            <p className="text-accent text-sm font-semibold mb-2 uppercase tracking-wide">
              Sécurité - Confort - Entretien
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nos abonnements maintenance
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Intervention prioritaire sous 24h pour nos abonnés. Contrôle
              annuel inclus et tarifs pro sur le matériel.
            </p>
          </div>

          {/* Grid 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 - Essentiel */}
            <div className="bg-white text-gray-800 rounded-lg p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-2">Forfait Essentiel</h3>
              <p className="text-sm text-gray-600 mb-4">12 mois</p>

              <div className="mb-6">
                <p className="text-3xl font-bold text-primary-dark">
                  19,90€<span className="text-sm font-normal">/mois HT</span>
                </p>
                <p className="text-sm text-gray-600">Monophasé</p>
                <p className="text-2xl font-bold text-primary-dark mt-2">
                  24,90€<span className="text-sm font-normal">/mois HT</span>
                </p>
                <p className="text-sm text-gray-600">Triphasé</p>
                <p className="text-sm text-gray-500 mt-2">
                  + 79€ HT frais de dossier
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex gap-2">
                  <FaCheckCircle className="text-accent flex-shrink-0 mt-1" />
                  <span className="text-sm">Contrôle + Rapport TGBT</span>
                </li>
                <li className="flex gap-2">
                  <FaCheckCircle className="text-accent flex-shrink-0 mt-1" />
                  <span className="text-sm">Mise aux normes NF</span>
                </li>
                <li className="flex gap-2">
                  <FaCheckCircle className="text-accent flex-shrink-0 mt-1" />
                  <span className="text-sm">Disjoncteurs à prix pro TTC</span>
                </li>
                <li className="flex gap-2">
                  <FaCheckCircle className="text-accent flex-shrink-0 mt-1" />
                  <span className="text-sm">Choix de marque à prix pro HT</span>
                </li>
                <li className="flex gap-2">
                  <FaCheckCircle className="text-accent flex-shrink-0 mt-1" />
                  <span className="text-sm">1 contrôle d'entretien annuel</span>
                </li>
              </ul>

              <button className="w-full bg-primary text-white py-3 rounded hover:bg-primary-dark transition-colors">
                Choisir ce forfait
              </button>
            </div>

            {/* Card 2 - Sérénité (RECOMMANDÉ) */}
            <div className="bg-white text-gray-800 rounded-lg p-8 shadow-xl border-4 border-cta relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cta text-white px-4 py-1 rounded-full text-sm font-bold">
                RECOMMANDÉ
              </div>

              <h3 className="text-2xl font-bold mb-2">Forfait Sérénité</h3>
              <p className="text-sm text-gray-600 mb-4">24 mois</p>

              <div className="mb-6">
                <p className="text-3xl font-bold text-primary-dark">
                  14,90€<span className="text-sm font-normal">/mois HT</span>
                </p>
                <p className="text-sm text-gray-600">Monophasé</p>
                <p className="text-2xl font-bold text-primary-dark mt-2">
                  19,90€<span className="text-sm font-normal">/mois HT</span>
                </p>
                <p className="text-sm text-gray-600">Triphasé</p>
                <p className="text-sm text-gray-500 mt-2">
                  + 79€ HT frais de dossier
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex gap-2">
                  <FaCheckCircle className="text-accent flex-shrink-0 mt-1" />
                  <span className="text-sm">Tout du Forfait Essentiel</span>
                </li>
                <li className="flex gap-2">
                  <FaCheckCircle className="text-accent flex-shrink-0 mt-1" />
                  <span className="text-sm">
                    1 inter-différentiel à prix pro TTC
                  </span>
                </li>
                <li className="flex gap-2">
                  <FaCheckCircle className="text-accent flex-shrink-0 mt-1" />
                  <span className="text-sm">1 contrôle d'entretien annuel</span>
                </li>
                <li className="flex gap-2">
                  <FaCheckCircle className="text-cta flex-shrink-0 mt-1" />
                  <span className="text-sm font-bold">
                    + 2 détecteurs de fumée OFFERTS
                  </span>
                </li>
              </ul>

              <button className="w-full bg-cta text-white py-3 rounded hover:bg-cta-hover transition-colors">
                Choisir ce forfait
              </button>
            </div>

            {/* Card 3 - Premium */}
            <div className="bg-white text-gray-800 rounded-lg p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-2">Forfait Premium</h3>
              <p className="text-sm text-gray-600 mb-4">36 mois</p>

              <div className="mb-6">
                <p className="text-3xl font-bold text-primary-dark">
                  9,90€<span className="text-sm font-normal">/mois HT</span>
                </p>
                <p className="text-sm text-gray-600">Monophasé</p>
                <p className="text-2xl font-bold text-primary-dark mt-2">
                  12,90€<span className="text-sm font-normal">/mois HT</span>
                </p>
                <p className="text-sm text-gray-600">Triphasé</p>
                <p className="text-sm text-gray-500 mt-2">
                  + 79€ HT frais de dossier
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex gap-2">
                  <FaCheckCircle className="text-accent flex-shrink-0 mt-1" />
                  <span className="text-sm">Tout du Forfait Sérénité</span>
                </li>
                <li className="flex gap-2">
                  <FaCheckCircle className="text-accent flex-shrink-0 mt-1" />
                  <span className="text-sm">
                    2 contrôles d'entretien annuel
                  </span>
                </li>
                <li className="flex gap-2">
                  <FaCheckCircle className="text-cta flex-shrink-0 mt-1" />
                  <span className="text-sm font-bold">
                    + 3 détecteurs de fumée OFFERTS
                  </span>
                </li>
                <li className="flex gap-2">
                  <FaCheckCircle className="text-cta flex-shrink-0 mt-1" />
                  <span className="text-sm font-bold">
                    + 1 bandeau LED RGB 5m OFFERT
                  </span>
                </li>
              </ul>

              <button className="w-full bg-primary text-white py-3 rounded hover:bg-primary-dark transition-colors">
                Choisir ce forfait
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Section CTA finale */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-dark">
            Besoin d'une intervention rapide ?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contactez-nous dès maintenant pour un devis gratuit ou une
            intervention d'urgence.
          </p>

          <div className="flex gap-4 flex-col md:flex-row justify-center">
            <a
              href="tel:0768752487"
              className="bg-cta text-white px-8 py-4 rounded hover:bg-cta-hover flex items-center justify-center gap-2 transition-colors shadow-lg text-lg font-semibold"
            >
              <FaPhone />
              07 68 75 24 87
            </a>
            <a
              href="#contact"
              className="bg-white text-primary border-2 border-primary px-8 py-4 rounded hover:bg-gray-50 transition-colors shadow-lg text-lg font-semibold"
            >
              Demander un devis
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
