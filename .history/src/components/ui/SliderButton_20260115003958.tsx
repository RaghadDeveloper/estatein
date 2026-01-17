import type { imageProps } from "../../interfaces"

const SliderButton = ({image}:imageProps) => {
  return (
    <button>
      <img src={image.a} alt="" />
    </button>
  )
}

export default SliderButton