interface PriceValueProps {
  title: string;
  value: number;
}

const PriceValue = ({ title, value }: PriceValueProps) => {
  return (
    <div className="flex flex-col">
      <span className="text-sm 2xl:text-lg text-gray-60 2xl:mb-0.5">{title}</span>
      <span className="text-lg lg:text-xl 2xl:text-2xl font-semibold">
        ${value.toLocaleString()}
      </span>
    </div>
  );
};

export default PriceValue;
