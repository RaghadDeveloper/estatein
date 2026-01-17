import type { SliderButtonProps } from "../../interfaces"

const SliderButton = ({image}:SliderButtonProps) => {
  return (
    <button className={``}>
      <img src={image.source} alt={image.alternative} />
    </button>
  )
}

export default SliderButton