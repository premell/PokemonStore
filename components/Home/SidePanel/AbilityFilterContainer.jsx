import { abilityFilter as abilityFilterAtoms } from "atoms.js";
import { useRecoilState } from "recoil";
import { ABILITIES } from "shared/constants";
import FilterContainer from "./FilterContainer";


const TypeFilterContainer = ({ menuVisible, handleClick }) => {
  const [abilityFilter, setAbilityFilter] = useRecoilState(abilityFilterAtoms);

  return (
    <FilterContainer
      menuVisible={menuVisible}
      handleToggleClick={handleClick}
      filterName="abilities"
      allFilters={ABILITIES}
      filterList={abilityFilter.abilities}
      setFilterList={setAbilityFilter}
    />
  );
};

export default TypeFilterContainer;
