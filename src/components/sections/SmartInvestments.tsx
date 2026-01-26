import { 
  investmentServicesData, 
  investmentFeatureData, 
  SmartInvestmentsFormHeaderData 
} from "../../data/servicesData";
import FeatureServiceCard from "../ui/FeatureServiceCard";
import SectionHeader from "../ui/SectionHeader";
import ServiceCard from "../ui/ServiceCard";

const SmartInvestments = () => {
  return (
    <section className="bg-gray-08 pb-10 md:pb-16 min-[1241px]:pb-24 flex justify-center font-urbanist">
      <div
        className="w-full 
        min-[1440px]:!max-w-[1287px]  
        min-[1920px]:!max-w-[1584px]"
      >
        <div className="grid grid-cols-1 min-[1241px]:grid-cols-[0.8fr_1.2fr] gap-10 min-[1241px]:gap-16 items-stretch">
          
          <div className="flex flex-col h-full justify-between">
          
            <div className="max-w-[600px] [&_header]:!mb-[30px] md:[&_header]:!mb-[40px] min-[1241px]:[&_header]:!mb-[50px]">
              <SectionHeader {...SmartInvestmentsFormHeaderData} />
            </div>

            <div className="
             flex flex-col
              [&>div]:min-[1241px]:flex-col 
              [&>div]:min-[1241px]:items-start 
              [&>div]:min-[1241px]:justify-between 
              [&>div]:h-full 
              [&>div]:w-full
              [&>div>div:last-child]:min-[1241px]:w-full 
              [&_button]:min-[1241px]:w-full
            ">
              <FeatureServiceCard 
                title={investmentFeatureData.title}
                description={investmentFeatureData.description}
                bgImage={investmentFeatureData.bgImage}
              />
            </div>
          </div>

          <div className="bg-gray-10 p-2 rounded-[12px] border border-gray-15 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2   h-full">
              {investmentServicesData.map((service) => (
                <ServiceCard 
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SmartInvestments;