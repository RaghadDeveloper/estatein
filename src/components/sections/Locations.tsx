import { useState } from "react";
import type { LocationsCardProps, TapS } from "../../interfaces";
import SectionContainer from "../layouts/SectionContainer";
import SectionHeader from "../ui/SectionHeader";
import LocationCard from "../ui/LocationCard";
import Tab from "../ui/Tab";
import {
  locationsCardsData,
  LocationsHeaderData,
  TAps,
} from "../../data/contactData";

const Locations = () => {
  const [activeTab, setActiveTap] = useState<string>("All");

  const filterCardLocations =
    activeTab == "All"
      ? locationsCardsData
      : locationsCardsData.filter((card) => card.category == activeTab);

  return (
    <SectionContainer>
      <SectionHeader {...LocationsHeaderData} />
      <div className="flex flex-col 2xl:gap-12.5 lg:gap-10 gap-7.5">
        <div className="2xl:w-129 2xl:h-20.75 rounded-xl p-2 bg-gray-10 flex justify-between items-center lg:w-103.25 h-17.25  w-89.25">
          {TAps.map((item: TapS) => (
            <Tab
              key={item.tap}
              active={activeTab === item.tap}
              onClick={() => {
                setActiveTap(item.tap);
              }}
            >
              {item.tap}
            </Tab>
          ))}
        </div>
        <div className="flex items-stretch 2xl:gap-7.5 lg:gap-5 gap-7.5 min-[850px]:flex-row flex-col h-full">
          {filterCardLocations.map((card: LocationsCardProps) => (
            <LocationCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Locations;
