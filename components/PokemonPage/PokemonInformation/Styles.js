import styled, { css } from "styled-components";
import { STATS } from "shared/constants";

export const StyledPokemonInformation = styled.div`
  background-color: ${(p) => p.theme.colors.gray_0};
  border-radius: 20px;
  padding: 15px 0px 15px 30px;
  margin-bottom: 20px;

  @media (max-width: 650px) {
    margin-top: 30px;
  }
`;

export const ItemContainer = styled.div`
  width: 330px;
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;

  & * {
    margin: 10px;
  }
`;

export const Ability = styled.div`
  padding: 4px 8px;
  background-color: ${(p) => p.theme.colors.gray_10};
  border-radius: 4px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const getStatColor = (statName) => {
  if (statName === STATS.ATTACK) return "#f5ac78";
  else if (statName === STATS.DEFENSE) return "#fae078";
  else if (statName === STATS.SPEED) return "#fa92b2";
  else if (statName === STATS.HP) return "#ff5959";
  else if (statName === STATS.SPECIAL_ATTACK) return "#9db7f5";
  else if (statName === STATS.SPECIAL_DEFENSE) return "#a7db8d";
};

const StyledStat = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 130px;
  padding: 5px 20px;
  background-color: ${(p) => p.backgroundColor};
  box-sizing: border-box;
  border-radius: 8px;

  & > p {
    color: white;
  }
`;

export const Stat = ({ statName, value }) => {
  const backgroundColor = getStatColor(statName);
  return (
    <StyledStat backgroundColor={backgroundColor}>
      <p>{statName}</p>
      <p>{value}</p>
    </StyledStat>
  );
};
