const PageTilte = ({ title }: { title: string }) => {
  return (
    <h2 className="text-[28px] md:text-[32px] lg:text-[38px] 2xl:text-[48px] font-semibold text-center">
      {title}
    </h2>
  );
};

export default PageTilte;
