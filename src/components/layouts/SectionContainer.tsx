import type { ReactNode } from "react";

const SectionContainer = ({ children }: { children: ReactNode }) => {
  return <div className=" mx-4 sm:mx-20 lg:mx-40.5 mt-20 sm:mt-30 lg:mt-37.5">{children}</div>;
};

export default SectionContainer;
