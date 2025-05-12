import { HambugerIcon } from "../assets/svgs/components/hamburger-icon";

export const Header = ({ handleDrawer, pageTitle, isSidebarOpen }) => {
  return (
    <div
      className={` ${
        isSidebarOpen && "ml-[312px]"
      } flex items-center justify-between mb-[33px] px-[30px] pt-[31px]`}
    >
      <div className="flex items-center gap-x-5 maxSize:gap-x-0">
        <HambugerIcon onClick={handleDrawer} />
        <span className="text-6 font-semibold">{pageTitle}</span>
      </div>
    </div>
  );
};
