import {
  inputDevStyleBase,
  inputLabelStyleBase,
  inputStyleBase,
} from "../../data/propertiesData";
import type { InputProps } from "../../interfaces";

const InputField = ({
  label,
  placeholder,
  type,
  name,
  value,
  colSpan,
  onChange,
}: InputProps) => {
  const colSpanClasses = {
    2: "lg:col-span-2",
    3: "lg:col-span-3",
    4: "lg:col-span-4",
    // more col span can be added
  };

  const lgColSpan =
    colSpanClasses[colSpan as keyof typeof colSpanClasses] || "lg:col-span-2";

  const numberInputSyle =
    "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none";

  return (
    <div className={`${inputDevStyleBase} col-span-1 ${colSpan && lgColSpan}`}>
      <label className={`${inputLabelStyleBase}`} htmlFor={name}>
        {label}
      </label>
      <input
        className={`${inputStyleBase} ${type === "number" && numberInputSyle} placeholder:text-gray-40`}
        type={type}
        placeholder={placeholder}
        name={name}
        id={name}
        value={value !== "-1" ? value : ""}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default InputField;
