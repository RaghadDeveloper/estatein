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
import PageTilte from "../components/ui/PageTilte";
import { FirebaseError } from "firebase/app";

const AddProperty = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
      setIsLoading(true);
      await addProperty(newProperty);
      console.log("Property added successfully");
      alert("Property added successfully");
      navigate("/dashboard");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Add property failed:", error);
      if (error instanceof FirebaseError) {
        setErrorMessage(error.code + error.message);
      } else {
        setErrorMessage("Unexpected error" + error);
      }
    }
  };

  return (
    <div className="flex flex-col gap-5 lg:gap-10 2xl:gap-12.5">
      <PageTilte title="Add New Property" />
      <form
        onSubmit={handleSubmit}
        className="rounded-xl flex flex-col gap-7.5 2xl:gap-12.5"
        action="">
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
          <ImageInputFeild
            multi={true}
            onImagesChange={handleImagesChange}
            title="Property Images"
          />
        </div>
        <Button btnType="submit" variant="primary" disabled={isLoading}>
          Add Property
        </Button>
      </form>
      {errorMessage && <p className="text-red-500 mt-5">{errorMessage}</p>}
    </div>
  );
};

export default AddProperty;
