import React from "react";
import FilterByCategories from "./FilterByCategories";
import FilterByBrand from "./FilterByBrand";

const FilterSideBar = ({ handleChange }: any) => {
  return (
    <div className="absolute px-8 top-14 left-0 bg-white  z-10 w-64 shadow-lg rounded-b-lg">
      <FilterByCategories handleChange={handleChange} />
      {/* <FilterByBrand /> */}
    </div>
  );
};

export default FilterSideBar;
