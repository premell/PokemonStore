import { AiOutlineHeart } from "react-icons/ai"
import { NavButton, BoldRegularText } from "shared/components"
import { useRouter } from 'next/router'

const Favorites = () => {

  const router = useRouter()
  const handleGoToFavorites = () => router.push("/favorites")
  return (
    <NavButton onClick={handleGoToFavorites}>
      <AiOutlineHeart size={20} />
      <BoldRegularText>Favorites</BoldRegularText>
    </NavButton >
  )
}

export default Favorites
