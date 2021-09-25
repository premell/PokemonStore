import styled from "styled-components";

export const RecommendedSection = styled.div`
  max-width: 1400px;
  width: 100%;
  height: 470px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RecommendedContainer = styled.div`
  display: flex;
  height: 370px;
  width: calc(100vw - 100px);
  max-width: 100%;
  box-sizing: border-box;
  position: relative;
  padding: 0 50px;
  overflow: hidden;
`;

export const HiddenContainer = styled.div`
  transition: left 0.3s ease-out;
  position: absolute;
  display: flex;
  left: ${(p) => p.viewPosition * 270}px;
`;

export const LeftArrow = styled.div`
  z-index: 300;
  position: absolute;
  top: 50%;
  left: 10px;
`;
export const RightArrow = styled.div`
  z-index: 300;
  position: absolute;
  top: 50%;
  right: 10px;
`;
