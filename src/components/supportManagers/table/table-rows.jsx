import profile from "../../../assets/pngs/profile.jpg";
import { ThreeDotsIcon } from "../../../assets/svgs/components/three-dots-icon";

export const SupportManagersTableRows = ({ data }) => {
  return (
    <div className={`overflow-y-visible flex flex-col gap-y-[10px] mt-[10px]`}>
      {data?.map((item, index) => (
        <div
          key={index}
          className="bg-tableRowColor rounded-lg py-2 px-3 gap-x-2 grid grid-cols-[minmax(150px,_3fr)_minmax(100px,_3fr)_minmax(120px,_3fr)_minmax(100px,_100px)_minmax(120px,_120px)] items-center"
        >
          <div className="flex items-center gap-x-[18px]">
            <img
              src={item?.image || profile}
              alt="profile"
              className="min-w-[50px] min-h-[50px] max-w-[50px] max-h-[50px] rounded-full object-cover border border-[#6C6C6C]"
            />
            <span className="text-base font-medium">{item?.name}</span>
          </div>

          <span className="text-base font-medium flex items-center justify-center">
            {item?.userId}
          </span>
          <span className="text-base font-medium flex items-center justify-center">
            {item?.email}
          </span>
          <div
            className={`flex items-center justify-center py-1 text-white text-[20px] font-semibold ${
              item?.status === "Active" ? "bg-successBg" : "bg-unSuccessBg "
            } rounded-sm shadow-md`}
          >
            <span className="text-base font-medium">{item?.status}</span>
          </div>
          <div className={`flex items-center justify-end gap-x-[14px]`}>
            <span className="text-base font-medium">More</span>
            <ThreeDotsIcon />
          </div>
        </div>
      ))}
    </div>
  );
};
