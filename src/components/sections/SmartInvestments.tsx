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
      <section className="pb-10 md:pb-16 min-[1241px]:pb-24 flex justify-center font-urbanist">
        <div className="w-full min-[1440px]:max-w-321.75! min-[1920px]:max-w-396!">
          <div className="grid grid-cols-1 min-[1241px]:grid-cols-3 gap-6 items-start">
            <div className="min-[1241px]:col-span-1 flex flex-col">
              <div className="[&_header]:mb-0! [&_h2]:max-[1919px]:text-[38px]! [&_h1]:max-[1919px]:text-[38px]!">
                <SectionHeader {...SmartInvestmentsFormHeaderData} />
              </div>

              <div className="mt-3 [&>div]:flex-col! [&>div]:items-start! [&>div]:p-6! md:[&>div]:p-10 [&>div_h2]:text-[20px]! md:[&>div_h2]:text-[24px]! min-[1920px]:[&>div_h2]:text-[30px] [&>div_p]:text-gray-60! [&>div_button]:w-full! [&>div_div:nth-child(2)]:flex-col! [&>div_div:last-child]:w-full [&>div_div:last-child]:mt-auto!">
                <FeatureServiceCard
                  title={investmentFeatureData.title}
                  description={investmentFeatureData.description}
                  bgImage={investmentFeatureData.bgImage}
                />
              </div>
            </div>

            <div className="min-[1241px]:col-span-2 bg-gray-10 p-2 rounded-xl border border-gray-15 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
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
        </div>
      </section>
    </SectionContainer>
  );
};

export default SmartInvestments;
