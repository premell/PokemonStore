import React, { useCallback, useEffect, useRef, useState } from "react";

import NumberRangeContainerCss from "./NumberRangeContainer.module.css";
import { useRecoilState } from "recoil";
import { darkThemeEnabled as darkThemeEnabledAtoms } from "atoms";
//import { priceFilter as priceFilterAtoms } from "atoms.js";

import { stringToInteger } from "shared/javascript";

const darkColors = {
  track_color: "#38404b",
  range_color: "#eb145f",
  input_color: "#38404b",
  input_border_color: "#12151a",
  input_text_color: "white",
  handle_color: "#d1d8e3",
};

const lightColors = {
  track_color: "#d1d8e3",
  range_color: "#eb145f",
  input_color: "#fefefe",
  input_border_color: "#d1d8e3",
  input_text_color: "black",
  handle_color: "#d1d8e3",
};
//handle_color: "#d1d8e3",

const NumberRangeContainer = React.memo(
  ({ filter, handleChange, categoryName }) => {
    const [minVal, setMinVal] = useState(0);
    const [maxVal, setMaxVal] = useState(0);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);

    const [localMaxVal, setLocalMaxVal] = useState(0);

    const [dragging, setDragging] = useState({
      currentlyDragging: false,
      target: "min",
    });

    // const testAddingClass = () => {
    //   const thumb = document.getElementsByClassName(
    //     NumberRangeContainerCss.thumb
    //   )[0];
    //   console.log(
    //     document.getElementsByClassName(NumberRangeContainerCss.thumb).length
    //   );
    //   thumb.classList.remove(NumberRangeContainerCss.thumb);
    //   thumb.classList.add(NumberRangeContainerCss.dark_thumb);
    //   console.log(thumb);
    // };

    const [darkThemeEnabled, setDarkThemeEnabled] = useRecoilState(
      darkThemeEnabledAtoms
    );
    const [currentColors, setCurrentColors] = useState({});
    useEffect(() => {
      // testAddingClass();
      if (darkThemeEnabled) setCurrentColors(darkColors);
      else setCurrentColors(lightColors);
    }, [darkThemeEnabled]);

    useEffect(() => {
      setLocalMaxVal(filter.currentRange.max);
      setMinVal(filter.currentRange.min);
      setMaxVal(filter.currentRange.max);
    }, [filter.currentRange]);

    useEffect(() => {
      setMin(filter.range.min);
      setMax(filter.range.max);
    }, []);

    useEffect(() => {
      const handlePointerMove = (e) => {
        const rect = sliderRef.current.getBoundingClientRect();
        const percentage = (e.clientX - rect.x) / 180;
        let newValue = percentage * max;
        if (dragging.target === "min") {
          if (newValue < 0) newValue = 0;
          else if (newValue > maxVal) newValue = maxVal - 1;
          setMinVal(Math.floor(newValue));
        } else if (dragging.target === "max") {
          if (newValue > max) newValue = max;
          else if (newValue < minVal) newValue = minVal + 1;
          setLocalMaxVal(Math.ceil(newValue));
        }
      };
      const handlePointerUp = () => {
        setDragging({ ...dragging, currentlyDragging: false });
      };

      if (dragging.currentlyDragging === true) {
        document.addEventListener("pointermove", handlePointerMove);
        document.addEventListener("pointerup", handlePointerUp);
      } else {
        document.removeEventListener("pointermove", handlePointerMove);
        document.removeEventListener("pointerup", handlePointerUp);
      }
      return () => {
        document.removeEventListener("pointermove", handlePointerMove);
        document.removeEventListener("pointerup", handlePointerUp);
      };
    }, [dragging.currentlyDragging]);

    const sliderRef = useRef(null);
    const range = useRef(null);
    const left_input = useRef(null);
    const right_input = useRef(null);

    const getPercent = useCallback(
      (value) => Math.round(((value - min) / (max - min)) * 100),
      [min, max]
    );

    useEffect(() => {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }, [minVal, maxVal, getPercent]);

    const handleMouseUp = (minVal, maxVal) => {
      if (minVal === min && maxVal === max)
        return handleChange(
          {
            ...filter,
            currentRange: { min: min, max: max },
            isFiltering: false,
          },
          categoryName
        );
      handleChange(
        {
          ...filter,
          currentRange: { min: minVal, max: maxVal },
          isFiltering: true,
        },
        categoryName
      );
    };

    const handleMinChange = (e) => {
      if (e.target.value === "") {
        setMinVal(0);
      } else {
        const number = stringToInteger(e.target.value);
        const lowerBoundNumber = number <= min ? min : number;
        const upperBoundNumber =
          lowerBoundNumber >= maxVal ? maxVal - 1 : lowerBoundNumber;
        setMinVal(parseInt(upperBoundNumber));
      }
    };
    const handleMaxChange = (e) => {
      if (e.target.value === "") setLocalMaxVal(0);
      else {
        const number = stringToInteger(e.target.value);
        const upperBoundNumber = number >= max ? max : number;
        setLocalMaxVal(parseInt(upperBoundNumber));
      }
    };

    const setAcceptedMaxValue = (localMaxVal, minVal, maxVal) => {
      if (localMaxVal <= minVal) setMaxVal(minVal + 1);
      else if (localMaxVal > max) setMaxVal(max);
      else setMaxVal(localMaxVal);
    };

    useEffect(() => {
      if (localMaxVal >= minVal && localMaxVal <= max && localMaxVal !== maxVal)
        setMaxVal(localMaxVal);
      else if (localMaxVal <= minVal) setMaxVal(minVal + 1);

      setAcceptedMaxValue(localMaxVal, minVal, maxVal);
    }, [localMaxVal, minVal, maxVal]);

    useEffect(() => {
      const timeId = setTimeout(() => {
        if (minVal === min && maxVal === max)
          handleChange(
            {
              ...filter,
              currentRange: { min: min, max: max },
              isFiltering: false,
            },
            categoryName
          );
        else
          handleChange(
            {
              ...filter,
              currentRange: { min: minVal, max: maxVal },
              isFiltering: true,
            },
            categoryName
          );
      }, 400);
      return () => {
        clearTimeout(timeId);
      };
    }, [minVal, maxVal]);

    const handleRangeClick = (e, minVal, maxVal) => {
      const rect = sliderRef.current.getBoundingClientRect();
      let percentageClick = (e.clientX - rect.x) / 180;

      if (percentageClick <= 0) percentageClick = 0;
      else if (percentageClick >= 1) percentageClick = 1;

      const minPercentage = minVal / max;
      const maxPercentage = maxVal / max;

      if (percentageClick - minPercentage < maxPercentage - percentageClick) {
        const newMin = Math.floor(percentageClick * max);
        setMinVal(newMin);
        // if (newMin === min && maxVal === max)
        //   handleChange(
        //     {
        //       ...filter,
        //       currentRange: { min: min, max: max },
        //       isFiltering: false,
        //     },
        //     categoryName
        //   );
        // else
        //   handleChange(
        //     {
        //       ...filter,
        //       currentRange: { min: newMin, max: maxVal },
        //       isFiltering: true,
        //     },
        //     categoryName
        //   );
        setDragging({ currentlyDragging: true, target: "min" });
      } else {
        const newMax = Math.ceil(percentageClick * max);
        setMaxVal(maxVal);
        // if (minVal === min && newMax === max)
        //   handleChange(
        //     {
        //       ...filter,
        //       currentRange: { min: min, max: max },
        //       isFiltering: false,
        //     },
        //     categoryName
        //   );
        // else
        //   handleChange(
        //     {
        //       ...filter,
        //       currentRange: { min: minVal, max: newMax },
        //       isFiltering: true,
        //     },
        //     categoryName
        //   );
        setDragging({ currentlyDragging: true, target: "max" });
      }
    };

    return (
      <div>
        <div
          ref={sliderRef}
          className={NumberRangeContainerCss.container}
          onPointerDown={(e) => handleRangeClick(e, minVal, maxVal)}
        >
          <input
            type="range"
            ref={left_input}
            min={min}
            max={max}
            value={minVal}
            onMouseUp={() => handleMouseUp(minVal, maxVal)}
            onChange={(event) => {
              const value = Math.min(Number(event.target.value), maxVal - 1);
              setMinVal(value);
            }}
            style={{ backgroundColor: currentColors.handle_color }}
            className={`${NumberRangeContainerCss.thumb} ${NumberRangeContainerCss.thumb_left}`}
          />
          <input
            type="range"
            ref={right_input}
            min={min}
            max={max}
            value={maxVal}
            onMouseUp={() => handleMouseUp(minVal, maxVal)}
            onChange={(event) => {
              const value = Math.max(Number(event.target.value), minVal + 1);
              setLocalMaxVal(value);
              setMaxVal(value);
            }}
            style={{
              backgroundColor: currentColors.handle_color,
            }}
            className={`${NumberRangeContainerCss.thumb} ${NumberRangeContainerCss.thumb_right}`}
          />

          <div className={NumberRangeContainerCss.slider}>
            <div
              className={NumberRangeContainerCss.slider_track}
              style={{ backgroundColor: currentColors.track_color }}
            ></div>
            <div
              ref={range}
              className={NumberRangeContainerCss.slider_range}
              style={{ backgroundColor: currentColors.range_color }}
            ></div>
          </div>
        </div>
        <div style={{ marginTop: "5px" }}>
          <input
            type="text"
            className={NumberRangeContainerCss.input}
            onChange={handleMinChange}
            value={minVal}
            style={{
              backgroundColor: currentColors.input_color,
              borderColor: currentColors.input_border_color,
              color: currentColors.input_text_color,
            }}
          />
          <p
            style={{
              display: "inline-block",
              margin: "12px",
            }}
          >
            -
          </p>
          <input
            type="text"
            onBlur={() => setAcceptedMaxValue(localMaxVal, maxVal, minVal)}
            className={NumberRangeContainerCss.input}
            onChange={handleMaxChange}
            value={localMaxVal}
            style={{
              backgroundColor: currentColors.input_color,
              borderColor: currentColors.input_border_color,
              color: currentColors.input_text_color,
            }}
          />
        </div>
      </div>
    );
  }
);

export default NumberRangeContainer;
