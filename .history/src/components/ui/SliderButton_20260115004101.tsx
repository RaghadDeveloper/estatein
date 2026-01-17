import type { imageProps } from "../../interfaces"

const SliderButton = ({image}:imageProps) => {
  return (
    <button className="w-">
      <img src={image.aource} alt={image.alternative} />
    </button>
  )
}

export default SliderButton