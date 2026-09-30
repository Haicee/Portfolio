import hoverSoundFile from "../assets/sounds/hover.m4a";
import clickSoundFile from "../assets/sounds/click.m4a";
import turnonSoundFile from "../assets/sounds/turnon.m4a";
import { useState } from "react";


class SoundFX {
  constructor() {
    this.hoverAudio = null;
    this.clickAudio = null;
    this.turnonAudio = null;

    this.isMuted = false;
    this.lastHoverTarget = null;
    this.audioUnlocked = false;

    this.init();
  }

  init() {
    if (typeof window === "undefined") return;

    // Get saved sound preference
    const savedSoundPreference = localStorage.getItem("sound-enabled");

    if (savedSoundPreference === null) {
      // DEFAULT: SOUND ON
      this.isMuted = false;
    } else {
      // Restore user's preference
      this.isMuted = savedSoundPreference === "false";
    }

    // Create audio elements
    this.hoverAudio = new Audio(hoverSoundFile);
    this.hoverAudio.volume = 0.25;

    this.clickAudio = new Audio(clickSoundFile);
    this.clickAudio.volume = 0.45;

    this.turnonAudio = new Audio(turnonSoundFile);
    this.turnonAudio.volume = 0.4;

    // Preload
    this.hoverAudio.load();
    this.clickAudio.load();
    this.turnonAudio.load();

    // Unlock audio after first user interaction
    const unlockAudio = () => {
      if (this.audioUnlocked) return;

      const unlock = (audio) => {
        if (!audio) return;

        audio
          .play()
          .then(() => {
            audio.pause();
            audio.currentTime = 0;
          })
          .catch(() => { });
      };

      unlock(this.hoverAudio);
      unlock(this.clickAudio);
      unlock(this.turnonAudio);

      this.audioUnlocked = true;

      window.removeEventListener("pointerdown", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
    };

    window.addEventListener("pointerdown", unlockAudio);
    window.addEventListener("keydown", unlockAudio);
  }

  setMuted(muted) {
    this.isMuted = muted;

    localStorage.setItem("sound-enabled", String(!muted));
  }

  toggleMute() {
    const wasMuted = this.isMuted;

    this.setMuted(!this.isMuted);

    // If sound was OFF and is now ON,
    // play the turn-on sound.
    if (wasMuted && !this.isMuted) {
      this.playTurnOn();
    }

    return this.isMuted;
  }

  playTurnOn() {
    if (!this.turnonAudio) return;

    try {
      this.turnonAudio.currentTime = 0;

      const playPromise = this.turnonAudio.play();

      if (playPromise !== undefined) {
        playPromise.catch(() => { });
      }
    } catch {
      // Ignore playback errors
    }
  }

  playHover() {
    if (this.isMuted || !this.hoverAudio) return;

    try {
      this.hoverAudio.currentTime = 0;

      const playPromise = this.hoverAudio.play();

      if (playPromise !== undefined) {
        playPromise.catch(() => { });
      }
    } catch {
      // Ignore playback errors
    }
  }

  playClick() {
    if (this.isMuted || !this.clickAudio) return;

    try {
      this.clickAudio.currentTime = 0;

      const playPromise = this.clickAudio.play();

      if (playPromise !== undefined) {
        playPromise.catch(() => { });
      }
    } catch {
      // Ignore playback errors
    }
  }
}

export const soundManager = new SoundFX();

/**
 * Checks if an element or any of its ancestors
 * should trigger hover/click sounds.
 */
function isInteractiveElement(target) {
  if (!target || !(target instanceof Element)) return false;

  const selector =
    'button, a, input, textarea, select, [role="button"], [tabindex]:not([tabindex="-1"]), .interactive-sound, .group';

  return target.closest(selector);
}

/**
 * Custom React hook for global sound events.
 */
export function useSoundEffects() {
  const [isMuted, setIsMuted] = useState(
    typeof window !== "undefined"
      ? soundManager.isMuted
      : true
  );

  const handleMouseOver = (e) => {
    const interactiveTarget = isInteractiveElement(e.target);

    if (
      interactiveTarget &&
      soundManager.lastHoverTarget !== interactiveTarget
    ) {
      soundManager.lastHoverTarget = interactiveTarget;
      soundManager.playHover();
    }
  };

  const handleMouseOut = (e) => {
    const interactiveTarget = isInteractiveElement(e.target);

    if (
      interactiveTarget &&
      !interactiveTarget.contains(e.relatedTarget)
    ) {
      if (soundManager.lastHoverTarget === interactiveTarget) {
        soundManager.lastHoverTarget = null;
      }
    }
  };

  const handleClick = (e) => {
    if (e.target.closest(".sound-toggle")) return;

    const interactiveTarget = isInteractiveElement(e.target);

    if (interactiveTarget) {
      soundManager.playClick();
    }
  };

  const toggleMute = () => {
    const newMutedState = soundManager.toggleMute();

    setIsMuted(newMutedState);
  };

  return {
    handleMouseOver,
    handleMouseOut,
    handleClick,
    isMuted,
    toggleMute,
  };
}
