import { useState } from "react";
import type { FormProps } from "../../interfaces";

const FormAuth = ({inputs}: FormProps) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="max-w-3xl mx-auto block p-3 lg:p-5 rounded-2xl border border-primary-60
        shadow-md shadow-primary-60">
            <h2 className="text-white text-center mb-2.5 lg:mb-4
            font-bold text-2xl lg:text-4xl">Log in</h2>
            <form>
            {inputs?.map((input, index) => {
                const isPassword = input.type === "password";
                return (
                    <div key={index} className="mb-2.5 lg:mb-5 relative">
                    <label className="text-white text-[16px]  lg:text-[18px] block mb-2">
                        {input.label}
                    </label>
                    <input
                        className="mb-2.5 border border-primary-60
                        outline-0 py-2 lg:py-3.5 px-4 lg:px-6 rounded-lg w-full pr-12"
                        type={isPassword && showPassword ? "text" : input.type}
                        placeholder={input.placeholder}
                        required
                    />
                    {isPassword && (
                        <button
                        type="button"
                        onClick={() => setShowPassword(prev => !prev)}
                        className="absolute right-4 top-11.5 lg:top-13 cursor-pointer"
                        >
                        <img
                            src={
                            showPassword
                                ? "/assets/icons/eye.svg"
                                : "/assets/icons/eye-x.svg"
                            }
                            className="w-4 lg:w-6 h-4 lg:h-6"
                            alt="eye"
                        />
                        </button>
                    )}
                    </div>
                );
                })}
            <input
                type="submit"
                value="log in"
                className="rounded-xl font-semibold text-[16px] lg:text-[20px] text-primary-60
                py-2.5 px-4
                bg-primary-50 mx-auto w-fit block cursor-pointer"/>
            </form>
        </div>
    );
    };

export default FormAuth;
