import { useEmptyStates } from "../../utils/hooks";
import { DetailCards } from "../freeUser/detail-card";
import { YearlyPremUsersTableRows } from "./table/table-rows";
import { RecordCard } from "../../base-component/ui/record-card";
import { YearlyPremUserTableHeadings } from "./table/table-heading";
import SelectField from "../../base-component/ui/fields/select-fields";
import { useYearlyUsers } from "../../hooks/yearly-users/useYearlyUsers";
import { Pagination } from "../../base-component/ui/pagination/pagination";
import { NoDataEmptyState } from "../../base-component/ui/loadingEffect/no-data-state";
import { CustomLoader } from "../../base-component/ui/loadingEffect/custom-loader";

export const YearlyPremUsers = () => {
  const {
    dummyData,
    totalCount,
    totalItems,
    loading,
    itemsPerPage,
    currentPage,
    headings,
    sort,
    pageTitle,
    mobilePageTitle,
    currentPageRows,
    handlePageChange,
    hanldeSortChange,
  } = useYearlyUsers();

  const CurrentComponent = useEmptyStates(
    <YearlyPremUsersTableRows data={currentPageRows?.metrics?.data} />,
    totalCount !== 0,
    loading
  );

  return (
    <>
      <DetailCards dummyData={dummyData} />

      <div className="hidden md:block">
        <YearlyPremUserTableHeadings
          headings={headings}
          handleSort={hanldeSortChange}
          sortValue={sort}
        />
        {CurrentComponent}
      </div>

      <div className="flex items-center justify-between mt-[15px] mb-3 md:hidden">
        <p className="text-[20px] font-semibold min-w-fit">{mobilePageTitle}</p>
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
              value: "installDate",
            },
            {
              label: "Subscribed Date",
              value: "subscribedDate",
            },
            {
              label: "Clearance Datet",
              value: "clearanceDate",
            },
          ]}
          containerClassName="w-[350px]"
        />
      </div>

      {loading ? (
        <div className="flex justify-center items-center md:hidden">
          <CustomLoader />
        </div>
      ) : currentPageRows?.metrics?.data?.length > 0 ? (
        <div className="md:hidden mb-10">
          <RecordCard
            data={currentPageRows?.metrics?.data}
            pageTitle={pageTitle}
          />
        </div>
      ) : (
        <div className="md:hidden mt-10">
          <NoDataEmptyState
            imgClassName="w-14 h-14"
            textClassName="text-lg"
            className="py-5 px-3 w-full"
          />
        </div>
      )}

      {!loading && (
        <div className="hidden md:block">
          <Pagination
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </div>
      )}
    </>
  );
};
