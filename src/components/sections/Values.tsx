import { valuesData, valuesHeaderData } from "../../data/aboutData";
import SectionContainer from "../layouts/SectionContainer";
import SectionHeader from "../ui/SectionHeader";
import ValueCard from "../ui/ValueCard";

const Values = () => {
  const groupedValues = [];
  for (let i = 0; i < valuesData.length; i += 2) {
    groupedValues.push(valuesData.slice(i, i + 2));
  }
  return (
    <SectionContainer>
      <div className="flex items-center gap-20">
        <SectionHeader {...valuesHeaderData} />
        <div
          className="w-fit
      p-6 lg:p-12.5 2xl:p-15 border border-gray-15
      shadow-[0_0_0_6px_#191919] rounded-xl"
        >
          {groupedValues.map((group, groupIndex) => {
            const isEven = groupIndex % 2 === 0;
            return (
              <div
                key={groupIndex}
                className={`flex flex-col lg:flex-row
              ${
                isEven
                  ? "lg:even lg:pb-7.5 lg:border-b lg:border-gray-15"
                  : "lg:odd lg:pt-7.5"
              }`}
              >
                {group.map((element, index) => {
                  const globalIndex = groupIndex * 2 + index;
                  const isLast = globalIndex === valuesData.length - 1;
                  return (
                    <ValueCard
                      key={index}
                      className={index % 2 === 0 ? "even" : "odd"}
                      isLast={isLast}
                      image={element.image}
                      title={element.title}
                      description={element.description}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Values;
