import { useEffect, useState, useRef } from "react";
import * as S from "./Styles";
import { BiSearch } from "react-icons/bi";

import { useRecoilState } from "recoil";
import { searchQuery as searchQueryAtoms } from "atoms.js";

import { StyledSearchBar } from "../Styles";

const SearchBar = () => {
  const [localSearchQuery, setlocalSearchQuery] = useState("");
  const [searchQuery, setSearchQuery] = useRecoilState(searchQueryAtoms);

  const handleChange = (e) => {
    setlocalSearchQuery(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => setSearchQuery(localSearchQuery), 150);
    return () => clearTimeout(timer);
  }, [localSearchQuery]);

  useEffect(() => {
    setlocalSearchQuery(searchQuery);
  }, [searchQuery]);

  const searchField = useRef();
  const handleClick = () => {
    searchField.current.focus();
  };

  return (
    <S.SearchBar>
      <S.Input
        ref={searchField}
        type="text"
        value={localSearchQuery}
        onChange={handleChange}
      />
      <BiSearch size={24} onClick={handleClick} style={{ cursor: "pointer" }} />
    </S.SearchBar>
  );
};

export default SearchBar;
