import { useState } from "react";
import type { PropertyInput } from "../interfaces";
import { updateProperty } from "../services/propertyService";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import InputField from "../components/ui/InputField";
import { selectProperty } from "../redux/properties/propertiesSelectors";
import Button from "../components/ui/Button";
import PageTilte from "../components/ui/PageTilte";

const EditProperty = () => {
  const { id } = useParams();
  const property = useSelector(selectProperty(id!));

  const [updatedData, setUpdatedData] = useState<Partial<PropertyInput>>(() =>
    property
      ? {
          title: property.title,
          description: property.description,
          price: property.price,
          bedrooms: property.bedrooms,
          bathrooms: property.bathrooms,
        }
      : {},
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    setUpdatedData((prev) => ({
      ...prev!,
      [name]: ["price", "bedrooms", "bathrooms"].includes(name)
        ? Number(value)
        : value,
    }));
  };

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!id || !updatedData) return;

    try {
      await updateProperty(id, updatedData);
      console.log("Property updated successfully");
    } catch (error) {
      console.error("Edit failed:", error);
    }
  };

  if (!updatedData) return <div className="m-9 text-[25px]">Loading ...</div>;

  return (
    <div className="flex flex-col gap-7 px-5 max-w-3xl mx-auto">
      <PageTilte title="Edit Property" />

      <form
        className="flex flex-col gap-7.5 2xl:gap-12.5"
        onSubmit={handleSave}
      >
        <div className="flex flex-col gap-2">
          <InputField
            label="Title"
            placeholder="Enter title"
            type="text"
            name="title"
            value={updatedData.title ?? ""}
            onChange={handleChange}
          />

          <InputField
            label="Description"
            placeholder="Enter description"
            type="text"
            name="description"
            value={updatedData.description ?? ""}
            onChange={handleChange}
          />

          <InputField
            label="Price"
            placeholder="Enter price"
            type="text"
            name="price"
            value={String(updatedData.price ?? "")}
            onChange={handleChange}
          />

          <InputField
            label="Bedrooms"
            placeholder="Enter bedrooms"
            type="text"
            name="bedrooms"
            value={String(updatedData.bedrooms ?? "")}
            onChange={handleChange}
          />

          <InputField
            label="Bathrooms"
            placeholder="Enter bathrooms"
            type="text"
            name="bathrooms"
            value={String(updatedData.bathrooms ?? "")}
            onChange={handleChange}
          />
        </div>
        <Button variant="primary" btnType="submit">
          Save Changes
        </Button>
      </form>
    </div>
  );
};

export default EditProperty;
