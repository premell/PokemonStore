import { TYPES } from "@/shared/constants"

import { FilterBox, Checkbox, FilterToggleHeading } from "./Styles"

import { RegularText, BoldRegularText } from "shared/components"

import { useRecoilState } from "recoil";
import { typeFilter as typeFilterAtoms } from "atoms.js";
import { useEffect, useState } from "react";


const CheckBoxWithState = ({ isActive, addItem, removeItem, FilterItem }) => {

  const [isChecked, setIsChecked] = useState(false)

  const handleClick = (e) => {
    setIsChecked(!isChecked)
    if (e.target.checked === true) removeItem(FilterItem)
    else addItem(FilterItem)
  }

  useEffect(() => {
    setIsChecked(isActive)
  }, [isActive])

  return (
    <input type="checkbox" onClick={handleClick} FilterItem="checkbox" checked={isChecked} />
  )
}

const FilterContainer = ({ menuVisible, handleToggleClick, filterName, allFilters, filterList, setFilterList }) => {

  const handleCheckboxClick = (e, item) => {
    if (e.target.checked === true) removeItem(item)
    else addItem(item)
  }

  const removeItem = (item) => {
    const updatedItems = [...filterList, item]
    setFilterList({ [filterName]: updatedItems, isFiltering: true })
  }
  const addItem = (item) => {
    const updatedItems = filterList.filter((arrayItem) => arrayItem !== item)
    let isFiltering = true
    if (updatedItems.length === 0) isFiltering = false
    setFilterList({ [filterName]: updatedItems, isFiltering: isFiltering })
  }

  return (
    <div>

      <FilterToggleHeading menuVisible={menuVisible} handleClick={handleToggleClick}>{filterName}</FilterToggleHeading>
      {menuVisible && Object.values(allFilters).map((FilterItem) =>
        <FilterBox key={FilterItem}>
          <Checkbox type="checkbox" onChange={(e) => handleCheckboxClick(e, FilterItem)} FilterItem="checkbox" checked={filterList?.includes(FilterItem)} />
          <RegularText style={{ paddingLeft: "8px" }}>{FilterItem}</RegularText>
        </FilterBox>)}
    </div>
  )

}
//<Checkbox type="checkbox" onChange={(e) => handleClick(e, FilterItem)} FilterItem="checkbox" checked={filterList?.includes(FilterItem)} />
//<CheckBoxWithState isActive={filterList?.includes(FilterItem)} removeItem={removeItem} addItem={addItem} item={FilterItem} />

export default FilterContainer
