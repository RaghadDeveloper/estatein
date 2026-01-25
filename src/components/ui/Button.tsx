import type { ButtonProps } from "../../interfaces";

const Button = ({ variant, onClick, children, btnType, checked}: ButtonProps) => {
  const styles = {
    base: `px-5 py-3.5 2xl:px-6 2xl:py-4.5 rounded-lg 2xl:rounded-[10px] text-[14px] 2xl:text-lg  text-nowrap h-full w-full ${checked == undefined && "cursor-pointer"} transtion-all duration-200`,
    primary: "bg-primary-60",
    secondary: "bg-gray-10 border border-gray-15",
    gray08:
      "bg-[var(--color-gray-08)] border border-gray-15 text-white hover:bg-white hover:text-black",
    border: "border border-gray-15",
  };

  return (
    <button
      disabled={checked !== undefined ? !checked : false}
      type={btnType ? btnType : "button"}
      className={`${styles.base} disabled:bg-gray-15 disabled:text-gray-40 ${styles[variant]} ${checked ? "cursor-pointer" : "cursor-not-allowed"}`}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
