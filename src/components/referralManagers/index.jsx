import { ReferralManagersTableRows } from "./table/table-rows";
import { ReferralManagerFilters } from "./ref-managers-filters";
import { ReferralManagersTableHeadings } from "./table/table-heading";
import { Pagination } from "../../base-component/ui/pagination/pagination";
import { useReferralManagers } from "../../hooks/referral-managers/useReferralManagers";

export const ReferralMangers = () => {
  const {
    itemsPerPage,
    currentPage,
    headings,
    handlePageChange,
    sort,
    hanldeSortChange,
    dummyRecords,
    handleAddReferralManager,
  } = useReferralManagers();

  return (
    <>
      <ReferralManagerFilters onAddReferralManager={handleAddReferralManager} />
      <div className="mt-5 bg-white rounded-[14px] border border-[#e0e0e0] py-5 px-[30px]">
        <ReferralManagersTableHeadings
          headings={headings}
          handleSort={hanldeSortChange}
          sortValue={sort}
        />
        <ReferralManagersTableRows data={dummyRecords} />
      </div>

      <Pagination
        totalItems={itemsPerPage}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </>
  );
};
