import editIcon from "../../assets/pngs/edit-icon.png";
import dummyVideo from "../../assets/videos/video.mp4";

export const GuideVideo = () => {
  const data = [
    {
      text: "Your place name",
      videoSrc: dummyVideo,
    },
    {
      text: "Your place name",
      videoSrc: dummyVideo,
    },
    {
      text: "Your place name",
      videoSrc: dummyVideo,
    },
    {
      text: "Your place name",
      videoSrc: dummyVideo,
    },
    {
      text: "Your place name",
      videoSrc: dummyVideo,
    },
    {
      text: "Your place name",
      videoSrc: dummyVideo,
    },
  ];
  return (
    <div className="bg-white rounded-[14px] border border-[#e0e0e0] py-10 px-[67px] mb-10">
      <div className="grid grid-cols-3 gap-[93px]">
        {data.map((item) => (
          <div className="flex flex-col shadow-lg">
            <video
              src={item.videoSrc}
              className="h-[297px] w-full object-cover"
            />
            <div className="flex items-center justify-between bg-white px-3 py-5">
              <span className="text-newPreimary font-medium text-xs">
                {item.text}
              </span>
              <img src={editIcon} alt="edit" className="cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
