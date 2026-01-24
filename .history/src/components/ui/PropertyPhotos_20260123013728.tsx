import { photos } from "../../data/propertiesData"

const PropertyPhotos = () => {
  return (
    <div className="flex ">
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