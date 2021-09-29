import { typeFilter as typeFilterAtoms } from "atoms.js";
import { useRecoilState } from "recoil";
import { TYPES } from "shared/constants";
import FilterContainer from "./FilterContainer";


const TypeFilterContainer = ({ menuVisible, handleClick }) => {
  const [typeFilter, setTypeFilter] = useRecoilState(typeFilterAtoms);

  return (
    <FilterContainer
      menuVisible={menuVisible}
      handleToggleClick={handleClick}
      filterName="types"
      allFilters={TYPES}
      filterList={typeFilter.types}
      setFilterList={setTypeFilter}
    />
  );
};

export default TypeFilterContainer;
