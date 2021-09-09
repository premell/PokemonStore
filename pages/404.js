import styled from "styled-components";
import Image from "next/image";
import sadPikachu from "shared/Images/sad_pikachu.png";

const Background = styled.div`
  background-color: ${(p) => p.theme.colors.gray_20};
`;

const MainContainer = styled.div`
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  width: 500px;
  height: 800px;
`;

// pages/404.js
export default function Custom404() {
  return (
    <Background>
      <MainContainer>
        <Image
          objectFit={"contain"}
          quality={100}
          width={400}
          height={400}
          src={sadPikachu}
        />
        <h1>404 - Page Not Found</h1>;
      </MainContainer>
    </Background>
  );
}
