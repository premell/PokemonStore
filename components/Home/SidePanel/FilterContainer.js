import { TYPES } from "shared/constants";

import { FilterBox, FilterToggleHeading } from "./Styles";

import { RegularText, BoldRegularText, Checkbox } from "shared/components";

import { useRecoilState } from "recoil";
import { typeFilter as typeFilterAtoms } from "atoms.js";
import { useEffect, useState } from "react";

import { capitalizeFirstLetter } from "shared/javascript";

const CheckBoxWithState = ({
  isActive,
  removeFilter,
  addFilter,
  FilterItem,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = (e) => {
    setIsChecked(!isChecked);
    if (e.target.checked === true) addFilter(FilterItem);
    else removeFilter(FilterItem);
  };

  useEffect(() => {
    setIsChecked(isActive);
  }, [isActive]);

  return (
    <input
      type="checkbox"
      onClick={handleClick}
      FilterItem="checkbox"
      checked={isChecked}
    />
  );
};

const FilterContainer = ({
  menuVisible,
  handleToggleClick,
  filterName,
  allFilters,
  filterList,
  setFilterList,
}) => {
  const handleCheckboxClick = (checked, item) => {
    if (!checked) addFilter(item);
    else removeFilter(item);
  };

  const addFilter = (item) => {
    const updatedItems = [...filterList, item];
    setFilterList({ [filterName]: updatedItems, isFiltering: true });
  };
  const removeFilter = (item) => {
    const updatedItems = filterList.filter((arrayItem) => arrayItem !== item);
    let isFiltering = true;
    if (updatedItems.length === 0) isFiltering = false;
    setFilterList({ [filterName]: updatedItems, isFiltering: isFiltering });
  };

  return (
    <div>
      <FilterToggleHeading
        menuVisible={menuVisible}
        handleClick={handleToggleClick}
      >
        {capitalizeFirstLetter(filterName)}
      </FilterToggleHeading>
      {menuVisible &&
        Object.values(allFilters).map((FilterItem) => (
          <FilterBox key={FilterItem}>
            <Checkbox
              type="checkbox"
              handleClick={(checked) =>
                handleCheckboxClick(checked, FilterItem)
              }
              FilterItem="checkbox"
              checked={filterList?.includes(FilterItem)}
            />
            <p style={{ paddingLeft: "8px" }}>{FilterItem}</p>
          </FilterBox>
        ))}
    </div>
  );
};

export default FilterContainer;
