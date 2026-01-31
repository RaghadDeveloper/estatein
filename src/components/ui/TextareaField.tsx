import { useTheme } from "../../context/ThemeContext";
import {
  inputDevStyleBase,
  inputLabelStyleBase,
  inputStyleBase,
} from "../../data/propertiesData";
import type { InputProps } from "../../interfaces";

const TextareaField = ({
  label,
  placeholder,
  name,
  colSpan,
  value,
  onChange,
}: InputProps) => {
  const colSpanClasses = {
    3: "lg:col-span-3",
    4: "lg:col-span-4",
    // more col span can be added
  };

  const lgColSpan =
    colSpanClasses[colSpan as keyof typeof colSpanClasses] || "lg:col-span-2";

    const {theme}=useTheme()
  return (
    <div
      className={`${inputDevStyleBase} md:col-span-2 ${lgColSpan} row-span-2 lg:gap-4`}
    >
      <label className={`${inputLabelStyleBase}`} htmlFor={name}>
        {label}
      </label>
      <textarea
        required
        className={`${inputStyleBase} ${theme=="light"?"bg-light-90 text-white":"bg-gray-10"} resize-none placeholder:text-gray-40 field-sizing-fixed h-22.5 lg:h-30.5 2xl:h-42.5`}
        placeholder={placeholder}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextareaField;
