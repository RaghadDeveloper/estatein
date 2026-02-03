import { useState } from "react";
import InputField from "../components/ui/InputField";
import PasswordInputField from "../components/ui/PasswordInputField";
import Button from "../components/ui/Button";
import ThemeToggle from "../components/ui/ThemeToggle";
import { loginInputs } from "../data/dashboard";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login data:", data);
  };

  return (
    <div className="bg-bg-main text-text-main min-w-screen min-h-screen flex justify-center items-center">
      <span className=" absolute top-10 right-10">
        <ThemeToggle />
      </span>
      <div className="max-w-2xl mx-auto block p-6 lg:p-10 rounded-2xl border border-primary-60 shadow-md shadow-primary-60 w-full">
        <h2 className="text-text-main text-center mb-2.5 lg:mb-4 font-bold text-2xl lg:text-4xl">
          Log in
        </h2>
        <form className="flex flex-col gap-7.5" onSubmit={handleSubmit}>
          <div className="mb-2.5 lg:mb-5 relative flex flex-col gap-4">
            <InputField
              {...loginInputs[0]}
              value={data.email}
              onChange={handleChange}
            />
            <PasswordInputField
              {...loginInputs[1]}
              value={data.password}
              onChange={handleChange}
            />
          </div>
          <Button variant="primary" btnType="submit" children="log in" />
        </form>
      </div>
    </div>
  );
};

export default Login;
