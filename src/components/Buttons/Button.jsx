import React from "react";

function Button({ onClick, style, btnText }) {
  return (
    <button
      onClick={onClick}
      className="outline-none px-4 py-1 rounded-full text-white"
      style={style}
    >
      {btnText}
    </button>
  );
}

export default Button;
