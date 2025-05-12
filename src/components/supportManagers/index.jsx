import { SupportManagersTableRows } from "./table/table-rows";
import { SupportManagerFilters } from "./support-managers-filters";
import { SupportManagersTableHeadings } from "./table/table-heading";
import { Pagination } from "../../base-component/ui/pagination/pagination";
import { useSupportManagers } from "../../hooks/support-managers/useSupportManagers";

export const SupportMangers = () => {
  const {
    itemsPerPage,
    currentPage,
    headings,
    handlePageChange,
    sort,
    hanldeSortChange,
    dummyRecords,
    handleAddSupportManager,
  } = useSupportManagers();

  return (
    <>
      <SupportManagerFilters onAddSupportManager={handleAddSupportManager} />
      <div className="mt-5 bg-white rounded-[14px] border border-[#e0e0e0] py-5 px-[30px]">
        <SupportManagersTableHeadings
          headings={headings}
          handleSort={hanldeSortChange}
          sortValue={sort}
        />
        <SupportManagersTableRows data={dummyRecords} />
      </div>

      <div className="hidden md:block">
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
