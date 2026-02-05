import { useState } from "react";
import type { PropertyInput } from "../interfaces";
import { updateProperty } from "../services/propertyService";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import InputField from "../components/ui/InputField";
import { selectProperty } from "../redux/properties/propertiesSelectors";
import Button from "../components/ui/Button";
import PageTilte from "../components/ui/PageTilte";
import { editPropertyInputs } from "../data/dashboard";

const EditProperty = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
      alert("Property updated successfully");
      navigate(`/dashboard/properties/${id}`);
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
          <div className="flex flex-col gap-2">
            {editPropertyInputs.map((field) => (
              <InputField
                key={field.name}
                label={field.label}
                placeholder={field.placeholder}
                type={field.type}
                name={field.name}
                value={String(
                  updatedData[field.name as keyof PropertyInput] ?? "",
                )}
                onChange={handleChange}
              />
            ))}
          </div>
        </div>
        <Button variant="primary" btnType="submit">
          Save Changes
        </Button>
      </form>
    </div>
  );
};

export default EditProperty;
