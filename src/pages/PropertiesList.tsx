import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredProperties } from "../redux/properties/propertiesSelectors";
import {
  setProperties,
  removeProperty,
  setFilter,
  setSearch,
} from "../redux/properties/propertiesSlice";
import { getProperties, deleteProperty } from "../services/propertyService";
import type { Column, PropertyData } from "../interfaces";
import Loader from "../components/ui/Loader";
import DeleteModal from "../components/ui/DeleteModal";
import Pagination from "../components/ui/Pagination";
import DataTable from "../components/ui/DataTable";
import Button from "../components/ui/Button";
import PropertySelect from "../components/ui/PropertySelect";
import SearchBar from "../components/ui/SearchBar";

import typeIcon from "/assets/icons/property.svg";
import locationIcon from "/assets/icons/Location.svg";

import { FaImage } from "react-icons/fa";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const PropertiesList = () => {
  const dispatch = useDispatch();
  const properties = useSelector(selectFilteredProperties);

  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 5;

  const [searchValue, setSearchValue] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const data: PropertyData[] = await getProperties();
        dispatch(setProperties(data));
      } catch (err) {
        console.error("Error fetching properties:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, [dispatch]);

  const handleDelete = async () => {
    if (!deleteId) return;
    try {
      setIsDeleting(true);
      await deleteProperty(deleteId);
      dispatch(removeProperty(deleteId));
      setDeleteId(null);
    } catch (err) {
      alert("Failed to delete property from database. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  };

  const columns: Column<PropertyData>[] = useMemo(
    () => [
      {
        header: "Image",
        accessor: "photos",
        render: (p) => {
          const NoImagePlaceholder = (
            <div className="w-16 h-12 rounded-xl border border-gray-800 bg-gray-15 flex flex-col items-center justify-center gap-1 text-[8px] text-gray-600 font-bold uppercase tracking-tighter">
              <FaImage className="text-sm" />
              <span>No Image</span>
            </div>
          );

          return (
            <div className="w-16 h-12 rounded-xl overflow-hidden border border-gray-700 bg-gray-900 shadow-inner flex-shrink-0 relative group">
              {p.photos && p.photos.length > 0 ? (
                <img
                  src={p.photos[0]}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt={p.title}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    target.parentElement!.classList.add("flex", "items-center", "justify-center");
                    target.insertAdjacentHTML("afterend", `<div class="flex flex-col items-center justify-center gap-1 text-[8px] text-gray-500 font-bold uppercase w-full h-full bg-gray-15"><span>Error</span></div>`);
                  }}
                />
              ) : (
                NoImagePlaceholder
              )}
            </div>
          );
        },
      },
      {
        header: "Property Title",
        accessor: "title",
        render: (p) => <span className="text-white text-sm font-semibold whitespace-nowrap">{p.title}</span>,
      },
      {
        header: "Type",
        accessor: "propertyType",
        render: (p) => (
          <span className="px-3 py-1 rounded-md bg-[#703BF7]/10 text-[#703BF7] text-[10px] font-black uppercase border border-[#703BF7]/20 whitespace-nowrap">
            {p.propertyType}
          </span>
        ),
      },
      {
        header: "Location",
        accessor: "location",
        render: (p) => <span className="text-gray-400 text-sm whitespace-nowrap">{p.location}</span>,
      },
      {
        header: "Price",
        accessor: "price",
        render: (p) => <span className="text-white font-black text-sm whitespace-nowrap">${p.price.toLocaleString()}</span>,
      },
      {
        header: "Actions",
        accessor: "actions",
        render: (p) => (
          <div className="flex justify-center items-center gap-2">
            <button title="Edit" className="p-2 cursor-pointer text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-all">
              <FiEdit size={18} />
            </button>
            <button onClick={() => setDeleteId(p.id)} title="Delete" className="p-2 cursor-pointer text-red-400 hover:text-white hover:bg-red-500/20 rounded-lg transition-all">
              <FiTrash2 size={18} />
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const totalPages = Math.ceil(properties.length / propertiesPerPage);
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * propertiesPerPage;
    return properties.slice(start, start + propertiesPerPage);
  }, [properties, currentPage]);

  if (loading) return <div className="p-20 text-white text-center"><Loader /></div>;

  return (
    <div className="p-4 md:p-6 lg:p-10 bg-[#141414] min-h-screen">
      <DeleteModal
        isOpen={!!deleteId}
        onClose={() => setDeleteId(null)}
        onConfirm={handleDelete}
        isDeleting={isDeleting}
        title="this property"
      />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight">
          Properties Management
        </h1>
        <div className="w-full sm:w-auto">
          <Button variant="primary" onClick={() => console.log("Add New Clicked")}>
            + Add New Property
          </Button>
        </div>
      </div>

      <div className="w-full lg:w-[95%] xl:w-[90%] mx-auto mb-12 bg-gray-10 border border-gray-15 rounded-2xl shadow-xl overflow-visible">
        
        <div className="w-full [&_div]:shadow-none [&_div]:border-none [&_div]:bg-transparent">
          <SearchBar
            value={searchValue}
            onChange={setSearchValue}
            onSearch={() => dispatch(setSearch(searchValue))}
          />
        </div>

        <div className="p-4 md:p-6 border-t border-gray-15">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            <PropertySelect
              icon={typeIcon}
              label="Any Type"
              options={["Any Type", "Apartment", "Villa", "House", "Office"]}
              onSelect={(value) => dispatch(setFilter({ key: "propertyType", value }))}
              isOpen={openIndex === 1}
              onToggle={() => setOpenIndex(openIndex === 1 ? null : 1)}
            />

            <PropertySelect
              icon={locationIcon}
              label="Any location"
              options={["Any location", "Metropolitan", "Coastal", "Rural"]}
              onSelect={(value) => dispatch(setFilter({ key: "location", value }))}
              isOpen={openIndex === 2}
              onToggle={() => setOpenIndex(openIndex === 2 ? null : 2)}
            />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <DataTable columns={columns} data={paginatedData} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default PropertiesList;