import { useSelector } from "react-redux";
import FaqCard from "../ui/FaqCard";


function  Faq(){
  const questions = useSelector(
    (state: any) => state.questions.questions
  );
  return (
    <div className="flex gap-[20px] flex-wrap md:justify-between justify-center">
      {questions.map((item: any) => (
        <FaqCard
          H3={item.H3}
          P={item.P}
          TextButton={item.TextButton}
        />
      ))}
    </div>
  );
};

export default Faq;
