import { useEmptyStates } from "../../utils/hooks";
import { SupportManagersTableRows } from "./table/table-rows";
import { SupportManagerFilters } from "./support-managers-filters";
import { SupportManagersTableHeadings } from "./table/table-heading";
import { Pagination } from "../../base-component/ui/pagination/pagination";
import { useSupportManagers } from "../../hooks/support-managers/useSupportManagers";

export const SupportMangers = () => {
  const {
    loading,
    itemsPerPage,
    currentPage,
    headings,
    handlePageChange,
    totalCount,
    sort,
    hanldeSortChange,
    dummyRecords,
    handleAddSupportManager,
  } = useSupportManagers();

  const CurrentComponent = useEmptyStates(
    <SupportManagersTableRows data={dummyRecords} />,
    totalCount !== 0,
    loading
  );

  return (
    <>
      <SupportManagerFilters onAddSupportManager={handleAddSupportManager} />
      <div className="mt-5 bg-white rounded-[14px] border border-[#e0e0e0] py-5 px-[30px]">
        <SupportManagersTableHeadings
          headings={headings}
          handleSort={hanldeSortChange}
          sortValue={sort}
        />
        {CurrentComponent}
      </div>

      {/* <div className="flex items-center justify-between mt-[15px] mb-3 md:hidden">
        <p className="text-[20px] font-semibold min-w-[123px]">User Listing</p>

        <SelectField
          handleChange={(value) => hanldeSortChange(value)}
          value={sort || "None"}
          options={[
            {
              label: "Name",
              value: "name",
            },
            {
              label: "Install Date",
              value: "installedDate",
            },
          ]}
          containerClassName="w-[350px]"
        />
      </div> */}

      {/* {loading ? (
        <div className="flex justify-center items-center md:hidden">
          <CustomLoader />
        </div>
      ) : currentPageRows?.data?.freeUsers?.length > 0 ? (
        <div className="md:hidden mb-10">
          <FreeUserCard data={freeUser?.freeUsers} />
        </div>
      ) : (
        <div className="md:hidden mt-10">
          <NoDataEmptyState
            imgClassName="w-14 h-14"
            textClassName="text-lg"
            className="py-5 px-3 w-full"
          />
        </div>
      )} */}

      {!loading && (
        <div className="hidden md:block">
          <Pagination
            totalItems={itemsPerPage}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </div>
      )}
    </>
  );
};
