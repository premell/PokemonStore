import { TYPES } from "shared/constants";

import { FilterBox, FilterToggleHeading } from "./Styles";

import { RegularText, BoldRegularText, Checkbox } from "shared/components";

import { useRecoilState } from "recoil";
import { typeFilter as typeFilterAtoms } from "atoms.js";
import { useEffect, useState } from "react";

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
    console.log(checked);
    if (!checked) addFilter(item);
    else removeFilter(item);
    console.log(checked);
  };

  const addFilter = (item) => {
    console.log("add");
    const updatedItems = [...filterList, item];
    setFilterList({ [filterName]: updatedItems, isFiltering: true });
  };
  const removeFilter = (item) => {
    console.log("remove");
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
        {filterName}
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

//onChange={(e) => handleCheckboxClick(e, FilterItem)}
//<Checkbox type="checkbox" onChange={(e) => handleClick(e, FilterItem)} FilterItem="checkbox" checked={filterList?.includes(FilterItem)} />
//<CheckBoxWithState isActive={filterList?.includes(FilterItem)} addFilter={addFilter} removeFilter={removeFilter} item={FilterItem} />

export default FilterContainer;
