import React, { forwardRef, useState } from "react";
import { combineClasses } from "../../../utils/utility";
import { SearchIcon } from "../../../assets/svgs/components/search-icon";

const InputField = forwardRef(
  (
    {
      value,
      handleChange,
      onEnterPress,
      onClear,
      textClassName,
      containerClassName,
      inputDivClassName,
      iconDisplay,
      bgColor,
      placeholder,
    },
    ref
  ) => {
    const [localValue, setLocalValue] = useState(value || "");

    const handleKeyDown = (event) => {
      if (event.key === "Enter" && onEnterPress) {
        onEnterPress(localValue);
      }
    };

    const inputClasses = combineClasses(
      `${
        bgColor ? "bg-[#F4F4F4]" : "bg-white"
      } text-sm rounded-tl-lg rounded-bl-lg pr-8 pl-3 py-2 focus:outline-none placeholder:text-[#222B45] text-[#222B45] text-[13px] border-y border-l border-[#ccc] focus:border-newPreimary`,
      textClassName
    );

    const containerClasses = combineClasses("w-fit", containerClassName);
    const inputDivClasses = combineClasses(
      "relative flex w-fit",
      inputDivClassName
    );

    const handleInputChange = (newValue) => {
      setLocalValue(newValue);
    };

    const handleSearchClick = () => {
      handleChange(localValue);
    };

    return (
      <div className={containerClasses}>
        <div className={inputDivClasses}>
          <input
            id="searchBar"
            type="text"
            value={localValue}
            placeholder="Search..."
            className={inputClasses}
            onChange={(e) => handleInputChange(e.target.value)}
            onKeyDown={handleKeyDown}
            ref={ref}
          />

          <div
            className={`px-[30px] py-[10px] bg-newPreimary rounded-tr-md rounded-br-md cursor-pointer `}
            onClick={handleSearchClick}
          >
            <SearchIcon />
          </div>
        </div>
      </div>
    );
  }
);

export default InputField;
