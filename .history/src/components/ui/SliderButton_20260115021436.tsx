import type { SliderButtonProps } from "../../interfaces"

const SliderButton = ({image}:SliderButtonProps) => {
  return (
    <button className="w-14.5 h-14.5 rounded-full flex justify-center items-center
    border border-gray-15 cus">
      <img src={image.source} alt={image.alternative} />
    </button>
  )
}

export default SliderButton