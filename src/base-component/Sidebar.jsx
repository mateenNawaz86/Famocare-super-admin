import { motion } from "framer-motion";
import logo from "../assets/svgs/logo.svg";
import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { sideBar, staticEnums } from "../utils/static";
import { useDispatch, useSelector } from "react-redux";
import { CrossIcon } from "../assets/svgs/components/cross-icon";
import { GroupsIcon } from "../assets/svgs/components/groups-icon";
import { updateModalType } from "../api/slices/globalSlice/global";
import { LogoutIcon } from "../assets/svgs/components/logout-icon";
import { ProfileIcon } from "../assets/svgs/components/profile-icon";
import { GuideTextIcon } from "../assets/svgs/components/guide-text-icon";
import { GuideVideoIcon } from "../assets/svgs/components/guide-video-icon";
import { SupportManagersIcon } from "../assets/svgs/components/support-icon";
import { VersionControlIcon } from "../assets/svgs/components/version-control";
import { PolicyDocumentsIcon } from "../assets/svgs/components/policy-documents-icon";
import { LimitsManagementIcon } from "../assets/svgs/components/limits-management-icon";
import { ReferralManagersIcon } from "../assets/svgs/components/referral-managers-icon";
import { NotificationIcon } from "../assets/svgs/components/notification-icon";

export const svgs = {
  notifications: <NotificationIcon />,
  refManagers: <ReferralManagersIcon />,
  supportManagers: <SupportManagersIcon />,
  versionControls: <VersionControlIcon />,
  guideVideo: <GuideVideoIcon />,
  guideText: <GuideTextIcon />,
  groups: <GroupsIcon />,
  policyDocuments: <PolicyDocumentsIcon />,
  limitsManagement: <LimitsManagementIcon />,
  profileSetting: <ProfileIcon />,
  Logout: <LogoutIcon />,
  dummy: <></>,
};

export const SideBar = () => {
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();
  const dispatch = useDispatch();

  const [selected, setSelected] = useState({
    parent: {
      isActive: false,
      title: "",
    },
    child: null,
  });

  const userRole = staticEnums["User"]["role"][user?.role] || 0;

  const routeChangeHandler = (item) => {
    let SUB_MENU = null;
    if (item.inner) {
      SUB_MENU = [];
    }

    setSelected((prev) => ({
      parent: {
        title: item.title,
        isActive:
          prev.parent.title === item.title ? !prev.parent.isActive : true,
      },
      child: SUB_MENU,
    }));
  };

  const filterHandler = (query) => {
    setSelected({
      ...selected,
      child: query,
    });
  };

  useEffect(() => {
    const currentItem = sideBar?.find((item) => {
      return (
        item.pathname &&
        typeof item.pathname === "string" &&
        location.pathname.startsWith(item.pathname)
      );
    });

    if (currentItem) {
      setSelected((prev) => ({
        parent: {
          title: currentItem.title,
          isActive: true,
        },
        child: currentItem.inner || null,
      }));
    }
  }, [location.pathname]);

  const handleLogout = () => {
    dispatch(updateModalType({ type: ModalType.LOGOUT }));
  };

  return (
    <div
      className={`fixed left-0 w-[312px] bg-white rounded-r-[6px] h-full overflow-y-auto custom-scroll`}
    >
      <div className="flex items-center justify-center pt-[28px] pb-[43px]">
        <img src={logo} alt="Logo" className="h-[139px] w-[137px]" />
      </div>

      <div className={`px-4 pb-[30px] flex flex-col`}>
        <div className="space-y-3">
          {sideBar?.map((item) => {
            return (
              item?.role?.includes(userRole) && (
                <React.Fragment key={item?.pathname}>
                  <Link
                    to={{
                      pathname: item.pathname,
                      search: item.query
                        ? new URLSearchParams({
                            [item.queryName || ""]: item.query,
                          }).toString()
                        : "",
                    }}
                    onClick={() => routeChangeHandler(item)}
                    className={`rounded-lg flex justify-between items-center p-4 w-full break-all ${
                      selected.parent.title === item.title
                        ? "bg-newPreimary"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-x-3">
                      <span
                        className={`${
                          selected.parent.title === "Yearly Premium"
                            ? "sidebar-prem-svg"
                            : selected.parent.title === item.title
                            ? "sidebar-svg"
                            : ""
                        }`}
                      >
                        {item.icon && svgs[item.icon]}
                      </span>

                      <span
                        className={`text-base font-semibold tracking-[0.5px] text-[#525451] ${
                          selected.parent.title === item.title && "text-white"
                        }`}
                      >
                        {item.title}
                      </span>
                    </div>
                    {item?.inner && (
                      <div
                        className={`
                          cursor-pointer 
                          ${
                            selected.parent.title === item.title &&
                            selected.parent.isActive &&
                            selected.child &&
                            "rotate-180"
                          }
                          ${
                            selected.parent.title === item.title &&
                            "sidebar-svg"
                          }`}
                        onClick={() => {
                          if (
                            selected.parent.title === item.title &&
                            selected.parent.isActive &&
                            item.inner
                          ) {
                            routeChangeHandler(item);
                          }
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="8"
                          viewBox="0 0 13 8"
                          fill="none"
                        >
                          <path
                            d="M0.267406 0.598758C0.438678 0.427537 0.670942 0.331351 0.913121 0.331351C1.1553 0.331351 1.38756 0.427537 1.55883 0.598758L6.07975 5.11967L10.6007 0.598758C10.7729 0.43239 11.0036 0.340333 11.2431 0.342413C11.4826 0.344494 11.7116 0.440547 11.881 0.609883C12.0503 0.779219 12.1463 1.00829 12.1484 1.24776C12.1505 1.48723 12.0585 1.71793 11.8921 1.89019L6.72546 7.05681C6.55419 7.22803 6.32193 7.32422 6.07975 7.32422C5.83757 7.32422 5.6053 7.22803 5.43403 7.05681L0.267406 1.89019C0.0961862 1.71891 0 1.48665 0 1.24447C0 1.00229 0.0961862 0.77003 0.267406 0.598758Z"
                            fill={
                              selected.parent.title === item.title &&
                              selected.parent.isActive
                                ? "#ffffff"
                                : "#8F8F8F"
                            }
                          />
                        </svg>
                      </div>
                    )}
                  </Link>

                  {selected?.parent?.title === item?.title &&
                    selected?.parent?.isActive &&
                    selected?.child && (
                      <>
                        {item.inner &&
                          item.inner.map((it, ind) => {
                            const queryParams = new URLSearchParams(
                              item.query
                                ? { [item.queryName || ""]: it.query }
                                : {}
                            );
                            return (
                              <motion.div
                                className="mt-2 px-3"
                                key={ind}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                              >
                                <Link
                                  to={{
                                    pathname: it.pathname,
                                    search: queryParams.toString(),
                                  }}
                                  onClick={() => filterHandler(it.query)}
                                  className={`text-sm text-[#525451] rounded-lg font-medium tracking-[0.5px] px-3 py-2 w-full text-start block ${
                                    new URLSearchParams(location.search).get(
                                      "status"
                                    ) === it.query
                                      ? "bg-[#691188] text-white"
                                      : ""
                                  }`}
                                >
                                  {it.title}
                                </Link>
                              </motion.div>
                            );
                          })}
                      </>
                    )}
                </React.Fragment>
              )
            );
          })}
        </div>
      </div>

      <div className="pl-[32px] pt-[236px] pb-[44px]">
        <button
          onClick={handleLogout}
          className="flex items-center gap-x-[14px] text-newPrimary text-lg font-semibold"
        >
          <LogoutIcon />
          Logout Account
        </button>
      </div>
    </div>
  );
};
