const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>
      <span className=" relative z-10 text-primary-75 text-[10px] w-[1em] h-[1em] rounded-full indent-[-9999em] animate-[mulShdSpin_1.3s_linear_infinite] transform-[translateZ(0)]"></span>
    </div>
  );
};

export default Loader;
