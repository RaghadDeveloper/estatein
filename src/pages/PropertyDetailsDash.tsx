import { useParams } from "react-router-dom";
import { selectProperty } from "../redux/properties/propertiesSelectors";
import { useSelector } from "react-redux";
import Info from "../components/ui/Info";

const PropertyDetailsDash = () => {
  const { id } = useParams();
  const property = useSelector(selectProperty(id!));

  console.log("Property:", property);

  return <div className="border border-primary-50 rounded-xl shadow-md shadow-primary-70
  p-4">
    <Info text="Title" description={property?.title}/>
    <Info text="Subtitle" description={property?.subTitle}/>
    <Info text="Type" description={property?.propertyType}/>
    <Info text="Id" description={property?.id}/>
    <Info text="Location Type" description={property?.locationType} />
    <Info text="Location" description={property?.location}/> 
    <Info text="Price" description={property?.price}/>
    <Info text="The area" description={property?.area}/>
    <Info text="The bathrooms number" description={property?.bathrooms}/>
    <Info text="The bedrooms number" description={property?.bedrooms}/>
    <Info text="The description" description={property?.description}/>
    <div className="flex gap-1.5">{
      property?.photos.map((photo,index)=>{
        return <div className="w-fit" key={index}>
          <img src={photo} alt="image" className="max-w-full" />
        </div>
      })
      }</div>
      <div className="flex justify-center items-center gap-2.5">
        <button className="p-2 rounded-sm w-20 bg-primary-70 cursor-pointer">edit</button>
        <button className="p-2 rounded-sm w-20 bg-red-500 cursor-pointer">delete</button>
      </div>
  </div>;
};

export default PropertyDetailsDash;
