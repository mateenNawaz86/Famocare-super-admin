import { getUser } from "./utils/auth";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { isJSON } from "./utils/function";
import { AuthPage } from "./pages/auth";
import { scrollToTop } from "./utils/utility";
import { ToastContainer } from "react-toastify";
import { setUser } from "./api/slices/authSlice/auth";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { ReferralManagersPage } from "./pages/referralManagers";
import PrivateRoute from "./base-component/private-route";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = isJSON(getUser());

  useEffect(() => {
    if (user) {
      dispatch(setUser(user));

      if (location.pathname === "/") {
        navigate("/referral-managers", { replace: true });
      }
    }
  }, [user, location.pathname, navigate, dispatch]);

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
          element={<PrivateRoute element={<ReferralManagersPage />} />}
        />
      </Routes>
    </>
  );
};

export default App;
