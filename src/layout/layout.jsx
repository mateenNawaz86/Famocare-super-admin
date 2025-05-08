import { useEffect, useState } from "react";
import { Header } from "../base-component/Header";
import { SideBar } from "../base-component/Sidebar";
import { useLocation } from "react-router-dom";
import { getPageTitles } from "../utils/function";
import { useGlobalUser } from "../utils/hooks";
import { useDispatch, useSelector } from "react-redux";

export const Layout = ({ children }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDrawer, setIsDrawer] = useState(false);
  const [isAboveMlg, setIsAboveMlg] = useState(
    window.matchMedia("(min-width:1280px)").matches
  );

  const { pageTitle, mobileHeaderTitle } = getPageTitles(location);

  useEffect(() => {
    if (user) useGlobalUser(user, dispatch);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width:1280px)");
    const handleMediaChange = (event) => setIsAboveMlg(event.matches);
    mediaQuery.addEventListener("change", handleMediaChange);
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  useEffect(() => {
    if (!isAboveMlg) {
      setIsSidebarOpen(false);
      setIsDrawer(false);
    } else {
      setIsSidebarOpen(true);
    }
  }, [isAboveMlg]);

  const handleDrawer = () => setIsDrawer((prev) => !prev);


  return (
    <div className="bg-[#fafbfd] min-h-screen h-full overflow-y-auto relative">
      <div className={`fixed top-0 left-0 h-full`}>
        <SideBar isDrawer={false} handleDrawer={handleDrawer} />
      </div>

      <Header
        handleDrawer={handleDrawer}
        pageTitle={pageTitle}
        profile={user?.user?.imageUrl}
        name={user?.user?.name}
        isSidebarOpen={isSidebarOpen}
      />

      <div className={`px-[18px] md:px-[30px] ml-[312px]`}>{children}</div>
    </div>
  );
};
