import { valuesData } from "../../data/aboutData";
import ValueCard from "../ui/ValueCard";

const Values = () => {
  return <div>
    <div>
      {
        valuesData.map((element,index)=>{
          return <ValueCard  />
        })
      }
    </div>
  </div>;
};

export default Values;
