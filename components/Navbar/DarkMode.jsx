import React from "react";
import { BiMoon } from "react-icons/bi";
import { FiSun } from "react-icons/fi";

import { DarkmodeContainer } from "./Styles";

import { useRecoilState } from "recoil";
import { darkThemeEnabled as darkThemeEnabledAtoms } from "atoms.js";
const DarkMode = () => {
  const [darkThemeEnabled, setDarkThemeEnabled] = useRecoilState(
    darkThemeEnabledAtoms
  );

  const handleClick = () => setDarkThemeEnabled(!darkThemeEnabled);
  return (
    <DarkmodeContainer onClick={handleClick}>
      {darkThemeEnabled ? <FiSun size={30} /> : <BiMoon size={30} />}
    </DarkmodeContainer>
  );
};

export default DarkMode;
