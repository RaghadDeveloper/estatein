const HoverBg = () => {
  return (
    <>
      <div
        className={`absolute inset-0 bg-linear-to-br from-primary-60/5 via-transparent to-primary-60/5 opacity-0 transition-opacity duration-700 group-hover:opacity-100`}
      />

      <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary-60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-primary-60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
    </>
  );
};

export default HoverBg;
