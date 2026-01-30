import { createSelector } from "@reduxjs/toolkit";
import type { PropertyData } from "../../interfaces";

export const selectFilteredProperties = createSelector(
  [(state) => state.properties.all, (state) => state.properties.filters],
  (properties, filters) => {
    return properties.filter((property: PropertyData) => {
      const matchesSearch =
        property.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        property.location.toLowerCase().includes(filters.search.toLowerCase());

      const matchesType =
        filters.propertyType && filters.propertyType !== "Any Type"
          ? property.propertyType === filters.propertyType
          : true;

      const matchesLocation =
        filters.location && filters.location !== "Any location"
          ? property.locationType === filters.location
          : true;

      return matchesSearch && matchesType && matchesLocation;
    });
  },
);

export const selectProperty =
  (id: number) => (state: { properties: { all: PropertyData[] } }) =>
    state.properties.all.find((item: PropertyData) => item.id === id);
