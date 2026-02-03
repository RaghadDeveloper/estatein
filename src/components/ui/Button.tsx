import type { ButtonProps } from "../../interfaces";

const Button = ({
  variant,
  onClick,
  children,
  btnType,
  disabled,
}: ButtonProps) => {
  const styles = {
    base: `px-5 py-3.5 2xl:px-6 2xl:py-4.5 rounded-lg 2xl:rounded-[10px] text-[14px] 2xl:text-lg text-nowrap h-full w-full transtion-all duration-200 disabled:bg-gray-60/50 disabled:text-gray-40d disabled:cursor-not-allowed cursor-pointer hover:shadow-lg hover:scale-101`,
    primary: "bg-primary-60 text-white hover:bg-primary-60/70",
    secondary: "bg-bg-secondary border border-gray-15 hover:bg-bg-secondary/70",
    border: "bg-bg-main border border-gray-15 hover:opacity-90",
  };

  return (
    <button
      type={btnType || "button"}
      className={`${styles.base} ${styles[variant]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
