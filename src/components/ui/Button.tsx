import type { ButtonProps } from "../../interfaces";

const Button = ({
  variant,
  onClick,
  children,
  btnType,
  disabled,
}: ButtonProps) => {
  const styles = {
    base: `px-5 py-3.5 2xl:px-6 2xl:py-4.5 rounded-lg 2xl:rounded-[10px] text-[14px] 2xl:text-lg text-nowrap h-full w-full transtion-all duration-200 disabled:bg-gray-15 disabled:text-gray-40 disabled:cursor-not-allowed cursor-pointer`,
    primary: "bg-primary-60",
    secondary: "bg-gray-10 border border-gray-15",
    border: "bg-gray-08 border border-gray-15",
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
