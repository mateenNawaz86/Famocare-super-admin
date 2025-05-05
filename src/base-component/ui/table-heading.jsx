import { SortIcon } from "../../assets/svgs/components/sort-icon";

export const TableHeading = ({
  title,
  value,
  isFirst,
  isAligned,
  handleSort,
  currentSort,
  isRedeem,
  isStatus,
}) => {
  const isClickable = title !== "Status" || (isRedeem && title === "Status");

  const handleSortClicked = () => {
    if (isClickable && handleSort) {
      handleSort(value);
    }
  };

  return (
    <div
      className={`flex items-center gap-x-1.5 py-2 ${
        isAligned
          ? isFirst
            ? "justify-start"
            : isStatus
            ? "justify-end"
            : "justify-center"
          : ""
      }`}
    >
      <span
        onClick={handleSortClicked}
        className={` ${
          isClickable ? "cursor-pointer" : "cursor-default"
        } text-base font-medium ${
          currentSort === value ? "text-newpreimary" : "text-gray-500"
        }`}
      >
        {title}
      </span>
      <SortIcon />
    </div>
  );
};
