import styled from "styled-components";

export const Thumb = styled.input.attrs({
  type: "range",
  value: (p) => p.value,
})`
  pointer-events: none;
  position: absolute;
  background-color: #a1a8b3;
  height: 18px;
  width: 18px;

  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;

  outline: none;
  &::-webkit-slider-thumb {
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 1px 1px #ced4da;
    cursor: pointer;
    height: 18px;
    width: 18px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    background-color: #a1a8b3;
  }

  &::-moz-range-thumb {
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 1px 1px #ced4da;
    cursor: pointer;
    height: 18px;
    width: 18px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    background-color: #a1a8b3;
  }
`;
