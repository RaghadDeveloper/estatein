import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../components/ui/Loader";
import { loginUser } from "../services/authService";
import { FirebaseError } from "firebase/app";
import { IoHomeOutline } from "react-icons/io5";
import ThemeToggle from "../components/ui/ThemeToggle";
import InputField from "../components/ui/InputField";
import { loginInputs } from "../data/dashboard";
import PasswordInputField from "../components/ui/PasswordInputField";
import Button from "../components/ui/Button";
import type { RootState } from "../redux/store";

const Login = () => {
  const { user, loading } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await loginUser(data.email, data.password);
      navigate("/dashboard");
      setIsLoading(false);
    } catch (error: unknown) {
      setIsLoading(false);
      if (error instanceof FirebaseError) {
        setErrorMessage(error.code + error.message);
      } else {
        setErrorMessage("Unexpected error" + error);
      }
    }
  };

  useEffect(() => {
    if (user) navigate("/dashboard");
  }, [user, navigate]);

  if (loading) return <Loader />;

  return (
    <div className="bg-bg-main text-text-main min-w-screen min-h-screen flex justify-center items-center">
      <span className=" absolute top-10 right-10 bg-bg-secondary rounded-full shadow-2xl flex items-center">
        <IoHomeOutline
          className="text-3xl text-text-mian hover:text-primary-65 cursor-pointer my-2 mx-4"
          onClick={() => navigate("/")}
        />
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
          <Button
            variant="primary"
            btnType="submit"
            children="log in"
            disabled={isLoading}
          />
        </form>
        {errorMessage && <p className="text-red-500 mt-5">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Login;
