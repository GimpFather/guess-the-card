import FAIL_MESSAGES from "./coreFiles/FAIL_MESSAGES";
import SUCCESS_MESSAGES from "./coreFiles/SUCCESS_MESSAGES";
import confetti from "canvas-confetti";

export const getRandomSuccessMessage = () => {
  return (
    SUCCESS_MESSAGES[Math.floor(Math.random() * SUCCESS_MESSAGES.length)] ??
    SUCCESS_MESSAGES[0]
  );
};

export const getRandomFailMessage = () => {
  return (
    FAIL_MESSAGES[Math.floor(Math.random() * FAIL_MESSAGES.length)] ??
    FAIL_MESSAGES[0]
  );
};

export const launchFireworks = () => {
  confetti.reset();
  const duration = 3000;
  const end = Date.now() + duration;

  const colors = ["#bb0000", "#ffffff"];

  (function frame() {
    confetti({
      particleCount: 4,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors,
    });
    confetti({
      particleCount: 4,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};

export function launchEmojiConfetti(emoji: string) {
  const scalar = 3;
  const emojiShape = confetti.shapeFromText({ text: emoji, scalar });

  const baseConfettiOptions = {
    spread: 360,
    ticks: 100,
    gravity: 0.3,
    decay: 0.96,
    startVelocity: 20,
    scalar,
    shapes: [emojiShape],
  };

  const shoot = () => {
    confetti({
      ...baseConfettiOptions,
      particleCount: 30,
    });

    confetti({
      ...baseConfettiOptions,
      particleCount: 5,
      flat: true,
    });

    confetti({
      ...baseConfettiOptions,
      particleCount: 15,
      scalar: scalar / 2,
      shapes: ["circle"],
    });
  };

  shoot();
  setTimeout(shoot, 100);
  setTimeout(shoot, 200);
  setTimeout(shoot, 300);
}
