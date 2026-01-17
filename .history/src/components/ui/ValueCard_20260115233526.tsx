import type { ValueCardProps } from "../../interfaces";

const ValueCard = ({image,title,description}:ValueCardProps) => {
  return <div>
    <div className="flex items-center gap-2 lg:gap-2.5 2xl:gap-3.5 mb-3.5 lg:mb-4 2xl:mb-5">
      <div className="flex justify-center items-center w-13 lg:w-15 2xl:w-18.5 h-13 lg:h-15 2xl:h-18.5
      border border-p">
        <img src={image.source} alt={image.alternative} />
      </div>
      <h3>{title}</h3>
    </div>
    <p>{description}</p>
  </div>;
};

export default ValueCard;
