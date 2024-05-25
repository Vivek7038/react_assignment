import { useEffect, useCallback } from "react";

const ESCAPE_KEY = 27;

const useEscape = (callbacks) => {
  const handleEscape = (event) => {
    if (event.keyCode === ESCAPE_KEY) {
      callbacks.forEach((callbackFunction) => callbackFunction());
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [handleEscape]);
};

export default useEscape;

// useEscape([callbacks])
// Parameters
// callbacks: An array of callback functions to be invoked when the Escape key is pressed.
