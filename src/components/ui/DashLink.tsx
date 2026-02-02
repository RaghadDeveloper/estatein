import type { ComponentType, SVGProps } from "react";
import { NavLink } from "react-router-dom";

const DashLink = ({
  link,
}: {
  link: {
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    to?: string;
    label: string;
  };
}) => {
  const style =
    "w-full py-3 px-6 mb-3 rounded-lg hover:bg-gray-20 transition-colors flex items-center gap-4 text-lg font-medium";

  if (!link.to) {
    return (
      <span className={style}>
        <link.icon /> {link.label}
      </span>
    );
  }
  return (
    <NavLink
      to={link.to}
      className={({ isActive }) =>
        `${style} ${isActive ? "bg-gray-20 shadow-lg" : ""}`
      }
    >
      <link.icon />
      {link.label}
    </NavLink>
  );
};

export default DashLink;
