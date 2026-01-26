import { useState } from "react";
import type { LocationsCardProps, LocationsSectionProps, TapS } from "../../interfaces";
import SectionContainer from "../layouts/SectionContainer";
import SectionHeader from "../ui/SectionHeader";
import LocationCard from "../ui/LocationCard";
import ButtonLocations from "../ui/ButtonLocations";
import { TAps } from "../../data/contactData";

const Locations = ({ headerData, cards }: LocationsSectionProps) => {
  const [activeTab, setActiveTap] = useState<string>("All")
  const filterCardLocations = activeTab == "All" ? cards : cards.filter((card) => (card.category == activeTab))
  return (
    <SectionContainer>
      <div className="flex flex-col 2xl:gap-[80px] lg:gap-[60px] gap-[40px]">
        <SectionHeader {...headerData} />
        <div className="flex flex-col 2xl:gap-[50px] lg:gap-[40px] gap-[30px]">
          <div className="2xl:w-[516px] 2xl:h-[83px] rounded-xl p-2 bg-gray-10 flex justify-between items-center lg:w-[413px] h-[69px]  w-[357px]">
            {
              TAps.map((item: TapS) => (
                <ButtonLocations Bool={false} variant={activeTab === item.tap ? "BgBlack" : "BgGray"} onClick={() => { setActiveTap(item.tap) }}>{item.tap}</ButtonLocations>
              ))
            }
          </div>
          <div className="flex 2xl:gap-[30px] lg:gap-[20px] gap-[30px] lg:flex-row flex-col">
            {
              filterCardLocations.map((card: LocationsCardProps) => (
                <LocationCard {...card} />
              ))
            }
          </div>
        </div>
      </div>
    </SectionContainer>
  )
};

export default Locations;
