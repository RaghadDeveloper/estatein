import { dataGallery } from "../../data/contactData";
import SectionContainer from "../layouts/SectionContainer";
import SectionHeader from "../ui/SectionHeader";

const Gallery = () => {
  return (
    <SectionContainer>
      <div
        className="bg-[url('/assets/images/abstractDesign/gallery.png')]
    p-6 lg:p-15 2xl:p-20 border border-gray-15 rounded-xl"
      >
        <div className="grid grid-cols-2 gap-2.5 lg:gap-5">
          {dataGallery?.map((data, index) => {
            const isLastTwo = index >= dataGallery.length - 2;
            if (isLastTwo && index === dataGallery.length - 2) {
              return (
                <div key="last-two" className="flex gap-2.5 lg:gap-5">
                  <div>
                    <img src={data.source} alt={data.alternative} />
                  </div>
                  <div>
                    <img
                      src={dataGallery[index + 1].source}
                      alt={dataGallery[index + 1].alternative}
                    />
                  </div>
                </div>
              );
            }
            if (isLastTwo) return null;
            return (
              <div key={index}>
                <img src={data.source} alt={data.alternative} />
              </div>
            );
          })}
        </div>
        <div className="mt-6.25 lg:mt-5 grid  grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="mt-5 lg:mt-[42.5px] 2xl:mt-[50.5px]">
            <SectionHeader
              title="Explore Estatein's World"
              text="Step inside the world of Estatein, where professionalism meets warmth, 
                and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, 
                inviting you to get to know us better."
            />
          </div>
          <div>
            <img src="/assets/images/gallery/gallery6.webp" alt="gallery" />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Gallery;
