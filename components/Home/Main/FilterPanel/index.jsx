import { useRecoilState, useResetRecoilState } from "recoil";
import { priceFilter as priceFilterAtoms } from "atoms.js";
import { statsFilter as statsFilterAtoms } from "atoms.js";
import { typeFilter as typeFilterAtoms } from "atoms.js";
import { abilityFilter as abilityFilterAtoms } from "atoms.js";
import { searchQuery as searchQueryAtoms } from "atoms.js";
import { anyFilterActive as anyFilterActiveAtoms } from "atoms.js";

// import {
//   PriceFilterFlair,
//   NumberFilterFlair,
//   FilterBox,
//   Cross,
//   AbilityFilterFlair,
//   StyledFilterContainer,
//   RemoveAllFilters,
// } from "./Styles";
import { TypeFlair } from "shared/components";
import { useEffect } from "react";

import { formatAsUSDWithoutTrailingZeros } from "shared/javascript";
import * as S from "./Styles";

const FilterPanel = () => {
  const [priceFilter, setPriceFilter] = useRecoilState(priceFilterAtoms);
  const [statsFilter, setStatsFilter] = useRecoilState(statsFilterAtoms);
  const [typeFilter, setTypeFilter] = useRecoilState(typeFilterAtoms);
  const [abilityFilter, setAbilityFilter] = useRecoilState(abilityFilterAtoms);
  const [searchQuery, setSearchQuery] = useRecoilState(searchQueryAtoms);

  const [anyFilterActive, setAnyFilterActive] =
    useRecoilState(anyFilterActiveAtoms);

  const defaultPriceFilter = useResetRecoilState(priceFilterAtoms);
  const defaultStatsFilter = useResetRecoilState(statsFilterAtoms);
  const defaultTypeFilter = useResetRecoilState(typeFilterAtoms);
  const defaultAbilityFilter = useResetRecoilState(abilityFilterAtoms);
  const defaultSearchQuery = useResetRecoilState(searchQueryAtoms);
  const removeAllFilters = () => {
    defaultPriceFilter();
    defaultStatsFilter();
    defaultTypeFilter();
    defaultAbilityFilter();
    defaultSearchQuery();
  };

  const removePrice = () => {
    //setPriceFilter({ ...priceFilter, currentRange: { min: 0, max: 2500 }, isFiltering: false })
    defaultPriceFilter();
  };

  const removeStat = (stat) => {
    setStatsFilter((statsFilter) => ({
      ...statsFilter,
      [stat]: {
        ...statsFilter[stat],
        currentRange: statsFilter[stat].range,
        isFiltering: false,
      },
    }));
  };

  const removeType = (type) => {
    const updatedTypes = typeFilter.types.filter(
      (arrayType) => arrayType !== type
    );
    let isFiltering = true;
    if (updatedTypes.length === 0) isFiltering = false;
    setTypeFilter({ types: updatedTypes, isFiltering: isFiltering });
  };

  const removeAbility = (ability) => {
    const updatedAbilities = abilityFilter.abilities.filter(
      (arrayAbility) => arrayAbility !== ability
    );
    let isFiltering = true;
    if (updatedAbilities.length === 0) isFiltering = false;
    setAbilityFilter({ abilities: updatedAbilities, isFiltering: isFiltering });
  };

  const removeSearchQuery = () => {
    defaultSearchQuery();
  };

  return (
    <S.FilterContainer>
      {priceFilter.isFiltering && (
        <S.FilterBox
          handleClick={removePrice}
          text={`Price: ${formatAsUSDWithoutTrailingZeros(
            priceFilter.currentRange.min
          )} - ${formatAsUSDWithoutTrailingZeros(
            priceFilter.currentRange.max
          )}`}
        />
      )}
      {typeFilter.isFiltering &&
        typeFilter.types.map((type) => (
          <S.FilterBox
            key={type}
            handleClick={() => removeType(type)}
            text={type}
          />
        ))}
      {abilityFilter.isFiltering &&
        abilityFilter.abilities.map((ability) => (
          <S.FilterBox
            key={ability}
            handleClick={() => removeAbility(ability)}
            text={ability}
          />
        ))}
      {searchQuery.length !== 0 && (
        <S.FilterBox
          handleClick={removeSearchQuery}
          text={searchQuery.toLowerCase()}
        />
      )}
      {Object.keys(statsFilter).map((key) => {
        if (statsFilter[key].isFiltering)
          return (
            <S.FilterBox
              key={key}
              handleClick={() => removeStat(key)}
              text={`${statsFilter[key].name}: ${statsFilter[key].currentRange.min} - ${statsFilter[key].currentRange.max}`}
            />
          );
      })}
      {anyFilterActive ? (
        <S.RemoveAllFilters handleClick={removeAllFilters} />
      ) : null}
    </S.FilterContainer>
  );
};
// <FilterBox key={key}><NumberFilterFlair min={statsFilter[key].currentRange.min}
//   max={statsFilter[key].currentRange.max} name={statsFilter[key].name} /> <Cross handleClick={() => removeStat(key)} /></FilterBox>
// )

export default FilterPanel;
