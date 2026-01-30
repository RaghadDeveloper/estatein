import { useState } from "react";
import {
  connectFormHeaderData,
  connectFormInputsData,
} from "../../data/contactData";
import SectionContainer from "../layouts/SectionContainer";
import FormFooter from "../ui/FormFooter";
import SectionHeader from "../ui/SectionHeader";
import SelectField from "../ui/SelectField";
import TextareaField from "../ui/TextareaField";
import InputField from "../ui/InputField";
import type { ConnectFormData } from "../../interfaces";
import emailjs from "@emailjs/browser";

const ConnectForm = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [connectFormData, setConnectFormData] = useState<ConnectFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiry: "",
    hear: "",
    message: "",
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setConnectFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isChecked) return;
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          ...connectFormData,
          time: new Date().toLocaleString(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        alert("Message sent successfully!");
        setConnectFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          inquiry: "Select Inquiry Type",
          hear: "Select",
          message: "",
        });
        setIsChecked(false);
        setLoading(false);
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setLoading(false);
      });
  };

  return (
    <SectionContainer>
      <SectionHeader {...connectFormHeaderData} />
      <form
        onSubmit={handleSubmit}
        className="rounded-xl p-5 lg:p-20 2xl:p-25 border border-gray-15 flex flex-col gap-7.5 2xl:gap-12.5"
      >
        {/* input fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7.5 2xl:gap-12.5">
          {connectFormInputsData.map((input) => {
            switch (input.type) {
              case "textarea":
                return (
                  <TextareaField
                    key={input.name}
                    value={connectFormData[input.name]}
                    onChange={handleChange}
                    {...input}
                  />
                );
              case "select":
                return (
                  <SelectField
                    key={input.name}
                    value={connectFormData[input.name]}
                    onChange={handleChange}
                    {...input}
                  />
                );

              default:
                return (
                  <InputField
                    key={input.name}
                    value={connectFormData[input.name]}
                    onChange={handleChange}
                    {...input}
                  />
                );
            }
          })}
        </div>
        {/* submit */}
        <FormFooter
          loading={loading}
          isChecked={isChecked}
          handleCheckboxChange={handleCheckboxChange}
        />
      </form>
    </SectionContainer>
  );
};

export default ConnectForm;
