import { useState } from "react";
import {
  inputDevStyleBase,
  inputLabelStyleBase,
  inputStyleBase,
} from "../../data/propertiesData";
import type { InputProps } from "../../interfaces";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const PasswordInputField = ({
  label,
  placeholder,
  name,
  value,
  onChange,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`${inputDevStyleBase} col-span-1`}>
      <label className={inputLabelStyleBase} htmlFor={name}>
        {label}
      </label>

      <div className="relative">
        <input
          className={`${inputStyleBase} pr-12 placeholder:text-gray-40`}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          required
        />

        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-3xl text-primary-70"
        >
          {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
        </button>
      </div>
    </div>
  );
};

export default PasswordInputField;
