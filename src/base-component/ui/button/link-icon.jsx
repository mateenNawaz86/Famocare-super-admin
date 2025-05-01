import { useState } from "react";
import { combineClasses } from "../../../utils/utility";

export const LinkButton = ({
  text,
  onClick,
  icon: Icon,
  containerClassName,
  size,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const containerClasses = combineClasses(
    "py-2 px-4 bg-primary rounded-[4px] text-white text-xs font-semibold hover:bg-white border border-newPreimary hover:text-newPreimary transition-all w-fit h-fit flex items-center gap-x-[5px] md:gap-x-2 whitespace-nowrap",
    containerClassName
  );

  return (
    <button
      onClick={onClick}
      className={containerClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {Icon && (
        <div className="hidden md:block">
          <Icon iconClassName={isHovered ? "#055860" : "#fff"} size={size} />
        </div>
      )}
      {text}
    </button>
  );
};
