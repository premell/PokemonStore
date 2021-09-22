import {
  MainContainer,
  StyledInnerContainer,
  FilterToggleHeading,
  BottomDivider,
} from "./Styles.js";
import TypeFilterContainer from "./TypeFilterContainer";
import AbilityFilterContainer from "./AbilityFilterContainer";
import NumberRangeContainer from "./NumberRangeContainer";

import { useRecoilState } from "recoil";
import { priceFilter as priceFilterAtoms } from "atoms.js";
import { statsFilter as statsFilterAtoms } from "atoms.js";
import { useEffect, useState } from "react";

import { RegularText, BoldRegularText, Subheading2 } from "shared/components";

const SidePanel = () => {
  const [priceFilter, setPriceFilter] = useRecoilState(priceFilterAtoms);
  const [statsFilter, setStatsFilter] = useRecoilState(statsFilterAtoms);

  const [priceMenuVisible, setPriceMenuVisible] = useState(true);
  const [typeMenuVisible, setTypeMenuVisible] = useState(true);
  const [abilityMenuVisible, setAbilityMenuVisible] = useState(true);
  const [statsMenuVisible, setStatsMenuVisible] = useState(true);

  const handlePriceChange = (newPriceFilter, categoryName) => {
    setPriceFilter(newPriceFilter);
  };

  const handleStatsChange = (newStat, categoryName) => {
    const newStatsFilter = { ...statsFilter, [categoryName]: newStat };
    setStatsFilter(newStatsFilter);
  };

  const toggleFilterMenu = () => {};

  return (
    <MainContainer>
      <StyledInnerContainer>
        <FilterToggleHeading
          menuVisible={priceMenuVisible}
          handleClick={() => setPriceMenuVisible(!priceMenuVisible)}
        >
          Price
        </FilterToggleHeading>
        {priceMenuVisible && (
          <NumberRangeContainer
            filter={{ ...priceFilter }}
            categoryName="Price"
            currentRange={priceFilter.currentRange}
            handleChange={handlePriceChange}
          />
        )}
        <TypeFilterContainer
          menuVisible={typeMenuVisible}
          handleClick={() => setTypeMenuVisible(!typeMenuVisible)}
        />
        <AbilityFilterContainer
          menuVisible={abilityMenuVisible}
          handleClick={() => setAbilityMenuVisible(!abilityMenuVisible)}
        />
        <FilterToggleHeading
          menuVisible={statsMenuVisible}
          handleClick={() => setStatsMenuVisible(!statsMenuVisible)}
        >
          Stats
        </FilterToggleHeading>
        {statsMenuVisible &&
          Object.keys(statsFilter).map((key) => (
            <div key={key}>
              <h3>{statsFilter[key].name}</h3>
              <NumberRangeContainer
                filter={{ ...statsFilter[key] }}
                categoryName={key}
                handleChange={handleStatsChange}
                currentRange={statsFilter[key].currentRange}
              />
            </div>
          ))}
        <BottomDivider />
      </StyledInnerContainer>
    </MainContainer>
  );
};
//<PriceFilterContainer min={0} max={2500} />

export default SidePanel;
