import { photos } from "../../data/propertiesData"

const PropertyPhotos = () => {
  return (
    <div>
      {
        photos.map((photo,index)=>{
          return <button>
            <img src={photo.source} alt={phot} />
          </button>
        })

      }
    </div>
  )
}

export default PropertyPhotos