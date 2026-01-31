import { useEffect, useRef, useState } from "react";
import { addProperty, getProperties } from "../services/propertyService";
import type { PropertyData, PropertyInput } from "../interfaces";
import { useDispatch } from "react-redux";
import { setProperties } from "../redux/properties/propertiesSlice";

const AddProperty = () => {
  const dispatch = useDispatch();
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
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;

    const testAdd = async () => {
      try {
        await addProperty(newProperty);
        console.log("Property added successfully");

        const updatedProperties: PropertyData[] = await getProperties();
        dispatch(setProperties(updatedProperties));
      } catch (error) {
        console.error("Add property failed:", error);
      }
    };

    testAdd();
  }, [newProperty, dispatch]);

  return <div>AddProperty</div>;
};

export default AddProperty;
