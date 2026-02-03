import { useState } from "react";
import { addProperty } from "../services/propertyService";
import type { InputProps, PropertyInput } from "../interfaces";
import { addPropertyInputs } from "../data/dashboard";
import InputField from "../components/ui/InputField";
import Button from "../components/ui/Button";
import TextareaField from "../components/ui/TextareaField";
import SelectField from "../components/ui/SelectField";
import ImageInputFeild from "../components/ui/ImageInputFeild";
import { useNavigate } from "react-router-dom";

const AddProperty = () => {
  const navigate = useNavigate();
  const [newProperty, setNewProperty] = useState<PropertyInput>({
    title: "",
    subTitle: "",
    description: "",
    photos: [],
    price: -1,
    bedrooms: -1,
    bathrooms: -1,
    location: "",
    locationType: "",
    propertyType: "",
    area: -1,
  });

  const isKeyOfPropertyInput = (key: string): key is keyof PropertyInput => {
    return [
      "title",
      "subTitle",
      "description",
      "photos",
      "price",
      "bedrooms",
      "bathrooms",
      "location",
      "locationType",
      "propertyType",
      "area",
    ].includes(key);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setNewProperty((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleImagesChange = (images: string[]) => {
    setNewProperty((prev) => ({ ...prev, photos: images }));
    console.log("upload images", newProperty);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await addProperty(newProperty);
      console.log("Property added successfully");
      navigate("/dashboard");
    } catch (error) {
      console.error("Add property failed:", error);
    }
  };

  return (
    <div className="mx-4  md:mx-20 2xl:mx-40.5 mt-5 lg:mt-10 2xl:mt-12.5 flex flex-col gap-5 lg:gap-10 2xl:gap-12.5">
      <h2 className="text-[28px] md:text-[32px] lg:text-[38px] 2xl:text-[48px] font-semibold">
        Add New Product
      </h2>
      <form
        onSubmit={handleSubmit}
        className="rounded-xl p-5 lg:p-12.5 2xl:p-25 border border-gray-15 flex flex-col gap-7.5 2xl:gap-12.5"
        action=""
      >
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-5 lg:gap-7.5 2xl:gap-12.5">
          {addPropertyInputs.map((input: InputProps) => {
            let value = "";

            if (isKeyOfPropertyInput(input.name)) {
              value = newProperty[input.name]?.toString() || "";
            }

            switch (input.type) {
              case "textarea":
                return (
                  <TextareaField
                    key={input.name}
                    value={value}
                    onChange={handleChange}
                    {...input}
                  />
                );
              case "select":
                return (
                  <SelectField
                    key={input.name}
                    value={value}
                    onChange={handleChange}
                    {...input}
                  />
                );
              default:
                return (
                  <InputField
                    key={input.name}
                    value={value}
                    onChange={handleChange}
                    {...input}
                  />
                );
            }
          })}
          {/* images input */}
          <ImageInputFeild onImagesChange={handleImagesChange} />
        </div>
        <Button btnType="submit" variant="primary">
          Add Property
        </Button>
      </form>
    </div>
  );
};

export default AddProperty;
