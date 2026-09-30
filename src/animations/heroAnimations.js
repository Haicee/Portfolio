import { gsap, useGSAP } from "./gsap";

export function useHeroAnimation(containerRef) {
  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const elements = [
        ".hero-badge",
        ".hero-title",
        ".hero-subtitle",
        ".hero-description",
        ".hero-socials",
        ".hero-socials a",
        ".hero-cta",
        ".hero-cta a",
        ".hero-profile",
      ];

      // Reduced motion
      if (prefersReducedMotion) {
        gsap.set(elements, {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
        });

        return;
      }

      // Initial states
      gsap.set(".hero-badge", {
        opacity: 0,
        y: 20,
      });

      gsap.set(".hero-title", {
        opacity: 0,
        y: 30,
      });

      gsap.set(".hero-subtitle", {
        opacity: 0,
        y: 20,
      });

      gsap.set(".hero-description", {
        opacity: 0,
        y: 15,
      });

      gsap.set(".hero-socials", {
        opacity: 0,
        y: 12,
      });

      gsap.set(".hero-socials a", {
        opacity: 0,
        y: 10,
      });

      gsap.set(".hero-cta", {
        opacity: 0,
        y: 12,
      });

      gsap.set(".hero-cta a", {
        opacity: 0,
        y: 8,
      });

      gsap.set(".hero-profile", {
        opacity: 0,
        x: 40,
        scale: 0.96,
      });

      // Animation timeline
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl
        .to(".hero-badge", {
          opacity: 1,
          y: 0,
          duration: 0.5,
        })

        .to(
          ".hero-title",
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.3"
        )

        .to(
          ".hero-subtitle",
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
          },
          "-=0.3"
        )

        .to(
          ".hero-description",
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
          },
          "-=0.25"
        )

        .to(
          ".hero-socials",
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
          },
          "-=0.2"
        )

        .to(
          ".hero-socials a",
          {
            opacity: 1,
            y: 0,
            duration: 0.35,
            stagger: 0.06,
          },
          "-=0.15"
        )

        .to(
          ".hero-cta",
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
          },
          "-=0.2"
        )

        .to(
          ".hero-cta a",
          {
            opacity: 1,
            y: 0,
            duration: 0.35,
            stagger: 0.08,
          },
          "-=0.15"
        )

        // PROFILE IS INTENTIONALLY LAST
        .to(".hero-profile", {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.7,
          ease: "power2.out",
        });
    },
    {
      scope: containerRef,
    }
  );
}
