import { valuesData } from "../../data/aboutData";
import ValueCard from "../ui/ValueCard";

const Values = () => {
  const groupedValues = [];
  for (let i = 0; i < valuesData.length; i += 2) {
    groupedValues.push(valuesData.slice(i, i + 2));
  }
  return (
    <div
      className="w-fit
      p-6 lg:p-12.5 2xl:p-15 border border-gray-15
      shadow-[0_0_0_6px_#191919] rounded-xl">
      {groupedValues.map((group, groupIndex) => (
        <div
          key={groupIndex}
          className={`flex gap-7 border-b border-gray-15
            ${groupIndex % 2 === 0 ? "even" : "odd"}
            ${even?"pb-7.5":"pt-7"}`}
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
