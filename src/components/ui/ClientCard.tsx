import type { Clientcarddata } from "../../interfaces";
import Button from "./Button";
import ClientInfo from "./ClientInfo";

const ClientCard = ({
  year,
  title,
  domain,
  category,
  comment,
}: Clientcarddata) => {
  const infos = [
    { label: "Domain", value: domain, icon: "/public/assets/icons/domain.svg" },
    {
      label: "Category",
      value: category,
      icon: "/public/assets/icons/category.svg",
    },
  ];

  return (
    <div className=" relative overflow-visible flex flex-col border border-gray-15 2xl:gap-10 2xl:p-12.5 lg:gap-7.5 lg:p-10 gap-6 p-7.5 rounded-xl shadow-[0px_0px_0px_6px_var(--color-shadow)] lg:shadow-[0px_0px_0px_8px_var(--color-shadow)] transition-all duration-1000 ease-out group">
      {/* Hover */}
      <div className="pointer-events-none absolute inset-0 rounded-xl bg-linear-to-r from-primary-60/10 via-transparent to-primary-60/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

      <div className="flex justify-between lg:items-center gap-5 lg:flex-row flex-col">
        <div className="flex flex-col justify-center">
          <p className="text-text-secondary text-[16px] mb-0.5 lg:mb-1 2xl:mb-1.5">
            Since{year}
          </p>
          <h3 className="2xl:text-[30px] lg:text-[24px] text-[20px]">
            {title}
          </h3>
        </div>
        <div className="h-fit">
          <Button variant="secondary">Visit Website</Button>
        </div>
      </div>
      <div className="flex justify-between gap-2.5">
        <ClientInfo {...infos[0]} />
        <div className="w-0.5 bg-gray-15 mx-4 lg:mx-5 2xl:mx-7.5" />
        <ClientInfo {...infos[1]} />
      </div>
      <div className="flex flex-col gap-2 lg:gap-2.5 2xl:gap-3.5 border-2 border-gray-15 p-5 lg:p-6 2xl:p-7.5 rounded-xl text-[16px]">
        <p className="text-text-secondary">"What They Said 🤗"</p>
        <p className="2xl:text-lg lg:text-base text-sm">{comment}</p>
      </div>
    </div>
  );
};

export default ClientCard;
