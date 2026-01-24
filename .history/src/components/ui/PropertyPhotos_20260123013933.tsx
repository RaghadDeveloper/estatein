import { photos } from "../../data/propertiesData"

const PropertyPhotos = () => {
  return (
    <div className="flex gap-2.5 lg:gap-5 py-2.5 lg:py-5 border
    border-gray">
      {
        photos.map((photo,index)=>{
          return <button key={index}>
            <img src={photo.source} alt={photo.alternative} />
          </button>
        })

      }
    </div>
  )
}

export default PropertyPhotos