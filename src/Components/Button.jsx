import React from "react";

const Button = ({ onClick, disabled, children, className }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={className}>
      {children}
    </button>
  );
};

export default Button;
