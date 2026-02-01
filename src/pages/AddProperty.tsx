import { useEffect, useRef, useState } from "react";
import { addProperty } from "../services/propertyService";
import type { PropertyInput } from "../interfaces";
import { useDispatch } from "react-redux";

const AddProperty = () => {
  const dispatch = useDispatch();
  const [newProperty, setNewProperty] = useState<PropertyInput>({
    title: "Test Property1111",
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
      } catch (error) {
        console.error("Add property failed:", error);
      }
    };

    testAdd();
  }, [newProperty, dispatch]);

  return <div>AddProperty</div>;
};

export default AddProperty;
