import { combineClasses } from "../../../utils/utility";

export const LinkButton = ({
  text,
  onClick,
  icon: Icon,
  containerClassName,
  size,
}) => {
  const containerClasses = combineClasses(
    "py-2 px-4 bg-primary rounded-[4px] text-white text-xs font-semibold w-fit h-fit flex items-center gap-x-[5px] md:gap-x-2 whitespace-nowrap",
    containerClassName
  );

  return (
    <button onClick={onClick} className={containerClasses}>
      {Icon && (
        <div className="hidden md:block">
          <Icon />
        </div>
      )}
      {text}
    </button>
  );
};
