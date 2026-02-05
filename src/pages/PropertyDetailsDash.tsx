import { useNavigate, useParams } from "react-router-dom";
import { selectProperty } from "../redux/properties/propertiesSelectors";
import { useDispatch, useSelector } from "react-redux";
import Info from "../components/ui/Info";
import DeleteModal from "../components/ui/DeleteModal";
import { useState } from "react";
import { deleteProperty } from "../services/propertyService";
import { removeProperty } from "../redux/properties/propertiesSlice";

const PropertyDetailsDash = () => {
  const { id } = useParams();
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const property = useSelector(selectProperty(id!));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = async () => {
    if (!deleteId) return;
    try {
      setIsDeleting(true);
      await deleteProperty(deleteId);
      dispatch(removeProperty(deleteId));
      setDeleteId(null);
      navigate("/dashboard/properties");
    } catch (err) {
      console.log("err", err);
      alert("Failed to delete property from database. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div
      className="border border-primary-50 rounded-xl shadow-md shadow-primary-70
  p-4"
    >
      <Info text="Title" description={property?.title} />
      <Info text="Subtitle" description={property?.subTitle} />
      <Info text="Type" description={property?.propertyType} />
      <Info text="Id" description={property?.id} />
      <Info text="Location Type" description={property?.locationType} />
      <Info text="Location" description={property?.location} />
      <Info text="Price" description={property?.price} />
      <Info text="The area" description={property?.area} />
      <Info text="The bathrooms number" description={property?.bathrooms} />
      <Info text="The bedrooms number" description={property?.bedrooms} />
      <Info text="The description" description={property?.description} />
      <div className="flex gap-1.5">
        {property?.photos.map((photo, index) => {
          return (
            <div className="w-fit" key={index}>
              <img src={photo} alt="image" className="max-w-full" />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center gap-2.5">
        <button
          className="p-2 rounded-sm w-20 bg-primary-70 cursor-pointer"
          onClick={() => navigate(`/dashboard/properties/edit/${id}`)}
        >
          edit
        </button>
        <button
          className="p-2 rounded-sm w-20 bg-red-500 cursor-pointer"
          onClick={() => setDeleteId(String(id))}
        >
          delete
        </button>
      </div>

      <DeleteModal
        isOpen={!!deleteId}
        onClose={() => setDeleteId(null)}
        onConfirm={handleDelete}
        isDeleting={isDeleting}
        title="this property"
      />
    </div>
  );
};

export default PropertyDetailsDash;
