import { useState } from "react";
import type { LocationsCardProps, TapS } from "../../interfaces";
import SectionContainer from "../layouts/SectionContainer";
import SectionHeader from "../ui/SectionHeader";
import LocationCard from "../ui/LocationCard";
import ButtonLocations from "../ui/ButtonLocations";
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
      <div className="flex flex-col 2xl:gap-20 lg:gap-15 gap-10">
        <div className="flex flex-col 2xl:gap-12.5 lg:gap-10 gap-7.5">
          <div className="2xl:w-129 2xl:h-20.75 rounded-xl p-2 bg-gray-10 flex justify-between items-center lg:w-103.25 h-17.25  w-89.25">
            {TAps.map((item: TapS) => (
              <ButtonLocations
                Bool={false}
                variant={activeTab === item.tap ? "BgBlack" : "BgGray"}
                onClick={() => {
                  setActiveTap(item.tap);
                }}
              >
                {item.tap}
              </ButtonLocations>
            ))}
          </div>
          <div className="flex items-stretch 2xl:gap-7.5 lg:gap-5 gap-7.5 lg:flex-row flex-col h-full">
            {filterCardLocations.map((card: LocationsCardProps) => (
              <LocationCard {...card} />
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Locations;
