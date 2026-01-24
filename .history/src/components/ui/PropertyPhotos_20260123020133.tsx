import { photos } from "../../data/propertiesData"

const PropertyPhotos = () => {
  return (
    <div className="flex gap-2.5 lg:gap-5 py-2.5 lg:py-5 border
    border-gray-15 rounded-xl">
      {
        photos.map((photo,index)=>{
          return <button className="w-36 h-[94px]" key={index}>
            <img className="rounded-md w-full h-full" src={photo.source} alt={photo.alternative} />
          </button>
        })

      }
    </div>
  )
}

export default PropertyPhotos