import { useState } from "react";
import { addProperty, getProperties } from "../services/propertyService";
import type { InputProps, PropertyData, PropertyInput } from "../interfaces";
import { useDispatch } from "react-redux";
import { setProperties } from "../redux/properties/propertiesSlice";
import { addPropertyInputs } from "../data/dashboard";
import InputField from "../components/ui/InputField";
import Button from "../components/ui/Button";
import TextareaField from "../components/ui/TextareaField";
import { useNavigate } from "react-router-dom";
import SelectField from "../components/ui/SelectField";
import ImageInputFeild from "../components/ui/ImageInputFeild";
const AddProperty = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newProperty, setNewProperty] = useState<PropertyInput>({
    title: "Test Property",
    subTitle: "Test Subtitle",
    description: "Test description",
    photos: [],
    price: 50000,
    bedrooms: 2,
    bathrooms: 1,
    location: "Test City",
    locationType: "Urban",
    propertyType: "Apartment",
    area: 120,
  });

  const [uploadedImages, setUploadedImages] = useState<File[]>([]);

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

  const handleImagesChange = (images: File[]) => {
    setUploadedImages(images);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(newProperty);

    const propertyToSubmit: PropertyInput = {
      ...newProperty,
      photos: uploadedImages,
    };

    const propertyAdd = async () => {
      try {
        await addProperty(propertyToSubmit);
        console.log("Property added successfully");

        const updatedProperties: PropertyData[] = await getProperties();
        dispatch(setProperties(updatedProperties));
      } catch (error) {
        console.error("Add property failed:", error);
      }
    };

    propertyAdd();

    // navigate("/dashboard");
  };

  return (
    <div className="mx-4  md:mx-20 2xl:mx-40.5 mt-5 lg:mt-10 2xl:mt-12.5 flex flex-col gap-5 lg:gap-10 2xl:gap-12.5">
      <h2 className="text-[28px] md:text-[32px] lg:text-[38px] 2xl:text-[48px] font-semibold">
        Add New Product
      </h2>
      <form
        onSubmit={handleSubmit}
        className="rounded-xl p-5 lg:p-12.5 2xl:p-25 border border-gray-15 flex flex-col gap-7.5 2xl:gap-12.5"
        action="">
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-5 lg:gap-7.5 2xl:gap-12.5">
          {addPropertyInputs.map((input: InputProps) => {
            switch (input.type) {
              case "textarea":
                return (
                  <TextareaField
                    key={input.name}
                    value={addPropertyInputs[input.name]}
                    onChange={handleChange}
                    {...input}
                  />
                );
              case "select":
                return (
                  <SelectField
                    key={input.name}
                    value={addPropertyInputs[input.name]}
                    onChange={handleChange}
                    {...input}
                  />
                );
              default:
                return (
                  <InputField
                    key={input.name}
                    value={addPropertyInputs[input.name]}
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
