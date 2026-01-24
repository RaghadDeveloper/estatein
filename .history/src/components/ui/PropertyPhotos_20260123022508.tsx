import { photos } from "../../data/propertiesData"

const PropertyPhotos = () => {
  return (
    <div className="flex justify-between gap-2.5 lg:gap-5 py-2.5 lg:py-5 border
    border-gray-15 rounded-xl">
      {
        photos.map((photo,index)=>{
          return <button className="w-36 aspect-4/3 border-0" key={index}>
            <img className="rounded-md w-full h-full object-cover" src={photo.images[index].source} alt={photo.images[]} />
          </button>
        })
      }
    </div>
  )
}

export default PropertyPhotos