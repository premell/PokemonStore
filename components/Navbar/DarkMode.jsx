import { darkThemeEnabled as darkThemeEnabledAtoms } from "atoms.js";
import React from "react";
import { BiMoon } from "react-icons/bi";
import { FiSun } from "react-icons/fi";
import { useRecoilState } from "recoil";
import { DarkmodeContainer } from "./Styles";


const DarkMode = () => {
  const [darkThemeEnabled, setDarkThemeEnabled] = useRecoilState(
    darkThemeEnabledAtoms
  );

  const handleClick = () => setDarkThemeEnabled(!darkThemeEnabled);
  return (
    <DarkmodeContainer onClick={handleClick}>
      {darkThemeEnabled ? (
        <FiSun size={30} style={{ strokeWidth: "2" }} />
      ) : (
        <BiMoon size={30} style={{ strokeWidth: "0.1" }} />
      )}
    </DarkmodeContainer>
  );
};

export default DarkMode;
