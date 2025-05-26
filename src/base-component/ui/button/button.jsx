import { combineClasses } from "../../../utils/utility";

export const Button = ({
  inputType,
  text,
  className,
  loading,
  success,
  onClick,
  loaderColor,
  icon,
  iconAlt,
  disabled,
  id,
}) => {
  const defaultClasses = `min-w-fit px-4 bg-primary text-white !h-[50px] font-medium rounded-lg`;
  const classes = combineClasses(defaultClasses, className);

  return loading ? (
    <button
      id={id}
      type={inputType}
      disabled={loading || disabled}
      className={`${classes} flex justify-center`}
    >
      ...
    </button>
  ) : (
    <button
      id={id}
      type={inputType}
      className={`text-dark ${
        success && "flex items-center gap-x-2"
      } flex items-center justify-center ${classes}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <img src={icon} alt={iconAlt || "icon"} className="mr-1" />}
      {success ? "Changed" : text}
    </button>
  );
};
