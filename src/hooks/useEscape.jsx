import { useEffect, useCallback } from "react";

const ESCAPE_KEY = 27;

const useEscape = (callbacks, dependencies = []) => {
  const handleEscape = useCallback(
    (event) => {
      if (event.keyCode === ESCAPE_KEY) {
        callbacks.forEach((callback) => callback(event));
      }
    },
    [callbacks, ...dependencies],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [handleEscape, ...dependencies]);
};

export default useEscape;

// useEscape([callback],[dependencies])
// Parameters
// callbacks: An array of callback functions to be invoked when the Escape key is pressed.
// dependencies: (Optional) An array of dependencies that, when changed, will trigger the hook to re-register the event listener.
