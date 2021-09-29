import Main from "components/Home/Main";
import PageNavigator from "components/Home/Main/PageNavigator";
import SidePanel from "components/Home/SidePanel";
import * as S from "./Styles";

const Home = ({ allPokemon }) => {
  return (
    <>
      <S.NavbarExtender />
      <S.Container>
        <SidePanel />
        <Main allPokemon={allPokemon} />
      </S.Container>
      <PageNavigator />
    </>
  );
};

export default Home;
