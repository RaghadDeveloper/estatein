import { valuesData } from "../../data/aboutData";
import ValueCard from "../ui/ValueCard";

const Values = () => {
  return <div>
    <div>
      {
        valuesData.map((element,index)=>{
          return <ValueCard key={index}
          image={element.image} title={} />
        })
      }
    </div>
  </div>;
};

export default Values;
