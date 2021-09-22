import { TYPES } from "shared/constants"

import { useRecoilState } from "recoil";
import { typeFilter as typeFilterAtoms } from "atoms.js";
import FilterContainer from "./FilterContainer"
import { useEffect } from "react";

const TypeFilterContainer = ({ menuVisible, handleClick }) => {
  const [typeFilter, setTypeFilter] = useRecoilState(typeFilterAtoms);


  return (
    <FilterContainer menuVisible={menuVisible} handleToggleClick={handleClick} filterName="types" allFilters={TYPES} filterList={typeFilter.types} setFilterList={setTypeFilter} />
  )
}

export default TypeFilterContainer
