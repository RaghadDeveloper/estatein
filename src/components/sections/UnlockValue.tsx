import { featureData, servicesData } from "../../data/servicesData";
import ServiceCard from "../ui/ServiceCard";
import FeatureServiceCard from "../ui/FeatureServiceCard";

function UnlockValue() {
  return (
    <section className="bg-gray-08 py-16 lg:py-24 min-h-screen flex justify-center">
      <div
        className="w-full 
        min-[1440px]:!max-w-[1287px]  
        min-[1920px]:!max-w-[1584px]  
      "
      >
        <div className="grid grid-cols-1 md:grid-cols-2 min-[1201px]:!grid-cols-3 gap-6">
          {servicesData.slice(0, 3).map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}

          <div className="col-span-1">
            <ServiceCard
              title={servicesData[3].title}
              description={servicesData[3].description}
              icon={servicesData[3].icon}
            />
          </div>

          <div className="md:col-span-2 min-[1201px]:col-span-2">
            <FeatureServiceCard
              title={featureData.title}
              description={featureData.description}
              bgImage={featureData.bgImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default UnlockValue;
