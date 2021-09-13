import { useRecoilState, useResetRecoilState } from "recoil";
import { priceFilter as priceFilterAtoms } from "atoms.js";
import { statsFilter as statsFilterAtoms } from "atoms.js";
import { typeFilter as typeFilterAtoms } from "atoms.js";
import { abilityFilter as abilityFilterAtoms } from "atoms.js";

import {
  PriceFilterFlair,
  NumberFilterFlair,
  FilterBox,
  Cross,
  AbilityFilterFlair,
  StyledFilterContainer,
  RemoveAllFilters,
} from "./Styles";
import { TypeFlair } from "shared/components";
import { useEffect } from "react";

import { formatAsUSDWithoutTrailingZeros } from "shared/javascript";

const FilterPanel = () => {
  const [priceFilter, setPriceFilter] = useRecoilState(priceFilterAtoms);
  const [statsFilter, setStatsFilter] = useRecoilState(statsFilterAtoms);
  const [typeFilter, setTypeFilter] = useRecoilState(typeFilterAtoms);
  const [abilityFilter, setAbilityFilter] = useRecoilState(abilityFilterAtoms);

  const defaultPriceFilter = useResetRecoilState(priceFilterAtoms);
  const defaultStatsFilter = useResetRecoilState(statsFilterAtoms);
  const defaultTypeFilter = useResetRecoilState(typeFilterAtoms);
  const defaultAbilityFilter = useResetRecoilState(abilityFilterAtoms);
  const removeAllFilters = () => {
    defaultPriceFilter();
    defaultStatsFilter();
    defaultTypeFilter();
    defaultAbilityFilter();
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

  const getIsAnyFilterActive = () => {
    let isActive = false;
    if (abilityFilter.isFiltering) isActive = true;
    else if (typeFilter.isFiltering) isActive = true;
    else if (priceFilter.isFiltering) isActive = true;

    Object.keys(statsFilter).forEach((key) => {
      if (statsFilter[key].isFiltering) isActive = true;
    });
    return isActive;
  };

  const isAnyFilterActive = getIsAnyFilterActive();

  //return <RegularText style={{ margin: 0 }}>{`Price: ${formatAsUSDWithoutTrailingZeros(min)} - ${formatAsUSDWithoutTrailingZeros(max)}`}</RegularText>
  //<Cross handleClick={removePrice} />
  return (
    <StyledFilterContainer>
      {priceFilter.isFiltering && (
        <FilterBox
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
          <FilterBox
            key={type}
            handleClick={() => removeType(type)}
            text={type}
          />
        ))}
      {abilityFilter.isFiltering &&
        abilityFilter.abilities.map((ability) => (
          <FilterBox
            key={ability}
            handleClick={() => removeAbility(ability)}
            text={ability}
          />
        ))}
      {Object.keys(statsFilter).map((key) => {
        if (statsFilter[key].isFiltering)
          return (
            <FilterBox
              key={key}
              handleClick={() => removeStat(key)}
              text={`${statsFilter[key].name}: ${statsFilter[key].currentRange.min} - ${statsFilter[key].currentRange.max}`}
            />
          );
      })}
      {isAnyFilterActive ? (
        <RemoveAllFilters handleClick={removeAllFilters} />
      ) : null}
    </StyledFilterContainer>
  );
};
// <FilterBox key={key}><NumberFilterFlair min={statsFilter[key].currentRange.min}
//   max={statsFilter[key].currentRange.max} name={statsFilter[key].name} /> <Cross handleClick={() => removeStat(key)} /></FilterBox>
// )

export default FilterPanel;
