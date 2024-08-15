import styles from "./button.module.css";

const Button = ({
  onClick,
  type,
  text,
  padding,
  backgroundColor,
  fontSize,
  fontWeight,
  color,
  maxWidth,
  textAlign,
  border,
}) => {
  return (
    <button
      className={styles.button}
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
