import styled, { css } from "styled-components";

import { formatAsUSDWithoutTrailingZeros } from "@/shared/javascript";

import { RegularText, BoldRegularText } from "shared/components";
import { AiOutlineClose } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import { useClickOutside } from "shared/hooks";
import { useEffect, useRef, useState } from "react";

import Portal from "components/Portal";

const StyledContainer = styled.div`
  max-width: 1600px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-sizing: border-box;
`;
//overflow: hidden;

const OuterContainer = styled.div`
  max-width: 1600px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  background-color: ${(p) => p.theme.colors.gray_10};
`;

export const Container = ({ children }) => {
  return (
    <OuterContainer>
      <StyledContainer>{children}</StyledContainer>
    </OuterContainer>
  );
};

export const PokemonContainer = styled.div`
  width: calc(100vw - 300px);
  max-width: 1600px;
  height: 100%;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
`;

export const StyledPokemonCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 330px;
  background-color: ${(p) => p.theme.colors.gray_0};
  margin: 0px 12px 12px 0px;
  border-radius: 12px;

  position: relative;
`;
const StyledFilterBox = styled.div`
  display: flex;
  height: 30px;
  align-items: center;
  justify-content: center;
  margin: 8px 8px 0px 0px;
  background-color: ${(p) => p.theme.colors.gray_20};
  padding: 6px 8px 6px 12px;
  border-radius: 4px;
  box-sizing: border-box;

  cursor: pointer;
  &:hover {
    background-color: ${(p) => p.theme.colors.gray_40};
  }
`;

export const FilterBox = ({ handleClick, text }) => {
  return (
    <StyledFilterBox onClick={handleClick}>
      <p style={{ position: "relative" }}>{text}</p>
      <p>
        <Cross />
      </p>
    </StyledFilterBox>
  );
};

export const TypeContainer = styled.div`
  display: flex;
`;

export const StyledPokemonMain = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover img {
    transform: scale(1.15);
  }
`;

const StyledCross = styled.p`
  margin-left: 10px;
  display: flex;
  align-items: center;
  color: ${(p) => p.theme.colors.gray_80};
`;

export const Cross = ({ handleClick }) => {
  return (
    <StyledCross onClick={handleClick}>
      <AiOutlineClose />
    </StyledCross>
  );
};

const StyledPriceFilterFlair = styled.div``;

export const PriceFilterFlair = ({ min, max }) => {
  return (
    <RegularText
      style={{ margin: 0 }}
    >{`Price: ${formatAsUSDWithoutTrailingZeros(
      min
    )} - ${formatAsUSDWithoutTrailingZeros(max)}`}</RegularText>
  );
};

export const NumberFilterFlair = ({ min, max, name }) => {
  return (
    <StyledPriceFilterFlair style={{ margin: 0 }}>
      <p>{`${name}: ${min} - ${max}`}</p>
    </StyledPriceFilterFlair>
  );
};

const StyledAbilityFilterFlair = styled.div``;
export const AbilityFilterFlair = ({ ability }) => {
  return (
    <StyledAbilityFilterFlair>
      <p>{ability}</p>
    </StyledAbilityFilterFlair>
  );
};

const StyledPageArrow = styled.div`
  cursor: pointer;

  &:hover {
    background-color: ${(p) => p.theme.colors.gray_40};
  }
`;

export const PrevPageArrow = ({ handleClick }) => {
  return (
    <StyledPageArrow onClick={handleClick}>
      <IoIosArrowBack />
    </StyledPageArrow>
  );
};
export const NextPageArrow = ({ handleClick }) => {
  return (
    <StyledPageArrow onClick={handleClick}>
      <IoIosArrowForward />
    </StyledPageArrow>
  );
};
export const PageNumber = styled.div`
  cursor: pointer;
  &:hover {
    background-color: ${(p) => p.theme.colors.gray_40};
  }
  background-color: ${(p) => p.isActive && p.theme.colors.aqua_blue};
  color: ${(p) => p.isActive && "white"};
  margin: 0 8px;
  padding: 8px;
`;

export const PageNavigatorContainer = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const DropdownItem = styled.div`
  display: flex;
  padding: 6px 12px;
  align-items: center;
  margin: 0px;
  width: 100%;
  height: 32px;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    background-color: ${(p) =>
      p.inlist ? p.theme.colors.aqua_blue : p.theme.colors.gray_40};
  }
`;

const DropdownList = styled.div`
  width: 100%;
  top: 32px;
  left: 0px;
  position: absolute;
  background-color: ${(p) => p.theme.colors.gray_90};
  color: white;
  z-index: 30;
`;

export const Dropdown = ({
  labelPrefix,
  defaultSelected,
  list,
  handleChange,
}) => {
  const [selected, setSelected] = useState({});
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdown = useRef(null);

  const handleClickOutside = () => setShowDropdown(false);
  useClickOutside(dropdown, handleClickOutside);

  useEffect(() => {
    // console.log(defaultSelected)
    setSelected(defaultSelected);
  }, [defaultSelected]);

  const handleNewSelected = (value) => {
    const newItem = list.find((item) => item.value === value);
    handleChange(newItem.value);
    setSelected(newItem);
    setShowDropdown(false);
  };

  // useEffect(() => {
  //   console.log(
  //     selected
  //   )
  // }, [selected])

  return (
    <div style={{ marginLeft: "12px", position: "relative" }} ref={dropdown}>
      <DropdownItem onClick={() => setShowDropdown(!showDropdown)}>
        <p>
          {labelPrefix}
          {selected.label}
        </p>
        <RiArrowDropDownLine size={20} />
      </DropdownItem>
      <DropdownList>
        {showDropdown
          ? list.map((item) => (
              <DropdownItem
                inlist
                key={item.label}
                onClick={() => handleNewSelected(item.value)}
              >
                <p>{item.label}</p>
              </DropdownItem>
            ))
          : null}
      </DropdownList>
    </div>
  );
};

export const StyledFilterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const StyledRemoveAllFilters = styled.div`
  cursor: pointer;
  margin: 8px 8px 0px 10px;

  box-sizing:border-box;
  transition: color 0.4s;
  transition: background-color 0.4s;
  padding: 0px 16px;
  height:30px;
  display:flex;
  align-items:center;

  border-radius: 4px;
  &:hover{
    background-color ${(p) => p.theme.colors.aqua_blue};
    color: white; 
  }
`;

export const RemoveAllFilters = ({ handleClick }) => {
  return (
    <StyledRemoveAllFilters onClick={handleClick}>
      <p>Clear all filters</p>
    </StyledRemoveAllFilters>
  );
};

export const ViewPanelContainer = styled.div`
  width: 100%;
  display: flex;
`;
export const DropdownContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  & * {
  }
`;

const StyledNoPokemonFound = styled.div`
  max-width: 1600px;
  width: calc(100vw - 300px);
  height: 800px;
  display: flex;
  justify-content: center;
  padding-top: 15%;
`;

export const NoPokemonFound = () => {
  return (
    <StyledNoPokemonFound>
      <BoldRegularText style={{ height: "50px" }}>
        No pokemon were found
      </BoldRegularText>
    </StyledNoPokemonFound>
  );
};

export const ScrollToTopButton = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${(p) => p.theme.colors.aqua_blue};
  border-radius: 50%;

  z-index: 400;
  top: 85%;
  left: 90%;

  position: sticky;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  color: white;

  &:hover {
    background-color: ${(p) => p.theme.colors.dark_aqua_blue};
  }
`;
//position: sticky;

export const HeartContainer = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
`;

// import styled, { css } from "styled-components"
//
// import { formatAsUSDWithoutTrailingZeros } from "@/shared/javascript"
//
// import { RegularText, BoldRegularText } from "shared/components"
// import { AiOutlineClose } from "react-icons/ai"
// import { RiArrowDropDownLine } from "react-icons/ri"
// import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"
//
// import { useClickOutside } from "shared/hooks"
// import { useEffect, useRef, useState } from "react"
//
// const StyledContainer = styled.div`
//   width: 95%;
//   height: 100%;
//   display: flex;
//   flex-direction:column;
//   padding: 10px;
// `
// const OuterContainer = styled.div`
//   width:100%;
//   display:flex;
//   justify-content:flex-start;
//   background-color: ${p => p.theme.colors.gray_10};
// `
//
// export const Container = ({ children }) => {
//
//   return (
//     <OuterContainer>
//       <StyledContainer >
//         {children}
//       </StyledContainer >
//     </OuterContainer>
//   )
//
// }
//
// export const PokemonContainer = styled.div`
//   min-height:800px;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-wrap:wrap;
// `
//
// export const StyledPokemonCard = styled.div`
//   display:flex;
//   flex-direction: column;
//   align-items:center;
//   width: 300px;
//   height: 330px;
//   background-color: ${p => p.theme.colors.gray_0};
//   margin: 0px 12px 12px 0px;
//   border-radius:12px;
//
// `
// const StyledFilterBox = styled.div`
//   display: flex;
//   height: 30px;
//   align-items:center;
//   justify-content:center;
//   margin: 8px 8px 0px 0px;
//   background-color: ${p => p.theme.colors.gray_20};
//   padding: 6px 8px 6px 12px;
//   border-radius:4px;
//   box-sizing:border-box;
//
//   cursor:pointer;
//   &:hover{
//   background-color: ${p => p.theme.colors.gray_40};
//   }
// `
//
// export const FilterBox = ({ handleClick, text }) => {
//
//   return (
//     <StyledFilterBox onClick={handleClick}>
//       <p style={{ position: "relative" }}>
//         {text}
//       </p>
//       <p>
//         <Cross />
//       </p>
//     </StyledFilterBox>
//   )
// }
//
// export const TypeContainer = styled.div`
//  display: flex;
// `
//
// export const StyledPokemonMain = styled.div`
//   cursor:pointer;
//   display: flex;
//   flex-direction:column;
//   justify-content:center;
//   align-items:center;
//
//   &:hover img{
//     transform: scale(1.15);
//   }
// `
//
// const StyledCross = styled.p`
//   margin-left:10px;
//   display:flex;
//   align-items:center;
//   color: ${p => p.theme.colors.gray_80};
//
// `
//
// export const Cross = ({ handleClick }) => {
//   return <StyledCross onClick={handleClick}><AiOutlineClose /></StyledCross>
//
// }
//
// const StyledPriceFilterFlair = styled.div`
// `
//
// export const PriceFilterFlair = ({ min, max }) => {
//   return <RegularText style={{ margin: 0 }}>{`Price: ${formatAsUSDWithoutTrailingZeros(min)} - ${formatAsUSDWithoutTrailingZeros(max)}`}</RegularText>
// }
//
// export const NumberFilterFlair = ({ min, max, name }) => {
//   return <StyledPriceFilterFlair style={{ margin: 0 }}><p>{`${name}: ${min} - ${max}`}</p></StyledPriceFilterFlair>
// }
//
// const StyledAbilityFilterFlair = styled.div`
//
// `
// export const AbilityFilterFlair = ({ ability }) => {
//   return <StyledAbilityFilterFlair><p>{ability}</p></StyledAbilityFilterFlair>
// }
//
// const StyledPageArrow = styled.div`
//
//   cursor:pointer;
//
//   &:hover{
//   background-color: ${p => p.theme.colors.gray_40};
//   }
// `
//
// export const PrevPageArrow = ({ handleClick }) => {
//   return (
//     <StyledPageArrow onClick={handleClick}>
//       <IoIosArrowBack />
//     </StyledPageArrow>
//   )
// }
// export const NextPageArrow = ({ handleClick }) => {
//   return (
//     <StyledPageArrow onClick={handleClick}>
//       <IoIosArrowForward />
//     </StyledPageArrow>
//   )
// }
// export const PageNumber = styled.div`
//   cursor:pointer;
//   &:hover{
//   background-color: ${p => p.theme.colors.gray_40};
//   }
//   background-color: ${p => p.isActive && p.theme.colors.aqua_blue};
//   color: ${p => p.isActive && 'white'};
//   margin: 0 8px;
//   padding:8px;
// `
//
// export const PageNavigatorContainer = styled.div`
//   width: 100%;
//   height: 50px;
//
//   display:flex;
//   justify-content:center;
//   align-items:center;
// `
//
// const DropdownItem = styled.div`
//   display:flex;
//   padding: 6px 12px;
//   align-items:center;
//   margin:0px;
//   width:100%;
//   height:32px;
//   cursor:pointer;
//   box-sizing:border-box;
//
//   &:hover{
//   background-color: ${p => p.inlist ? p.theme.colors.aqua_blue : p.theme.colors.gray_40}
//   }
// `
//
// const DropdownList = styled.div`
//   width:100%;
//   top:32px;
//   left:0px;
//   position:absolute;
//   background-color: ${p => p.theme.colors.gray_90};
//   color:white;
//   z-index:30;
// `
//
// export const Dropdown = ({ labelPrefix, defaultSelected, list, handleChange }) => {
//   const [selected, setSelected] = useState({})
//   const [showDropdown, setShowDropdown] = useState(false)
//   const dropdown = useRef(null)
//
//   const handleClickOutside = () => setShowDropdown(false)
//   useClickOutside(dropdown, handleClickOutside)
//
//   useEffect(() => {
//     console.log(defaultSelected)
//     setSelected(defaultSelected)
//   }, [defaultSelected])
//
//
//   const handleNewSelected = (value) => {
//     const newItem = list.find((item) => item.value === value)
//
//     handleChange(newItem.value)
//     setSelected(newItem)
//     setShowDropdown(false)
//   }
//
//
//   return (
//     <div style={{ marginLeft: "12px", position: "relative" }} ref={dropdown}>
//       <DropdownItem onClick={() => setShowDropdown(!showDropdown)}><p>{labelPrefix}{selected.label}</p><RiArrowDropDownLine size={20} /></DropdownItem>
//       <DropdownList>
//         {showDropdown ? list.map((item) => <DropdownItem inlist key={item.label} onClick={() => handleNewSelected(item.value)}><p>{item.label}</p></DropdownItem>) : null}
//       </DropdownList>
//     </div>
//   )
// }
//
// export const StyledFilterContainer = styled.div`
//   display: flex;
//   align-items:center;
//   margin-bottom: 12px;
// `
//
// const StyledRemoveAllFilters = styled.div`
//   cursor: pointer;
//   margin: 8px 8px 0px 10px;
//
//   box-sizing:border-box;
//   transition: color 0.4s;
//   transition: background-color 0.4s;
//   padding: 0px 16px;
//   height:30px;
//   display:flex;
//   align-items:center;
//
//   border-radius: 4px;
//   &:hover{
//     background-color ${p => p.theme.colors.aqua_blue};
//     color: white;
//   }
// `
//
// export const RemoveAllFilters = ({ handleClick }) => {
//
//
//   return (
//     <StyledRemoveAllFilters onClick={handleClick}>
//       <p>
//         Clear all filters
//       </p>
//     </StyledRemoveAllFilters>
//   )
// }
//
// export const ViewPanelContainer = styled.div`
//   width:100%;
//   display:flex;
// `
// export const DropdownContainer = styled.div`
//   width:80%;
//   display:flex;
//   align-items:center;
//   justify-content:flex-end;
//
//   & *{
//   }
//
// `
//
// const StyledNoPokemonFound = styled.div`
//   width: 100%;
// height:800px;
// display:flex;
//   align-items:center;
//   justify-content:center;
// `
//
// export const NoPokemonFound = () => {
//
//   return (
//     <StyledNoPokemonFound>
//       <BoldRegularText>
//         No pokemon were found
//       </BoldRegularText>
//     </StyledNoPokemonFound>
//   )
//
// }
