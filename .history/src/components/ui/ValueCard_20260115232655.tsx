import type { ValueCardProps } from "../../interfaces";

const ValueCard = ({image,title,description}:ValueCardProps) => {
  return <div>
    <div>
      <div>
        <img src={image.source} alt={image.alternative} />
      </div>
      <h3></h3>
    </div>
  </div>;
};

export default ValueCard;
