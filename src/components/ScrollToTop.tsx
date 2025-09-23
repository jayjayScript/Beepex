"use client";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

// Easing function like react-scroll's easeInOutQuart
const easeInOutQuart = (t: number) =>
  t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;

const smoothScrollToTop = (duration = 600) => {
  const startY = window.scrollY;
  const distanceY = -startY;
  let startTime: number | null = null;

  const step = (currentTime: number) => {
    if (!startTime) startTime = currentTime;
    const time = Math.min(1, (currentTime - startTime) / duration);
    const easedTime = easeInOutQuart(time);

    window.scrollTo(0, startY + distanceY * easedTime);

    if (time < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling down
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={() => smoothScrollToTop(600)}
      className={`fixed z-40 bottom-6 right-6 p-3 rounded-full shadow-lg bg-[#272727] text-white transition-all duration-300 hover:bg-gray-800 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <Icon icon="mdi:arrow-up" width="24" height="24" />
    </button>
  );
};

export default ScrollToTop;
