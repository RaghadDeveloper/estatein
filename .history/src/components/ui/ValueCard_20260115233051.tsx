import type { ValueCardProps } from "../../interfaces";

const ValueCard = ({image,title,description}:ValueCardProps) => {
  return <div>
    <div>
      <div className="flex items-center gap-2 lg:gap-2.5 2xl:gap-3.5 
      mb-3.5 ">
        <img src={image.source} alt={image.alternative} />
      </div>
      <h3>{title}</h3>
    </div>
    <p>{description}</p>
  </div>;
};

export default ValueCard;
