import styled from "styled-components";

export const ViewPanel = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 550px) {
    padding-left: 20px;
  }
`;

export const DropdownBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 10px;
`;

export const DropdownContainer = styled.div`
  margin-left: 12px;
  position: relative;
`;

export const DropdownList = styled.div`
  width: 100%;
  top: 32px;
  left: 0px;
  position: absolute;
  background-color: ${(p) => p.theme.colors.gray_90};
  z-index: 30;
  border-radius: 0px 0px 7px 7px;
`;

export const DropdownItem = styled.div`
  display: flex;
  padding: 6px 12px;
  align-items: center;
  margin: 0px;
  width: 100%;
  height: 32px;
  cursor: pointer;
  box-sizing: border-box;
  border-radius: ${(p) => {
    if (p.selected && p.show) return "7px 7px 0px 0px";
    else if (p.selected) return "7px";
    else if (p.last) return "0px 0px 7px 7px";
    else return "0px";
  }};

  &:hover {
    background-color: ${(p) =>
      p.selected ? p.theme.colors.gray_40 : p.theme.colors.accent_color};
  }

  & p {
    color: ${(p) =>
      p.selected ? p.theme.colors.font_color : "#fdfef4"} !important;
  }
`;
