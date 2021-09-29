import { useEffect, useRef, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useClickOutside } from "shared/hooks";
import * as S from "./Styles";

const Dropdown = ({
  labelPrefix,
  defaultSelected,
  list,
  handleChange,
  width = "100px",
}) => {
  const [selected, setSelected] = useState({});
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdown = useRef(null);

  const handleClickOutside = () => setShowDropdown(false);
  useClickOutside(dropdown, handleClickOutside);

  useEffect(() => {
    setSelected(defaultSelected);
  }, [defaultSelected]);

  const handleNewSelected = (value) => {
    const newItem = list.find((item) => item.value === value);
    handleChange(newItem.value);
    setSelected(newItem);
    setShowDropdown(false);
  };

  return (
    <S.DropdownContainer ref={dropdown} width={width}>
      <S.DropdownItem
        onClick={() => setShowDropdown(!showDropdown)}
        selected
        show={showDropdown}
      >
        <p>
          {labelPrefix}
          {selected.label}
        </p>
        <RiArrowDropDownLine size={20} />
      </S.DropdownItem>
      <S.DropdownList>
        {showDropdown
          ? list.map((item, index) => (
              <S.DropdownItem
                last={index === list.length - 1}
                key={item.label}
                onClick={() => handleNewSelected(item.value)}
              >
                <p>{item.label}</p>
              </S.DropdownItem>
            ))
          : null}
      </S.DropdownList>
    </S.DropdownContainer>
  );
};

export default Dropdown;
