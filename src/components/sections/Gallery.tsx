import { dataGallery, galleryHeaderData } from "../../data/contactData";
import SectionContainer from "../layouts/SectionContainer";
import SectionHeader from "../ui/SectionHeader";

const Gallery = () => {
  const style =
    "min-h-[71.5px] lg:min-h-[191.5px] 2xl:min-h-[236px] h-full w-full object-cover rounded-lg";

  return (
    <SectionContainer>
      <div className="bg-[url('/assets/images/abstractDesign/gallery.png')] bg-gray-10 p-6 lg:p-15 2xl:p-20 border border-gray-15 rounded-xl">
        <div className="grid grid-cols-2 gap-2.5 lg:gap-5">
          {dataGallery?.map((data, index) => {
            const isLastTwo = index >= dataGallery.length - 2;
            if (isLastTwo && index === dataGallery.length - 2) {
              return (
                <div key="last-two" className="flex gap-2.5 lg:gap-5">
                  <div>
                    <img
                      className={style}
                      src={data.source}
                      alt={data.alternative}
                    />
                  </div>
                  <div>
                    <img
                      className={style}
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
                <img
                  className={style}
                  src={data.source}
                  alt={data.alternative}
                />
              </div>
            );
          })}
        </div>
        <div className="mt-13.75 lg:mt-5 grid  grid-cols-1 gap-5 lg:grid-cols-2">
          <SectionHeader
            {...galleryHeaderData}
            className="mt-13.75w lg:my-[40.5px] 2xl:my-[56.5px]"
          />
          <img
            className="h-33.75 sm:h-full w-full object-cover rounded-lg"
            src="/assets/images/gallery/gallery6.webp"
            alt="gallery"
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default Gallery;
