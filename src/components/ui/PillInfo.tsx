import { useEffect, useRef, useState } from "react";

interface PillInfoProps {
  icon?: string;
  label: string;
  value?: string;
  pricing?: boolean;
}

const PillInfo = ({ icon, label, value, pricing }: PillInfoProps) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const [isMultiLine, setIsMultiLine] = useState(false);

  useEffect(() => {
    const checkTextHeight = () => {
      if (textRef.current) {
        const lineHeight = parseInt(
          getComputedStyle(textRef.current).lineHeight,
        );
        const elementHeight = textRef.current.offsetHeight;

        setIsMultiLine(elementHeight > lineHeight * 1.5);
      }
    };

    checkTextHeight();

    window.addEventListener("resize", checkTextHeight);
    return window.removeEventListener("resize", checkTextHeight);
  }, []);

  return (
    <div
      className={`${pricing ? "" : "shrink-0"} flex items-center gap-1 px-3.5 py-1.5 2xl:py-2 bg-gray-10 border border-gray-15 ${pricing ? (isMultiLine ? "rounded-md" : "rounded-[28px]") : "rounded-full"}`}>
      {icon && (
        <img src={icon} alt={label} className="w-5 2xl:w-6 h-5 2xl:h-6" />
      )}
      <span ref={textRef} className="text-sm 2xl:text-lg font-medium">
        {value ? `${value}-${label}` : label}
      </span>
    </div>
  );
};

export default PillInfo;
