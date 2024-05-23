import React, { useState } from "react";
const useToggle = (initialState = false) => {
  const [isToggled, setIsToggled] = useState(initialState);
  const toggle = () => setIsToggled((prev) => !prev);
  return [isToggled, toggle];
};

export default useToggle;

// Parameters
// initialState: (Optional) The initial value of the toggle state. Defaults to false.
// Return Value
// The useToggle hook returns an array with the following elements:

// boolean: The current state of the toggle.
// function: A function to toggle the state of the toggle.
