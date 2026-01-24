import { teamHeaderData, teamMembers } from "../../data/aboutData";
import SectionContainer from "../layouts/SectionContainer";
import MemberCard from "../ui/MemberCard";
import SectionHeader from "../ui/SectionHeader";

const Team = () => {
  return (
    <SectionContainer>
      <SectionHeader {...teamHeaderData} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 2xl:gap-7.5 justify-items-center w-full mx-auto">
        {teamMembers.map((member, index) => (
          <MemberCard
            key={index}
            name={member.name}
            position={member.position}
            imageUrl={member.imageUrl}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Team;
