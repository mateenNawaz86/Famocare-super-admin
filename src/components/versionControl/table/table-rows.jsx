import MoreField from "../../../base-component/ui/fields/more-fields";

export const ReferralManagersTableRows = ({ data }) => {
  return (
    <div className={`overflow-y-visible flex flex-col gap-y-[10px] mt-[10px]`}>
      {data?.map((item, index) => (
        <div
          key={index}
          className="bg-tableRowColor rounded-lg py-2 px-3 gap-x-2 grid grid-cols-[minmax(50px,_50px)_minmax(150px,_150px)_minmax(150px,_3fr)_minmax(150px,_150px)_minmax(120px,_120px)] items-center"
        >
          <span className="text-base font-medium flex items-center justify-center">
            {item?.id}
          </span>
          <span className="text-base font-medium flex items-center justify-center">
            {item?.Version}
          </span>
          <span className="text-base font-medium flex items-center justify-center">
            {item?.description}
          </span>
          <span className="text-base font-medium flex items-center justify-center">
            {item?.releaseDate}
          </span>

          {/* <div className={`flex items-center justify-center gap-x-[14px]`}>
            <span className="text-base font-medium">More</span>
            <ThreeDotsIcon />
          </div> */}

          <div className="flex items-center">
            <div
              className={`px-[29px] py-2 ${
                item.text === "Beta"
                  ? "bg-[#f6f0e1] text-[#F4D370]"
                  : item.text === "Latest"
                  ? "bg-[#d1ddf7] text-[#0057FF]"
                  : ""
              }`}
            >
              <span className="text-sm font-normal">{item.text}</span>
            </div>

            <MoreField
              handleChange={(value) => console.log("Selected action:", value)}
              options={[
                { label: "Beta", value: "beta" },
                { label: "Latest", value: "latest" },
                { label: "Stable", value: "stable" },
                { label: "Outdated", value: "outdated" },
              ]}
              containerClassName="w-[120px] flex justify-end"
              isVersion={true}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
