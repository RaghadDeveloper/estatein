import type { imageProps } from "../../interfaces"

const SliderButton = ({image}:) => {
  return (
    <button className="w-14.5 h-14.5 rounded-full flex justify-center items-center">
      <img src={image.aource} alt={image.alternative} />
    </button>
  )
}

export default SliderButton