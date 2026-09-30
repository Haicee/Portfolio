import { gsap, useGSAP } from "./gsap";

/**
 * Animate project detail expansion with GSAP instead of instant show/hide.
 *
 * @param {React.RefObject} detailRef - ref on the expandable details wrapper
 * @param {boolean} isExpanded - current expanded state
 */
export function useProjectExpand(detailRef, isExpanded) {
  useGSAP(
    () => {
      if (!detailRef.current) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (isExpanded) {
        if (prefersReducedMotion) {
          gsap.set(detailRef.current, {
            height: "auto",
            opacity: 1,
            display: "block",
          });
          return;
        }
        // Expand
        gsap.set(detailRef.current, { display: "block", opacity: 0 });
        gsap.from(detailRef.current, {
          height: 0,
          duration: 0.35,
          ease: "power2.out",
        });
        gsap.to(detailRef.current, {
          opacity: 1,
          duration: 0.3,
          delay: 0.1,
          ease: "power2.out",
        });
      } else {
        if (prefersReducedMotion) {
          gsap.set(detailRef.current, { display: "none" });
          return;
        }
        // Collapse
        gsap.to(detailRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.25,
          ease: "power2.inOut",
          onComplete: () => {
            gsap.set(detailRef.current, { display: "none", clearProps: "height" });
          },
        });
      }
    },
    { scope: detailRef, dependencies: [isExpanded] }
  );
}

/**
 * Certificate modal enter/exit animation.
 *
 * @param {React.RefObject} backdropRef - ref on the backdrop overlay
 * @param {React.RefObject} dialogRef   - ref on the dialog container
 * @param {Function} onCloseComplete   - callback when close animation ends
 */
export function useCertModalAnimation(backdropRef, dialogRef) {
  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) return;

      if (backdropRef.current) {
        gsap.from(backdropRef.current, {
          opacity: 0,
          duration: 0.25,
          ease: "power2.out",
        });
      }

      if (dialogRef.current) {
        gsap.from(dialogRef.current, {
          opacity: 0,
          scale: 0.94,
          y: 16,
          duration: 0.3,
          ease: "power3.out",
        });
      }
    },
    { scope: dialogRef }
  );
}

/**
 * Animate certificate modal close with a callback.
 *
 * @param {React.RefObject} backdropRef
 * @param {React.RefObject} dialogRef
 * @param {Function} onComplete - called after animation finishes
 */
export function animateCertModalClose(backdropRef, dialogRef, onComplete) {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) {
    onComplete();
    return;
  }

  const tl = gsap.timeline({ onComplete });

  if (dialogRef.current) {
    tl.to(dialogRef.current, {
      opacity: 0,
      scale: 0.96,
      y: 10,
      duration: 0.2,
      ease: "power2.in",
    }, 0);
  }

  if (backdropRef.current) {
    tl.to(backdropRef.current, {
      opacity: 0,
      duration: 0.2,
      ease: "power2.in",
    }, 0);
  }
}

/**
 * Mobile menu animation helpers — not using useGSAP since
 * we need imperative open/close control.
 */
export function animateMobileMenuOpen(panelRef) {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (!panelRef.current) return;

  if (prefersReducedMotion) {
    gsap.set(panelRef.current, { opacity: 1, x: 0 });
    return;
  }

  gsap.fromTo(
    panelRef.current,
    { opacity: 0, x: 30 },
    { opacity: 1, x: 0, duration: 0.3, ease: "power3.out" }
  );
}

export function animateMobileMenuClose(panelRef, onComplete) {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (!panelRef.current) {
    onComplete();
    return;
  }

  if (prefersReducedMotion) {
    onComplete();
    return;
  }

  gsap.to(panelRef.current, {
    opacity: 0,
    x: 30,
    duration: 0.2,
    ease: "power2.in",
    onComplete,
  });
}
