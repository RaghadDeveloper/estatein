import { useParams } from "react-router-dom";
import { selectProperty } from "../redux/properties/propertiesSelectors";
import { useSelector } from "react-redux";

const PropertyDetailsDash = () => {
  const { id } = useParams();
  const property = useSelector(selectProperty(id!));

  console.log("Property:", property);

  return <div>PropertyDetailsDash</div>;
};

export default PropertyDetailsDash;
