import { valuesData } from "../../data/aboutData";

const Values = () => {
  return <div>
    <div>
      {
        valuesData.map((element,index))
      }
    </div>
  </div>;
};

export default Values;
