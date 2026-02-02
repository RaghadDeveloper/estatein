import { useEffect, useState } from "react";
import type { PropertyInput } from "../interfaces";
import { updateProperty } from "../services/propertyService";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import InputField from "../components/ui/InputField";
import { selectProperty } from "../redux/properties/propertiesSelectors";
import Button from "../components/ui/Button";

const EditProperty = () => {
  const { id } = useParams();
  const property = useSelector(selectProperty(id!));

  const [updatedData, setUpdatedData] =
    useState<Partial<PropertyInput> | null>(null);

    useEffect(() => {
    if (property) {
      setUpdatedData({
        title: property.title,
        description: property.description,
        price: property.price,
        bedrooms: property.bedrooms,
        bathrooms: property.bathrooms,
      });
    }
  }, [property]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setUpdatedData((prev) => ({
      ...prev!,
      [name]: ["price", "bedrooms", "bathrooms"].includes(name)
        ? Number(value)
        : value,
    }));
  };

  const handleSave = async () => {
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
    <div className="flex flex-col gap-7 px-5">
      <h2 className="text-[30px] text-center">Edit Property</h2>

      <form className="flex flex-col gap-2">
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
      </form>

      <Button variant="primary" onClick={handleSave} btnType="submit">Save Changes</Button>
    </div>
  );
};

export default EditProperty;