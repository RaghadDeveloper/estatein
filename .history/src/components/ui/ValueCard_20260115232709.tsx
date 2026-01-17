import type { ValueCardProps } from "../../interfaces";

const ValueCard = ({image,title,description}:ValueCardProps) => {
  return <div>
    <div>
      <div>
        <img src={image.source} alt={image.alternative} />
      </div>
      <h3>{title}</h3>
    </div>
    <p></p>
  </div>;
};

export default ValueCard;
