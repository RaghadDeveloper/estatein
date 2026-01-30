import {
  featureData,
  servicesData,
  servicesFormHeaderData,
} from "../../data/servicesData";
import ServiceCard from "../ui/ServiceCard";
import FeatureServiceCard from "../ui/FeatureServiceCard";
import SectionHeader from "../ui/SectionHeader";
import SectionContainer from "../layouts/SectionContainer";

function UnlockValue() {
  return (
    <SectionContainer>
      <section className="  flex justify-center">
        <div className="w-full min-[1440px]:max-w-321.75! min-[1920px]:max-w-396!">
          <SectionHeader {...servicesFormHeaderData} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 min-[1201px]:grid-cols-3! gap-6">
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
    </SectionContainer>
  );
}

export default UnlockValue;
