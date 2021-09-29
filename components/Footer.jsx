import { Links } from "shared/components";
import styled from "styled-components";


const StyledFooter = styled.div`
  background-color: ${(p) => p.theme.colors.gray_100};
  height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 10px;

  & p,
  h3 {
    color: #fdfef4 !important;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <h3>
        This website is a demo project written in react. Feel free to contact me
        :)
      </h3>
      <Links />
    </StyledFooter>
  );
};

export default Footer;
