import {
  inputDevStyleBase,
  inputLabelStyleBase,
  inputStyleBase,
} from "../../data/propertiesData";
import type { InputProps } from "../../interfaces";

// `col-span-1 md:col-span${input.colSpan === 4 || (input.colSpan === 2 && 2)} lg:col-span-${input.colSpan ? input.colSpan : 1} ${input.type === "textarea" && "row-span-2"}`;

const TextareaField = ({ label, placeholder, name, colSpan }: InputProps) => {
  return (
    <div
      className={`${inputDevStyleBase} md:col-span-2 lg:col-span-${colSpan ? colSpan : 2} row-span-2`}>
      <label className={`${inputLabelStyleBase}`} htmlFor={name}>
        {label}
      </label>
      <textarea
        required
        className={`${inputStyleBase} resize-none placeholder:text-gray-40 field-sizing-fixed h-22.5 lg:h-30.5 2xl:h-42.5`}
        placeholder={placeholder}
        name={name}
        id={name}
      />
    </div>
  );
};

export default TextareaField;
