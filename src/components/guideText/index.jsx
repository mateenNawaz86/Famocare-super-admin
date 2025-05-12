import { Pagination } from "../../base-component/ui/pagination/pagination";
import { useGuideText } from "../../hooks/guide-text/useGuideText";
import { GuideTextTableHeadings } from "./table/table-heading";
import { GuideTextTableRows } from "./table/table-rows";

export const GuideText = () => {
  const {
    itemsPerPage,
    currentPage,
    headings,
    handlePageChange,
    sort,
    hanldeSortChange,
    dummyRecords,
  } = useGuideText();

  return (
    <>
      <div className="bg-white rounded-[14px] border border-[#e0e0e0] py-5 px-[30px]">
        <GuideTextTableHeadings
          headings={headings}
          handleSort={hanldeSortChange}
          sortValue={sort}
        />
        <GuideTextTableRows data={dummyRecords} />

        <Pagination
          totalItems={itemsPerPage}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};
