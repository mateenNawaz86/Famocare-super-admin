import React from "react";
import { combineClasses } from "../../../utils/utility";

export const PaginationItem = React.memo(
  ({ handlePageClick, icon, className, disabled }) => {
    const defaultClasses =
      "py-2 px-[14px] text-gray font-semibold bg-white text-[#828282] mb-10 border border-[#bdbdbd]";
    const buttonClasses = combineClasses(defaultClasses, className);

    return (
      <button
        onClick={handlePageClick}
        className={buttonClasses}
        disabled={disabled}
      >
        {icon}
      </button>
    );
  }
);
