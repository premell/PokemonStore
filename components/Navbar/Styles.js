import styled, { css } from "styled-components"
import Image from "next/image"
import Link from 'next/link'

import { RegularText, BoldRegularText, Subheading2, Button } from "shared/components"
import TypeFlair from "shared/TypeFlair"

import { RiDeleteBinLine } from "react-icons/ri"
import { BiSearch } from "react-icons/bi"

import { formatAsUSDWithoutTrailingZeros } from "shared/javascript"

import { useCartModal } from "shared/hooks"
import { useRouter } from 'next/router'
import { useRef } from "react"

export const MainContainer = styled.div`
  width:100%;
  top:0;
  position:fixed; 
  display: flex;
  justify-content:center;
  z-index:400;
  padding: 0px 24px;
  height: 76px;
  background-color: ${p => p.theme.colors.gray_0};
`
export const ContentContainer = styled.div`
  padding-left:24px;
  width:100%;
  height:100%;
  max-width:1900px;
  display: flex;
  align-items:center;
  box-sizing:border-box;
`
//background-color: ${p => p.theme.colors.gray_0};

export const LeftSubContainer = styled.div`
  flex: 3;
  display: flex;
  align-items:center;
  justify-content:flex-start;
`

const StyledHideAnimationContainer = styled.div`
  flex: 2;
  transform-style: preserve-3d;
`
const WhiteBox = styled.div`
  background-color:white;
  height: 80px; 
  width:800px;
  position:absolute;
  top:-60px;
`

export const HideAnimationContainer = ({ children }) => {

  return (
    <StyledHideAnimationContainer>
      <WhiteBox />
      {children}
    </StyledHideAnimationContainer>
  )
}

export const RightSubContainer = styled.div`
  display: flex;
  background-color:white;
  align-items:center;
  justify-content:flex-end;
  transform-style: preserve-3d;
`

const SearchBarContainer = styled.div`
  width: 500px;
  height: 45px; 
  margin-left: 24px;

  border-radius: 4px; 
  padding: 8px 10px 8px 16px;
  box-sizing: border-box;
  border: ${p => `1px solid ${p.theme.colors.gray_40}`};

  background-color: ${p => p.theme.colors.gray_10};

  display: flex;
  align-items:center;

  transition: border-color 0.2s; 
  &:hover{
    border-color: ${p => p.theme.colors.gray_60};
  }
`
//border: ${p => `1px solid ${p.theme.colors.gray_40}`}
const StyledInput = styled.input`
  background-color: ${p => p.theme.colors.gray_10};
  width: 100%;
  height: 100%;
  cursor: text;
  outline:none; 
  border:none;
`

export const StyledSearchBar = ({ value, handleChange }) => {

  const searchField = useRef()

  const handleClick = () => {
    searchField.current.focus()
  }
  return (
    <SearchBarContainer >
      <StyledInput ref={searchField} type="text" value={value} onChange={handleChange} />
      <BiSearch size={24} onClick={handleClick} style={{ cursor: "pointer" }} />
    </SearchBarContainer >
  )

}

export const StyledCartButton = styled.div`
  position:relative;
  height: 51px;
  width: 130px;
  margin-right:50px;

  display: flex; 
  align-items: center;
  justify-content: space-between;

  font-size: ${p => p.theme.font_size.regular};
  cursor:pointer;

  & *{
  padding: 3px;
  }
`

export const StyledCartModal = styled.div`
  transform: translateZ(-10px);
  position:absolute;
  border-radius: 10px;
  width:400px;
  left: -250px;
  top:-640px;
  background-color: white; 
  padding-top:60px;

  transition: top 0.3s ease-out;
  visibility: ${p => p.show ? 'visible' : 'hidden'}; 
   ${p => p.showWithAnimation && css`
     top:-10px;
   `};
`

const StyledModalPokemonCard = styled.div`
  display:flex;
  padding-left:20px;
`

const PokemonInformation = styled.div`
  cursor:pointer;
  width:200px;
  display:flex;
  flex-direction:column;
  align-items:center;

`

const TypeContainer = styled.div`

  display:flex;

`

const IconContainer = styled.div`
  margin-top: 30px;
  margin-right: 20px;
  cursor:pointer;
  &:hover{
    color:red;
  }
`

export const ModalPokemonCard = ({ pokemon, handleRouteClick, handleDeleteClick }) => {

  const { image_url, name, types, price } = pokemon

  return (
    <StyledModalPokemonCard>
      <div style={{ cursor: "pointer" }}>
        <Image onClick={handleRouteClick} quality={100} width={150} height={150} src={image_url} />
      </div>
      <PokemonInformation onClick={handleRouteClick}>
        <BoldRegularText>
          {name}
        </BoldRegularText>
        <TypeContainer>
          {types.map((type) => <TypeFlair key={type} type={type} />)}
        </TypeContainer>
        <BoldRegularText>{formatAsUSDWithoutTrailingZeros(price)}</BoldRegularText>
      </PokemonInformation>
      <div>
        <IconContainer>
          <RiDeleteBinLine size={23} onClick={() => handleDeleteClick(pokemon)} />
        </IconContainer>
      </div>
    </StyledModalPokemonCard>
  )
}

export const ModalPokemonCartContainer = styled.div`
  overflow-y: scroll;
  max-height:500px;
  scrollbar-color: transparent transparent;

  &: hover{
  scrollbar-color: ${p => p.theme.colors.gray_60} transparent; 
  `

const StyledModalPokemonCartFooter = styled.div`
    margin: 0 20px;
    margin-bottom: 20px;
    display:flex;
  flex-direction:column;
`

const StyledFooterTotal = styled.div`

    margin: 0 30px;
    display:flex;
    justify-content:space-between;

`
export const ModalPokemonCartFooter = ({ children, handleClick }) => {

  const { hideWithTimer, hideTemporarly, hideInstantly } = useCartModal()

  const router = useRouter()
  const handleGoToCart = () => {
    router.push("/cart")
  }

  return (
    <StyledModalPokemonCartFooter>
      <StyledFooterTotal>
        {children}
      </StyledFooterTotal>
      <Button handleClick={handleGoToCart} type="positive" innerText="Go to cart" width="100%" height="40px" />
    </StyledModalPokemonCartFooter >
  )
}

const StyledNoPokemon = styled.div`
        margin-top:20px;
        height:70px;
        width: 100%;
        display: flex;
        align-items:center;
        justify-content:center;
        `

export const NoPokemonFoundContainer = ({ children }) => {

  return (
    <StyledNoPokemon>
      <Subheading2>
        {children}
      </Subheading2>
    </StyledNoPokemon>
  )
}
