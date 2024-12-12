import React, { useEffect, useRef } from "react";

const GoogleTranslate = () => {
  const googleTranslateRef = useRef(null);

  useEffect(() => {
    const initializeGoogleTranslate = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en", // Default page language
            includedLanguages: "ar", // Only Arabic language
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE, // Simple layout
          },
          googleTranslateRef.current // Element to place the widget in
        );
      }
    };

    // Set an interval to ensure the Google Translate API is available
    const intervalId = setInterval(() => {
      if (window.google && window.google.translate) {
        clearInterval(intervalId);
        initializeGoogleTranslate();
      }
    }, 100);

    return () => clearInterval(intervalId); // Clean up the interval
  }, []);

  return <div ref={googleTranslateRef}></div>;
};

export default GoogleTranslate;
