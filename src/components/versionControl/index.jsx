import { useEmptyStates } from "../../utils/hooks";
import { ReferralManagersTableRows } from "./table/table-rows";
import { ReferralManagersTableHeadings } from "./table/table-heading";
import { Pagination } from "../../base-component/ui/pagination/pagination";
import { useReferralManagers } from "../../hooks/referral-managers/useReferralManagers";
import { CommonFilters } from "../../base-component/ui/filters";
import { useState } from "react";

export const VersionControl = () => {
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
    handleAddReferralManager,
  } = useReferralManagers();

  const [renderComponent, setRenderComponent] = useState(true);
  const [activeTab, setActiveTab] = useState("android");

  const handleAddRenderComponent = (tab) => {
    setActiveTab(tab);
    setRenderComponent(true);
  };

  const CurrentComponent = useEmptyStates(
    <ReferralManagersTableRows data={dummyRecords} />,
    totalCount !== 0,
    loading
  );

  return (
    <>
      <CommonFilters
        onAddReferralManager={handleAddReferralManager}
        buttonText="Add Version"
      />

      <div className="flex items-center mt-10">
        <div
          className={`py-2 px-4 cursor-pointer ${
            activeTab === "android" ? "bg-white" : "bg-[#E9E9E9]"
          }`}
          onClick={() => handleAddRenderComponent("android")}
        >
          <span
            className={`text-lg font-semibold ${
              activeTab === "android"
                ? "text-newPreimary border-b border-b-newPreimary"
                : "text-black"
            }`}
          >
            Android Version
          </span>
        </div>

        <div
          className={`py-2 px-4 cursor-pointer ${
            activeTab === "ios" ? "bg-white" : "bg-[#E9E9E9]"
          }`}
          onClick={() => handleAddRenderComponent("ios")}
        >
          <span
            className={`text-lg font-semibold ${
              activeTab === "ios"
                ? "text-newPreimary border-b border-b-newPreimary"
                : "text-black"
            }`}
          >
            iOS Version
          </span>
        </div>
      </div>

      {renderComponent && (
        <div className="bg-white rounded-[14px] border border-[#e0e0e0] py-5 px-[30px]">
          <ReferralManagersTableHeadings
            headings={headings}
            handleSort={hanldeSortChange}
            sortValue={sort}
          />
          {CurrentComponent}
        </div>
      )}

      <Pagination
        totalItems={itemsPerPage}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </>
  );
};
