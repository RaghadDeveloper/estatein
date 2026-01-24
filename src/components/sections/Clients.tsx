import { ClientCardData } from "../../data/aboutData";
import type { Clientcarddata } from "../../interfaces";
import SectionContainer from "../layouts/SectionContainer";
import Slider from "../layouts/Slider";
import ClientCard from "../ui/ClientCard";

const Clients = () => {
  const cards = ClientCardData.map((item: Clientcarddata) => (
    <ClientCard
      year={item.year}
      title={item.title}
      PBox1={item.PBox1}
      PBox2={item.PBox2}
      PBoxBig={item.PBoxBig}
    />
  ));

  return (
    <SectionContainer>
      <Slider cards={cards} cardsPerView={2} spaceBetween={50} />
    </SectionContainer>
  );
};

export default Clients;
/**
 * 

///////////////////////

/////////////////////////////////

//////////////////



////////////////////////


///////////////////////
import type { columnFoot } from "../../interfaces";
import FooterColumn from "./FooterColumn";



////////////////////////////

//////////////////////////////

///////////////////////////
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [
    {
      H3:"How do I search for properties on Estatein?",
      P:"Learn how to use our user-friendly search tools to find properties that match your criteria.",
      TextButton:"Read More"
    },{
      H3:"What documents do I need to sell my property through Estatein?",
      P:"Find out about the necessary documentation for listing your property with us.",
      TextButton:"Read More"
    },{
      H3:"How can I contact an Estatein agent?",
      P:"Discover the different ways you can get in touch with our experienced agents.",
      TextButton:"Read More"
    },{
      H3:"What documents do I need to sell my property through Estatein 2?",
      P:"Discover the different ways you can get in touch with our experienced agents. 2",
      TextButton:"Read More"
    },{
      H3:"What documents do I need to sell my property through Estatein 3?",
      P:"Discover the different ways you can get in touch with our experienced agents. 3",
      TextButton:"Read More"
    },{
      H3:"What documents do I need to sell my property through Estatein 4?",
      P:"Discover the different ways you can get in touch with our experienced agents. 4",
      TextButton:"Read More"
    }
  ],
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {},
});

export default questionsSlice.reducer;

///////////////////////////////
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  services: [],
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {},
});

export default servicesSlice.reducer;

///////////////////
import { ClientCardData } from "../../data/aboutData";
import ClientCard from "../ui/ClientCard";

const Clients = () => {
  return <div className="flex gap-[20px] flex-wrap">
    {
      ClientCardData.map((item:any)=>(
        <ClientCard year={item.year} title={item.title}  PBox1={item.PBox1}  PBox2={item.PBox2}  PBoxBig={item.PBoxBig}/>
      ))
    }

  </div>;
};

export default Clients;

/////////////////
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

//////////////////
 */
