import type { ButtonProps } from "../../interfaces";

const Button = ({ variant, onClick, children }: ButtonProps) => {
  const styles = {
    base: "px-5 py-3.5 2xl:px-6 2xl:py-4.5 rounded-lg 2xl:rounded-[10px] text-[14px] 2xl:text-lg cursor-pointer text-nowrap h-full w-full",
    primary: "bg-primary-60",
    secondary: "bg-gray-10 border border-gray-15",
    border: "border border-gray-15",
  };

  return (
    <button className={styles.base + " " + styles[variant]} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
