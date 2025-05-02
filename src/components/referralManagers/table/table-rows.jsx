import profile from "../../../assets/pngs/profile.jpg";
import { formatDate } from "../../../utils/function";

export const ReferralManagersTableRows = ({ data }) => {
  return (
    <div className={`overflow-y-visible flex flex-col gap-y-[10px]`}>
      {data?.map((item, index) => (
        <div
          key={index}
          className="bg-white hover:bg-tableHoverColor rounded-[5px] py-[10px] px-[15px] grid grid-cols-[minmax(150px,_3fr)_minmax(100px,_3fr)_minmax(120px,_3fr)_minmax(120px,_120px)_minmax(100px,_100px)] items-center"
        >
          <div className="flex items-center gap-x-[18px]">
            <img
              src={item?.image || profile}
              alt="profile"
              className="min-w-[50px] min-h-[50px] max-w-[50px] max-h-[50px] rounded-full object-cover"
            />
            <span className="text-base font-medium">{item?.name}</span>
          </div>

          <span className="text-base font-medium">
            {formatDate(item?.installedDate)}
          </span>
          <span className="text-base font-medium">Free</span>
        </div>
      ))}
    </div>
  );
};
