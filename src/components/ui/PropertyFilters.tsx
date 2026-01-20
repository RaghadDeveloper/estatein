import { useState } from "react";
import SearchBar from "./SearchBar";
import PropertySelect from "./PropertySelect";
import { filters } from "../../data/propertiesData";

const PropertyFilters = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeFilters, setActiveFilters] = useState<Record<string, string>>(
    {}
  );

  const handleFilterChange = (filterLabel: string, value: string): void => {
    setActiveFilters((prev) => ({
      ...prev,
      [filterLabel]: value,
    }));
  };

  const handleSearch = (): void => {
    console.log("Search Data:", { searchQuery, activeFilters });
  };

  return (
    <div className="w-full lg:absolute -top-15 2xl:-top-18">
      <div className="mx-auto lg:mx-20 2xl:mx-40.5 p-4 flex flex-col items-center">
        <div className="w-full md:w-[96%] lg:w-[85%] z-10">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            onSearch={handleSearch}
          />
        </div>

        <div className="w-full mt-3 lg:mt-0 bg-gray-10 border-x border-b border-gray-15 md:border-t-0 p-4 md:p-2.5 rounded-xl md:rounded-b-2xl shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {filters.map((f, i) => (
              <PropertySelect
                key={i}
                label={f.label}
                icon={f.icon}
                options={f.options}
                onSelect={(value: string) => handleFilterChange(f.label, value)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyFilters;
