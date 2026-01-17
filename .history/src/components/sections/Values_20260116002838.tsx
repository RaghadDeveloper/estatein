import { valuesData } from "../../data/aboutData";

const Values = () => {
  return <div>
    <div>
      {
        valuesData.map((value))
      }
    </div>
  </div>;
};

export default Values;
