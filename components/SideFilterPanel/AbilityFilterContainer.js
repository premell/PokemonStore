import { ABILITIES } from "@/shared/constants"

import { useRecoilState } from "recoil";
import { abilityFilter as abilityFilterAtoms } from "atoms.js";
import FilterContainer from "./FilterContainer"
import { useEffect } from "react";

const TypeFilterContainer = ({ menuVisible, handleClick }) => {
  const [abilityFilter, setAbilityFilter] = useRecoilState(abilityFilterAtoms);

  return (
    <FilterContainer menuVisible={menuVisible} handleToggleClick={handleClick} filterName="abilities" allFilters={ABILITIES} filterList={abilityFilter.abilities} setFilterList={setAbilityFilter} />
  )
}

export default TypeFilterContainer
