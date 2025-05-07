import { getUser } from "./utils/auth";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { isJSON } from "./utils/function";
import { AuthPage } from "./pages/auth";
import { scrollToTop } from "./utils/utility";
import { ToastContainer } from "react-toastify";
import { ReferralManagersPage } from "./pages/referralManagers";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { ProfileSettingPage } from "./pages/profileSetting";
import { SupportManagersPage } from "./pages/supportManagers";
import { AddSupportManagersPage } from "./pages/supportManagers/add-support-manager";
import { AddReferralManagersPage } from "./pages/referralManagers/add-referral-manager";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = isJSON(getUser());

  // useEffect(() => {
  //   if (user) {
  //     dispatch(setUser(user));

  //     if (location.pathname === "/") {
  //       navigate("/referral-managers", { replace: true });
  //     }
  //   }
  // }, [user, location.pathname, navigate, dispatch]);

  useEffect(() => {
    scrollToTop();
  }, [location.pathname]);

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route
          path="/referral-managers"
          // element={<PrivateRoute element={<ReferralManagersPage />} />}
          element={<ReferralManagersPage />}
        />
        <Route
          path="/referral-managers/add-referral-manager"
          // element={<PrivateRoute element={<ReferralManagersPage />} />}
          element={<AddReferralManagersPage />}
        />
        <Route
          path="/profile-setting"
          // element={<PrivateRoute element={<ReferralManagersPage />} />}
          element={<ProfileSettingPage />}
        />
        <Route
          path="/support-managers"
          // element={<PrivateRoute element={<ReferralManagersPage />} />}
          element={<SupportManagersPage />}
        />
        <Route
          path="/support-managers/add-support-manager"
          // element={<PrivateRoute element={<ReferralManagersPage />} />}
          element={<AddSupportManagersPage />}
        />
      </Routes>
    </>
  );
};

export default App;
