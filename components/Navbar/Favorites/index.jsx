import { showFavorites as showFavoritesAtoms } from "atoms.js";
import { useRouter } from "next/router";
import { AiOutlineHeart } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { NavButton } from "shared/components";
import Popup from "./Popup";


const Favorites = () => {
  const router = useRouter();
  const handleGoToFavorites = () => router.push("/favorites");

  const [showFavorites, setShowFavorites] = useRecoilState(showFavoritesAtoms);

  const ShowPopup = () => {
    setShowFavorites(true);
  };

  return (
    <NavButton onClick={ShowPopup}>
      <Popup show={showFavorites} setShow={setShowFavorites} />
      <AiOutlineHeart size={23} />
      <h3>Favorites</h3>
    </NavButton>
  );
};

export default Favorites;
