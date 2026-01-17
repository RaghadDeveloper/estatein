import { valuesData } from "../../data/aboutData";
import ValueCard from "../ui/ValueCard";

const Values = () => {
  const groupedValues = [];
  for (let i = 0; i < valuesData.length; i += 2) {
    groupedValues.push(valuesData.slice(i, i + 2));
  }
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2
      p-6 lg:p-12.5 2xl:p-15 border border-gray-15
      shadow-[0_0_0_6px_#191919]"
    >
      {groupedValues.map((group, groupIndex) => (
        <div
          key={groupIndex}
          className="flex flex-col gap-6"
        >
          {group.map((element, index) => (
            <ValueCard
              key={index}
              image={element.image}
              title={element.title}
              description={element.description}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Values;
