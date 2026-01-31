import { useEffect, useRef, useState } from "react";
import type { PropertyData, PropertyInput } from "../interfaces";
import { getProperties, updateProperty } from "../services/propertyService";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProperties } from "../redux/properties/propertiesSlice";

const EditProperty = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [updatedData, setUpdatedData] = useState<PropertyInput>({
    title: "Updated title 222",
    description: "Updated description",
    price: 99999,
    bedrooms: 3,
    bathrooms: 2,
  });

  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;

    const editProperty = async () => {
      try {
        if (!id) throw new Error("Property ID is missing");
        await updateProperty(id, updatedData);
        console.log("Property updated successfully");
        const updatedProperties: PropertyData[] = await getProperties();
        dispatch(setProperties(updatedProperties));
      } catch (error) {
        console.error("Edit failed:", error);
      }
    };

    editProperty();
  }, [updatedData, id, dispatch]);
  return <div>EditProperty</div>;
};

export default EditProperty;
