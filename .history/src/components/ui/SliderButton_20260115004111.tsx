import type { imageProps } from "../../interfaces"

const SliderButton = ({image}:imageProps) => {
  return (
    <button className="w-[58px]">
      <img src={image.aource} alt={image.alternative} />
    </button>
  )
}

export default SliderButton