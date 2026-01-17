import type { imageProps } from "../../interfaces"

const SliderButton = ({image}:imageProps) => {
  return (
    <button>
      <img src={image.aource} alt={} />
    </button>
  )
}

export default SliderButton