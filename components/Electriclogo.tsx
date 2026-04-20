"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function ElectricLogo() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Générer des particules électriques aléatoires
    function createSparks() {
      for (let i = 0; i < 20; i++) {
        const spark = document.createElement("div");
        spark.className = "spark";

        // Position de départ aléatoire autour du logo
        const angle = Math.random() * Math.PI * 2;
        const distance = 150 + Math.random() * 100;
        const startX = Math.cos(angle) * distance;
        const startY = Math.sin(angle) * distance;

        // Mouvement aléatoire
        const moveX = (Math.random() - 0.5) * 200;
        const moveY = (Math.random() - 0.5) * 200;

        spark.style.left = `${50 + startX / 6.5}%`;
        spark.style.top = `${50 + startY / 2.5}%`;
        spark.style.setProperty("--tx", `${moveX}px`);
        spark.style.setProperty("--ty", `${moveY}px`);
        spark.style.animationDelay = `${Math.random() * 3}s`;

        container.appendChild(spark);
      }
    }

    // Créer des arcs électriques
    function createLightningBolts() {
      for (let i = 0; i < 8; i++) {
        const bolt = document.createElement("div");
        bolt.className = "lightning-bolt";

        const angle = (i / 8) * 360;
        const distance = 35; // En pourcentage
        const x = 50 + Math.cos((angle * Math.PI) / 180) * distance;
        const y = 50 + Math.sin((angle * Math.PI) / 180) * distance;

        bolt.style.left = `${x}%`;
        bolt.style.top = `${y}%`;
        bolt.style.transform = `rotate(${angle + 90}deg)`;
        bolt.style.animationDelay = `${i * 0.5}s`;

        container.appendChild(bolt);
      }
    }

    // Créer des étincelles qui jaillissent de l'éclair central
    function createSparkBursts() {
      for (let i = 0; i < 12; i++) {
        const burst = document.createElement("div");
        burst.className = "spark-burst";

        const angle = (i / 12) * 360;

        burst.style.left = "50%";
        burst.style.top = "50%";
        burst.style.transform = `rotate(${angle}deg)`;
        burst.style.animationDelay = `${i * 0.12}s`;

        container.appendChild(burst);
      }
    }

    createSparks();
    createLightningBolts();
    createSparkBursts();

    // Cleanup
    return () => {
      const sparks = container.querySelectorAll(
        ".spark, .lightning-bolt, .spark-burst",
      );
      sparks.forEach((el) => el.remove());
    };
  }, []);

  return (
    <>
      <style jsx>{`
        .logo-container-electric {
          position: relative;
          width: 100%;
          max-width: 1300px;
          height: auto;
          aspect-ratio: 13 / 5;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Particules électriques */
        .logo-container-electric :global(.spark) {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #63d2ff;
          border-radius: 50%;
          box-shadow:
            0 0 10px #63d2ff,
            0 0 20px #63d2ff,
            0 0 30px #4fb3e0;
          animation: sparkFloat 3s infinite ease-in-out;
          opacity: 0;
          pointer-events: none;
        }

        @keyframes sparkFloat {
          0%,
          100% {
            opacity: 0;
            transform: translate(0, 0) scale(0.5);
          }
          10% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
            transform: translate(var(--tx), var(--ty)) scale(1);
          }
          90% {
            opacity: 0.3;
          }
        }

        /* Arc électrique principal */
        .logo-container-electric :global(.lightning-bolt) {
          position: absolute;
          width: 2px;
          height: 60px;
          background: linear-gradient(
            to bottom,
            rgba(99, 210, 255, 0) 0%,
            rgba(99, 210, 255, 1) 50%,
            rgba(99, 210, 255, 0) 100%
          );
          transform-origin: top center;
          animation: boltFlash 4s infinite;
          opacity: 0;
          box-shadow: 0 0 10px #63d2ff;
          pointer-events: none;
        }

        @keyframes boltFlash {
          0%,
          100% {
            opacity: 0;
            transform: translateY(0) scaleY(1);
          }
          5% {
            opacity: 1;
            transform: translateY(-20px) scaleY(1.2);
          }
          10% {
            opacity: 0;
            transform: translateY(-40px) scaleY(0.8);
          }
        }

        /* Glow pulsé sur l'éclair du logo */
        @keyframes pulseGlow {
          0%,
          100% {
            filter: drop-shadow(0 0 20px rgba(99, 210, 255, 0.5));
          }
          50% {
            filter: drop-shadow(0 0 40px rgba(99, 210, 255, 0.9))
              drop-shadow(0 0 60px rgba(99, 210, 255, 0.6));
          }
        }

        .logo-container-electric :global(.logo-image) {
          animation: pulseGlow 6s infinite ease-in-out;
        }

        /* Étincelles qui jaillissent de l'éclair */
        .logo-container-electric :global(.spark-burst) {
          position: absolute;
          width: 2px;
          height: 15px;
          background: linear-gradient(
            to top,
            rgba(99, 210, 255, 0),
            rgba(99, 210, 255, 1)
          );
          opacity: 0;
          transform-origin: bottom center;
          animation: burstOut 1.5s infinite;
          pointer-events: none;
        }

        @keyframes burstOut {
          0% {
            opacity: 0;
            transform: scale(1) translateY(0);
          }
          20% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: scale(0.3) translateY(-80px);
          }
        }
      `}</style>

      <div ref={containerRef} className="logo-container-electric">
        <Image
          src="/JGS-ELEC_LOGO_SANSFOND_CENTRAL.PNG"
          width={1300}
          height={500}
          alt="Logo JGS-ELEC"
          className="logo-image relative z-10"
          priority
        />
      </div>
    </>
  );
}
// "use client";

// import { useEffect, useRef } from "react";
// import Image from "next/image";

// export default function ElectricLogo() {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     const container = containerRef.current;

//     // Générer des particules électriques aléatoires
//     function createSparks() {
//       for (let i = 0; i < 25; i++) {
//         const spark = document.createElement("div");
//         spark.className = "spark";

//         // Position de départ aléatoire autour du logo
//         const angle = Math.random() * Math.PI * 2;
//         const distance = 150 + Math.random() * 100;
//         const startX = Math.cos(angle) * distance;
//         const startY = Math.sin(angle) * distance;

//         // Mouvement aléatoire
//         const moveX = (Math.random() - 0.5) * 200;
//         const moveY = (Math.random() - 0.5) * 200;

//         spark.style.left = `${50 + startX / 6.5}%`;
//         spark.style.top = `${50 + startY / 2.5}%`;
//         spark.style.setProperty("--tx", `${moveX}px`);
//         spark.style.setProperty("--ty", `${moveY}px`);
//         spark.style.animationDelay = `${Math.random() * 3}s`;

//         container.appendChild(spark);
//       }
//     }

//     // Créer des arcs électriques
//     function createLightningBolts() {
//       for (let i = 0; i < 10; i++) {
//         const bolt = document.createElement("div");
//         bolt.className = "lightning-bolt";

//         const angle = (i / 8) * 360;
//         const distance = 35; // En pourcentage
//         const x = 50 + Math.cos((angle * Math.PI) / 180) * distance;
//         const y = 50 + Math.sin((angle * Math.PI) / 180) * distance;

//         bolt.style.left = `${x}%`;
//         bolt.style.top = `${y}%`;
//         bolt.style.transform = `rotate(${angle + 90}deg)`;
//         bolt.style.animationDelay = `${i * 0.5}s`;

//         container.appendChild(bolt);
//       }
//     }

//     // Créer des étincelles qui jaillissent de l'éclair central
//     function createSparkBursts() {
//       for (let i = 0; i < 12; i++) {
//         const burst = document.createElement("div");
//         burst.className = "spark-burst";

//         const angle = (i / 12) * 360;

//         burst.style.left = "50%";
//         burst.style.top = "50%";
//         burst.style.transform = `rotate(${angle}deg)`;
//         burst.style.animationDelay = `${i * 0.12}s`;

//         container.appendChild(burst);
//       }
//     }

//     createSparks();
//     createLightningBolts();
//     createSparkBursts();

//     // Cleanup
//     return () => {
//       const sparks = container.querySelectorAll(
//         ".spark, .lightning-bolt, .spark-burst",
//       );
//       sparks.forEach((el) => el.remove());
//     };
//   }, []);

//   return (
//     <>
//       <style jsx>{`
//         .logo-container-electric {
//           position: relative;
//           width: 100%;
//           max-width: 1300px;
//           height: auto;
//           aspect-ratio: 13 / 5;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         /* Particules électriques */
//         .logo-container-electric :global(.spark) {
//           position: absolute;
//           width: 4px;
//           height: 4px;
//           background: #63d2ff;
//           border-radius: 50%;
//           box-shadow:
//             0 0 10px #63d2ff,
//             0 0 20px #63d2ff,
//             0 0 30px #4fb3e0;
//           animation: sparkFloat 3s infinite ease-in-out;
//           opacity: 0;
//           pointer-events: none;
//         }

//         @keyframes sparkFloat {
//           0%,
//           100% {
//             opacity: 0;
//             transform: translate(0, 0) scale(0.5);
//           }
//           10% {
//             opacity: 1;
//           }
//           50% {
//             opacity: 0.8;
//             transform: translate(var(--tx), var(--ty)) scale(1);
//           }
//           90% {
//             opacity: 0.3;
//           }
//         }

//         /* Arc électrique principal */
//         .logo-container-electric :global(.lightning-bolt) {
//           position: absolute;
//           width: 2px;
//           height: 60px;
//           background: linear-gradient(
//             to bottom,
//             rgba(99, 210, 255, 0) 0%,
//             rgba(99, 210, 255, 1) 50%,
//             rgba(99, 210, 255, 0) 100%
//           );
//           transform-origin: top center;
//           animation: boltFlash 4s infinite;
//           opacity: 0;
//           box-shadow: 0 0 10px #63d2ff;
//           pointer-events: none;
//         }

//         @keyframes boltFlash {
//           0%,
//           100% {
//             opacity: 0;
//             transform: translateY(0) scaleY(1);
//           }
//           5% {
//             opacity: 1;
//             transform: translateY(-20px) scaleY(1.2);
//           }
//           10% {
//             opacity: 0;
//             transform: translateY(-40px) scaleY(0.8);
//           }
//         }

//         /* Glow pulsé sur l'éclair du logo */
//         @keyframes pulseGlow {
//           0%,
//           100% {
//             filter: drop-shadow(0 0 20px rgba(99, 210, 255, 0.5));
//           }
//           50% {
//             filter: drop-shadow(0 0 40px rgba(99, 210, 255, 0.9))
//               drop-shadow(0 0 60px rgba(99, 210, 255, 0.6));
//           }
//         }

//         .logo-container-electric :global(.logo-image) {
//           animation: pulseGlow 2s infinite ease-in-out;
//         }

//         /* Étincelles qui jaillissent de l'éclair */
//         .logo-container-electric :global(.spark-burst) {
//           position: absolute;
//           width: 2px;
//           height: 15px;
//           background: linear-gradient(
//             to top,
//             rgba(99, 210, 255, 0),
//             rgba(99, 210, 255, 1)
//           );
//           opacity: 0;
//           transform-origin: bottom center;
//           animation: burstOut 1.5s infinite;
//           pointer-events: none;
//         }

//         @keyframes burstOut {
//           0% {
//             opacity: 0;
//             transform: scale(1) translateY(0);
//           }
//           20% {
//             opacity: 1;
//           }
//           100% {
//             opacity: 0;
//             transform: scale(0.3) translateY(-80px);
//           }
//         }

//         /* Halo électrique de fond */
//         .logo-container-electric :global(.electric-halo) {
//           position: absolute;
//           width: 120%;
//           height: 150%;
//           background: radial-gradient(
//             ellipse at center,
//             rgba(99, 210, 255, 0.1) 0%,
//             rgba(99, 210, 255, 0.05) 30%,
//             transparent 70%
//           );
//           animation: haloBreath 3s infinite ease-in-out;
//           pointer-events: none;
//         }

//         @keyframes haloBreath {
//           0%,
//           100% {
//             transform: scale(1);
//             opacity: 0.6;
//           }
//           50% {
//             transform: scale(1.1);
//             opacity: 1;
//           }
//         }
//       `}</style>

//       <div ref={containerRef} className="logo-container-electric">
//         <div className="electric-halo"></div>
//         <Image
//           src="/JGS-ELEC_LOGO_SANSFOND_CENTRAL.PNG"
//           width={1300}
//           height={500}
//           alt="Logo JGS-ELEC"
//           className="logo-image relative z-10"
//           priority
//         />
//       </div>
//     </>
//   );
// }
