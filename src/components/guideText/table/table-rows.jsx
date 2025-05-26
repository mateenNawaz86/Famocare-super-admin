import { useNavigate } from "react-router-dom";

export const GuideTextTableRows = ({ data }) => {
  const navigate = useNavigate();

  const handleEditText = () => {
    navigate("/guide-text/edit");
  };

  return (
    <div className={`overflow-y-visible flex flex-col gap-y-[10px] mt-[10px]`}>
      {data?.map((item, index) => (
        <div
          key={index}
          className="bg-tableRowColor rounded-lg py-2 px-3 gap-x-2 grid grid-cols-[minmax(50px,_50px)_minmax(250px,_250px)_minmax(200px,_3fr)_minmax(120px,_120px)] items-center"
        >
          <span className="text-base font-medium flex items-center justify-center">
            {item?.id}
          </span>
          <span className="text-base font-medium flex items-center justify-center">
            {item?.textTitle}
          </span>
          <span className="text-base font-medium flex items-center justify-center">
            {item?.text}
          </span>

          <div
            onClick={handleEditText}
            className={`bg-[#009F44] rounded-md flex items-center justify-center py-1 px-2 cursor-pointer`}
          >
            <span className="text-white">Edit</span>
          </div>
        </div>
      ))}
    </div>
  );
};
