import React from "react";

const Button = ({
  onClick,
  type,
  text,
  padding = "16px 48px",
  backgroundColor = "#DB4444",
  fontSize = "16px",
  fontWeight = "500",
  color = "#FAFAFA",
  maxWidth = "234px",
  textAlign = "center",
  border = "none",
}) => {
  return (
    <button
    onClick={onClick}
      type={type}
      style={{
        border: border,
        textAlign: textAlign,
        maxWidth: maxWidth,
        padding: padding,
        backgroundColor: backgroundColor,
        fontSize: fontSize,
        fontWeight: fontWeight,
        color: color,
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
};

export default Button;
