import styles from "./button.module.css"

interface ButtonProps {
  onClick?: () => void,
  text: string,
  type?: "button" | "submit" | "reset" | undefined
  padding?: string
  backgroundColor?: string
  fontSize?: string
  fontWeight?: "normal" | "bold" | "bolder" | "lighter" | number;
  color?: string
  maxWidth?: string
  textAlign?: "left" | "center" | "right";
  border?: string
}

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
}: ButtonProps) => {
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
