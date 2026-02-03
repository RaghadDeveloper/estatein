import { useSelector } from "react-redux";
import { selectFilteredProperties } from "../redux/properties/propertiesSelectors";

const PropertiesList = () => {
  const properties = useSelector(selectFilteredProperties);

  console.log("Properties:", properties);
  return <div>PropertiesList</div>;
};

export default PropertiesList;
