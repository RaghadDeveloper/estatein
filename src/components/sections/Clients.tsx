import { ClientCardData } from "../../data/aboutData";
import ClientCard from "../ui/ClientCard";

const Clients = () => {
  return <div className="flex gap-[20px] flex-wrap">
    {
      ClientCardData.map((item:any)=>(
        <ClientCard year={item.year} title={item.title} textButton={item.textButton} img1={item.img1} titleBox1={item.titleBox1} PBox1={item.PBox1} img2={item.img2} titleBox2={item.titleBox2} PBox2={item.PBox2} titleBoxBig={item.titleBoxBig} PBoxBig={item.PBoxBig}/>
      ))
    }

  </div>;
};

export default Clients;
