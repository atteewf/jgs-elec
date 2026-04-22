import Image from "next/image";
import { FaPhone } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import ElectricLogo from "@/components/Electriclogo";
import PhoneButton from "@/components/PhoneButton";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1">
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

        {/* Overlay sombre RENFORCÉ (70% au lieu de 60%) */}
        <div className="absolute inset-0 bg-black/70 -z-10"></div>

        {/* Logo centré SANS contrainte (comme version initiale) */}
        <div className="mb-8">
          <ElectricLogo />
        </div>

        {/* Titre principal RENFORCÉ */}
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 leading-tight">
          Votre électricien de confiance à Boussy-Saint-Antoine (91)
        </h1>

        {/* Badge dépannage urgence AJOUTÉ sous le titre */}
        <p className="text-lg md:text-xl text-yellow-400 font-bold mb-6 flex items-center gap-2">
          ⚡ Dépannage en urgence 7j/7
        </p>

        {/* Sous-titre avec bullet points */}
        <p className="text-base md:text-lg text-center max-w-3xl mb-8 text-gray-200">
          Installation • Rénovation • Dépannage rapide • Mise aux normes
        </p>

        {/* Boutons CTA RENFORCÉS */}
        <div className="flex gap-4 flex-col md:flex-row">
          <PhoneButton className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold text-xl flex items-center gap-3 transition-all shadow-2xl hover:scale-105">
            <FaPhone />
            07 68 75 24 87
          </PhoneButton>
          <Link
            href="/contact"
            className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all shadow-2xl hover:scale-105"
          >
            Devis gratuit
          </Link>
        </div>
      </section>
      {/* Section Services */}
      <section id="services" className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Titre */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary-dark">
            Des prestations complètes
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
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
              <div className="absolute top-4 left-4 bg-cta text-white px-4 py-2 font-bold text-sm rounded z-10">
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
              <div className="absolute top-4 left-4 bg-cta text-white px-4 py-2 font-bold text-sm rounded z-10">
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
              <div className="absolute top-4 left-4 bg-cta text-white px-4 py-2 font-bold text-sm rounded z-10">
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
              <div className="absolute top-4 left-4 bg-cta text-white px-4 py-2 font-bold text-sm rounded z-10">
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
              <div className="absolute top-4 left-4 bg-cta text-white px-4 py-2 font-bold text-sm rounded z-10">
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
            {/* Card 6 - Borne */}
            <div className="group relative h-80 rounded-lg overflow-hidden cursor-pointer">
              <Image
                src="/service-borne.jpg"
                alt="Sécurité et surveillance"
                fill
                className="object-cover transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 bg-cta text-white px-4 py-2 font-bold text-sm rounded z-10">
                BORNE ÉLECTRIQUE
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-black/90 text-white p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-bold text-lg mb-2">Borne de recharge</h3>
                <p className="text-sm">
                  Installation de bornes de recharge pour véhicules électriques,
                  domestiques et professionnelles. (à venir).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Zone d'intervention */}

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Titre */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-dark">
              Zone d'intervention
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              JGS-ELEC intervient dans le 91 (Essonne) et les départements
              limitrophes : <br /> Val-de-Marne (94) et Seine-et-Marne (77).
            </p>
          </div>

          {/* Carte + Informations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center my-20">
            {/* Colonne gauche - Carte */}
            <div className="relative rounded-lg overflow-hidden shadow-2xl h-[218px]">
              <Image
                src="/zone-intervention.jpg"
                alt="Zone d'intervention JGS-ELEC - Essonne, Val-de-Marne, Seine-et-Marne"
                fill
                className="object-cover"
              />
            </div>
            {/* Colonne droite - Infos */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
                  91
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-primary-dark">
                    Essonne
                  </h3>
                  <p className="text-gray-600">
                    Boussy-Saint-Antoine, Brunoy, Varennes-Jarcy, Yerres et les
                    communes environnantes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
                  94
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-primary-dark">
                    Val-de-Marne
                  </h3>
                  <p className="text-gray-600">
                    Proximité immédiate avec l'Essonne pour une intervention
                    rapide.
                    <br />( Mandres les Roses, Perigny, Villecresnes...)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
                  77
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-primary-dark">
                    Seine-et-Marne
                  </h3>
                  <p className="text-gray-600">
                    Brie-Comte-Robert et secteurs limitrophes couverts selon
                    disponibilités.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 mb-16  max-w-2xl mx-auto text-center p-6 bg-gray-50 rounded-lg border-l-4 border-cta">
            <p className="text-gray-700 font-medium">
              💡 <strong>Votre secteur n'est pas listé ?</strong>
            </p>
            <p className="text-gray-600 mt-2">
              Contactez-nous ! Nous étudions chaque demande avec attention.
            </p>
          </div>
        </div>
      </section>
      {/* Section À propos */}
      <section id="a-propos" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Colonne gauche - Texte */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-dark">
                L’exigence au cœur de chaque intervention
              </h2>

              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p>
                  Fondée en 2025 par Julien Georgeais,{" "}
                  <strong>JGS-ELEC </strong>
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
                    <p className="text-gray-600 text-sm">
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
                    <p className="text-gray-600 text-sm">
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
                    <p className="text-gray-600 text-sm">
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
                <PhoneButton className="bg-cta text-white px-5 py-3 rounded hover:bg-cta-hover transition-colors shadow-lg inline-flex items-center gap-2">
                  <FaPhone />
                  Contactez-moi
                </PhoneButton>
              </div>
            </div>
            {/* Colonne droite - Photo */}
            <div className="relative h-80 lg:h-[700px] w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/electricien-jgs.png"
                alt="Georgeais Julien - Électricien JGS-ELEC"
                fill
                className="object-cover  object-center"
              />
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
            <PhoneButton className="bg-cta text-white px-8 py-4 rounded hover:bg-cta-hover flex items-center justify-center gap-2 transition-colors shadow-lg text-lg font-semibold">
              <FaPhone />
              07 68 75 24 87
            </PhoneButton>
            <Link
              href="/contact"
              className="bg-white text-primary px-6 py-3 rounded hover:bg-gray-100 transition-colors shadow-lg"
            >
              Devis gratuit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
