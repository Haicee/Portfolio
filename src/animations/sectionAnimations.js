import { gsap, ScrollTrigger, useGSAP } from "./gsap";

/**
 * Reusable scroll-triggered reveal for section-level containers.
 * Animates heading, divider line, and content blocks once on viewport entry.
 *
 * @param {React.RefObject} containerRef - ref wrapping the section
 * @param {object} [options]
 * @param {string} [options.start] - ScrollTrigger start position
 * @param {number} [options.stagger] - stagger between child items
 */
export function useSectionReveal(containerRef, options = {}) {
  const { start = "top 82%", stagger = 0.08 } = options;

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(containerRef.current.querySelectorAll(".reveal-heading, .reveal-line, .reveal-content, .reveal-item"), {
          opacity: 1, y: 0, scaleX: 1,
        });
        return;
      }

      // Section heading
      const headings = containerRef.current.querySelectorAll(".reveal-heading");
      if (headings.length) {
        gsap.set(headings, { opacity: 0, y: 20 });
        ScrollTrigger.create({
          trigger: containerRef.current,
          start,
          once: true,
          onEnter: () => {
            gsap.to(headings, {
              opacity: 1,
              y: 0,
              duration: 0.55,
              ease: "power2.out",
            });
          },
        });
      }

      // Divider / technical lines
      const lines = containerRef.current.querySelectorAll(".reveal-line");
      if (lines.length) {
        gsap.set(lines, { scaleX: 0, transformOrigin: "left center" });
        ScrollTrigger.create({
          trigger: containerRef.current,
          start,
          once: true,
          onEnter: () => {
            gsap.to(lines, {
              scaleX: 1,
              duration: 0.6,
              delay: 0.15,
              ease: "power2.inOut",
            });
          },
        });
      }

      // Generic content blocks
      const content = containerRef.current.querySelectorAll(".reveal-content");
      if (content.length) {
        gsap.set(content, { opacity: 0, y: 20 });
        ScrollTrigger.create({
          trigger: containerRef.current,
          start,
          once: true,
          onEnter: () => {
            gsap.to(content, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              delay: 0.1,
              ease: "power2.out",
            });
          },
        });
      }

      // Staggered items (cards, list entries)
      const items = containerRef.current.querySelectorAll(".reveal-item");
      if (items.length) {
        gsap.set(items, { opacity: 0, y: 22 });
        ScrollTrigger.create({
          trigger: containerRef.current,
          start,
          once: true,
          onEnter: () => {
            gsap.to(items, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger,
              ease: "power2.out",
              delay: 0.15,
            });
          },
        });
      }
    },
    { scope: containerRef }
  );
}

/**
 * Sidebar entrance animation — subtle fade on initial mount.
 *
 * @param {React.RefObject} sidebarRef
 */
export function useSidebarEntrance(sidebarRef) {
  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(sidebarRef.current, { opacity: 1 });
        return;
      }

      gsap.from(sidebarRef.current, {
        opacity: 0,
        x: -12,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.1,
      });
    },
    { scope: sidebarRef }
  );
}

/**
 * Footer simple reveal.
 *
 * @param {React.RefObject} footerRef
 */
export function useFooterReveal(footerRef) {
  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) return;

      gsap.set(footerRef.current, { opacity: 0, y: 12 });
      ScrollTrigger.create({
        trigger: footerRef.current,
        start: "top 92%",
        once: true,
        onEnter: () => {
          gsap.to(footerRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          });
        },
      });
    },
    { scope: footerRef }
  );
}
