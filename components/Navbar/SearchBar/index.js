import { useEffect, useState } from "react";

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

  return (
    <StyledSearchBar value={localSearchQuery} handleChange={handleChange} />
  );
};

export default SearchBar;
