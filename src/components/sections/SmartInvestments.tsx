import {
  investmentServicesData,
  investmentFeatureData,
  SmartInvestmentsFormHeaderData,
} from "../../data/servicesData";
import SectionContainer from "../layouts/SectionContainer";
import FeatureServiceCard from "../ui/FeatureServiceCard";
import SectionHeader from "../ui/SectionHeader";
import ServiceCard from "../ui/ServiceCard";

const SmartInvestments = () => {
  return (
    <SectionContainer>
      <div className="flex items-center flex-col min-[1241px]:flex-row gap-5 min-[1440px]:gap-12.5 min-[1920px]:gap-15 ">
        <div className="min-[1241px]:col-span-1 flex flex-col h-full min-[1240px]:max-[1440px]:justify-between min-[1340px]:min-w-103 2xl:min-w-129.75">
          <div className="[&_p]:mb-10 min-[1920px]:[&_p]:mb-11.25 [&_header]:mb-0! [&_h2]:max-[1919px]:text-[38px]! [&_h1]:max-[1919px]:text-[38px]!">
            <SectionHeader {...SmartInvestmentsFormHeaderData} />
          </div>

          <div className="mt-0 [&>div]:flex-col! [&>div]:items-start! [&_div.hidden.lg\:block]:hidden! [&_div.lg\:hidden]:flex! [&_div.lg\:hidden]:w-full! [&_h2]:order-1! [&_div.lg\:hidden]:order-2! [&_p]:order-3! lg:[&_p]:order-2! lg:[&_div.lg\:hidden]:order-3! lg:[&_div.lg\:hidden]:mt-auto! [&_h2]:text-[20px]! min-[1440px]:[&_h2]:text-[22px]! min-[1920px]:[&_h2]:text-[24px]! [&>div_button]:w-full! [&>div_div:last-child]:mt-auto!">
            <FeatureServiceCard
              title={investmentFeatureData.title}
              description={investmentFeatureData.description}
              reverse
            />
          </div>
        </div>

        <div className="min-[1241px]:col-span-2 bg-bg-secondary p-2 rounded-xl border border-gray-15 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {investmentServicesData.map((service) => (
              <div key={service.id}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default SmartInvestments;
