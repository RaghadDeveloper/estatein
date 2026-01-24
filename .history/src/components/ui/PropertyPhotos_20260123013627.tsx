import { photos } from "../../data/propertiesData"

const PropertyPhotos = () => {
  return (
    <div>
      {
        photos.map((photo,index)=>{
          return <button></button>
        })

      }
    </div>
  )
}

export default PropertyPhotos