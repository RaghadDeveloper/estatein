import type { ReactNode } from "react";

const SectionContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="ml-4.25 mr-4 mt-20 md:mx-20 lg:mt-30 min-[1740px]:mx-40.5! min-[1740px]:mt-37.5!">
      {children}
    </div>
  );
};

export default SectionContainer;
