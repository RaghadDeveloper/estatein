import { valuesData } from "../../data/aboutData";
import ValueCard from "../ui/ValueCard";

const Values = () => {
  return <div>
    <div className="grid grid-cols-1 lg:grid-cols-2
    p-6 lg:p-12.5 2xl:p-15 border border-gray-15
      shadow-[0_0_0_6px_#191919]" >
      {
        valuesData.map((element,index)=>{
          return <ValueCard key={index}
          image={element.image} title={element.title}
          description={element.description} />
        })
      }
    </div>
  </div>;
};

export default Values;
