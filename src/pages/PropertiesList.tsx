import { useEffect, useState } from "react";
import type { PropertyData } from "../interfaces";
import { getProperties } from "../services/propertyService";
import { useDispatch } from "react-redux";
import { setProperties } from "../redux/properties/propertiesSlice";

const PropertiesList = () => {
  const dispatch = useDispatch();
  const [propertiesList, setPropertiesList] = useState<PropertyData[]>([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const data: PropertyData[] = await getProperties();
        setPropertiesList(data);
        dispatch(setProperties(data));
      } catch (err) {
        console.error(err);
      }
    };

    fetchProperties();
  }, [dispatch]);

  console.log("Properties:", propertiesList);
  return <div>PropertiesList</div>;
};

export default PropertiesList;
