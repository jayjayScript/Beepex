"use client"
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { animateScroll as scroll } from "react-scroll";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Smooth scroll to top using react-scroll
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 600,   // control transition speed (ms)
      smooth: "easeInOutQuart",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed z-40 bottom-6 right-6 p-3 rounded-full shadow-lg bg-[#272727] text-white transition-all duration-300 hover:bg-gray-800 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <Icon icon="mdi:arrow-up" width="24" height="24" />
    </button>
  );
};

export default ScrollToTop;
