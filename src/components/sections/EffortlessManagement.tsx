import ServiceCard from "../ui/ServiceCard";
import FeatureServiceCard from "../ui/FeatureServiceCard";
import {
  EffortlessFormHeaderData,
  managementFeatureData,
  managementServicesData,
} from "../../data/servicesData";
import SectionHeader from "../ui/SectionHeader";

const EffortlessManagement = () => {
  return (
    <section className="bg-gray-08  pb-16 lg:pb-24 flex justify-center">
      <div
        className="w-full 
        min-[1440px]:!max-w-[1287px]  
        min-[1920px]:!max-w-[1584px]  
      
      "
      >
        <SectionHeader {...EffortlessFormHeaderData} />

        <div className="grid grid-cols-1 md:grid-cols-2 min-[1201px]:!grid-cols-3 gap-6">
          {managementServicesData.slice(0, 3).map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}

          <div className="col-span-1">
            <ServiceCard
              title={managementServicesData[3].title}
              description={managementServicesData[3].description}
              icon={managementServicesData[3].icon}
            />
          </div>

          <div className="md:col-span-2 min-[1201px]:col-span-2">
            <FeatureServiceCard
              title={managementFeatureData.title}
              description={managementFeatureData.description}
              bgImage={managementFeatureData.bgImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EffortlessManagement;
