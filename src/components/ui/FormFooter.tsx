import type { FormFooterProps } from "../../interfaces";
import Button from "./Button";

const FormFooter = ({
  isChecked,
  handleCheckboxChange,
  loading,
}: FormFooterProps) => {
  return (
    <div className="flex gap-5 flex-col md:flex-row md:items-center md:justify-between">
      <div className="flex gap-1.5 items-center">
        <input
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="appearance-none rounded-sm accent-gray-10 bg-bg-secondary! border border-gray-15! w-6 h-6 2xl:w-7 2xl:h-7 cursor-pointer"
          type="checkbox"
        />
        <p className="font-medium text-text-secondary text-[14px] lg:text-[16px] 2xl:text-[18px] cursor-default">
          I agree with{" "}
          <span className="underline cursor-pointer">Terms of Use</span> and{" "}
          <span className="underline cursor-pointer">Privacy Policy</span>
        </p>
      </div>
      <div className="">
        <Button
          btnType="submit"
          variant="primary"
          disabled={!isChecked || loading}
        >
          Send Your Message
        </Button>
      </div>
    </div>
  );
};

export default FormFooter;
