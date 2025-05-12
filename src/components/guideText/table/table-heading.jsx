import { TableHeading } from "../../../base-component/ui/table-heading";

export const GuideTextTableHeadings = ({ headings, handleSort, sortValue }) => {
  return (
    <div className="grid gap-x-2 grid-cols-[minmax(50px,_50px)_minmax(250px,_250px)_minmax(200px,_3fr)_minmax(120px,_120px)] px-3">
      {headings?.map((heading, index) => (
        <TableHeading
          key={heading.value}
          title={heading.label}
          value={heading.value}
          isFirst={index === 0}
          isStatus={heading.value === "action"}
          isAligned={true}
          handleSort={handleSort}
          currentSort={sortValue}
        />
      ))}
    </div>
  );
};
