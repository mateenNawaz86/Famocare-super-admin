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

    // const handleClearInput = () => {
    //   setLocalValue("");
    //   if (onClear) onClear();
    // };

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
            placeholder={placeholder || "Search..."}
            className={inputClasses}
            onChange={(e) => handleInputChange(e.target.value)}
            onKeyDown={handleKeyDown}
            ref={ref}
          />
          {/* {localValue && iconDisplay && (
            <div
              className="absolute top-1/2 right-5 transform -translate-y-1/2 cursor-pointer"
              onClick={handleClearInput}
            >
              <svg
                id="cancel-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="12" fill="#F00" />
                <path
                  d="M128.622,128.622a1.177,1.177,0,0,1-1.65,0l-3.825-3.825-3.825,3.825a1.167,1.167,0,0,1-1.65-1.65l3.825-3.825-3.825-3.825a1.167,1.167,0,0,1,1.65-1.65l3.825,3.825,3.825-3.825a1.167,1.167,0,0,1,1.65,1.65l-3.825,3.825,3.825,3.825A1.177,1.177,0,0,1,128.622,128.622Z"
                  transform="translate(-111.146 -111.146)"
                  fill="#FFF"
                />
              </svg>
            </div>
          )} */}

          <div
            className={`px-[30px] py-[10px] bg-newPreimary rounded-tr-md rounded-br-md cursor-pointer `}
            onClick={handleSearchClick}
          >
            <SearchIcon />
          </div>

          {/* <div
            className={combineClasses(
              `px-[30px] py-[10px] rounded-tr-md rounded-br-md`,
              localValue.trim()
                ? "bg-newPreimary cursor-pointer"
                : "bg-gray-300 cursor-not-allowed"
            )}
            onClick={() => {
              if (localValue.trim()) {
                handleSearchClick();
              }
            }}
          >
            <SearchIcon />
          </div> */}
        </div>
      </div>
    );
  }
);

export default InputField;
