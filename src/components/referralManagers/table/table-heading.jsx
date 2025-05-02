import { TableHeading } from "../../../base-component/ui/table-heading";

export const FreeUsersTableHeadings = ({ headings, handleSort, sortValue }) => {
  return (
    <div className="grid gap-x-2 grid-cols-[minmax(150px,_3fr)_minmax(100px,_3fr)_minmax(120px,_3fr)_minmax(100px,_100px)_minmax(120px,_120px)] px-3">
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
