import { useEffect } from "react";
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

  const { pageTitle } = getPageTitles(location);

  useEffect(() => {
    if (user) useGlobalUser(user, dispatch);
  }, []);

  return (
    <div className="bg-[#fafbfd] min-h-screen h-full overflow-y-auto relative">
      <div className={`fixed top-0 left-0 h-full`}>
        <SideBar />
      </div>

      <Header
        pageTitle={pageTitle}
        profile={user?.user?.imageUrl}
        name={user?.user?.name}
      />

      <div className={`px-[18px] md:px-[30px] ml-[312px]`}>{children}</div>
    </div>
  );
};
