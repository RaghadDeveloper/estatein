import { aboutData, howItWorksHeaderData } from "../../data/aboutData";
import SectionContainer from "../layouts/SectionContainer";
import SectionHeader from "../ui/SectionHeader";
import StepCard from "../ui/StepCard";

const HowItWorks = () => {
  return (
    <section className="bg-[color-gray-08] py-16">
      <SectionContainer>
        <SectionHeader {...howItWorksHeaderData} />
        <div className="max-w-399 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 2xl:gap-x-8">
            {aboutData.map((step, index) => (
              <div
                key={step.id}
                className={index >= 3 ? "hidden md:block" : "block"}
              >
                <StepCard
                  stepNumber={step.stepNumber}
                  title={step.title}
                  description={step.description}
                />
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};
export default HowItWorks;
