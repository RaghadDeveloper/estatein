import type { imageProps } from "../../interfaces"

const SliderButton = ({image}:imageProps) => {
  return (
    <button>
      <img src={image.aource} alt={image.a} />
    </button>
  )
}

export default SliderButton