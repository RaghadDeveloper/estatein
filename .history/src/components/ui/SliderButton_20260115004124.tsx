import type { imageProps } from "../../interfaces"

const SliderButton = ({image}:imageProps) => {
  return (
    <button className="w-14.5 h-14.5 ">
      <img src={image.aource} alt={image.alternative} />
    </button>
  )
}

export default SliderButton