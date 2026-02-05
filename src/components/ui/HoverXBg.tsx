const HoverXBg = () => {
  return (
    <>
      <div
        className="
          pointer-events-none absolute inset-0 rounded-xl transition-opacity duration-500 opacity-0 group-hover:opacity-100"
      >
        <div className="absolute inset-y-0 left-0 w-2 bg-linear-to-r from-primary-60/70 to-transparent blur-xl" />
        <div className="absolute inset-y-0 right-0 w-2 bg-linear-to-l from-primary-60/70 to-transparent blur-xl" />
      </div>
      <div
        className="
          absolute inset-0 bg-linear-to-br from-primary-60/5 via-transparent to-primary-60/5 transition-opacity duration-700 opacity-0 group-hover:opacity-100
        "
      />
    </>
  );
};

export default HoverXBg;
