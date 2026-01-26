import type { ReactNode } from "react";

const SectionContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="ml-4.25 mr-4 md:mx-20 2xl:mx-40.5 mt-20 lg:mt-30 2xl:mt-37.5">
      {children}
    </div>
  );
};

export default SectionContainer;
