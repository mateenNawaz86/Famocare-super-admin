import { useEffect, useState } from "react";
import { Login } from "./screens/login-screen";
import { LandingPage } from "./screens/landing-page";
import { PhoneVarification } from "./screens/phone-verification";
import { ForgotPassword } from "./screens/forgot-password";
import { NewPassword } from "./screens/new-password";

export const Auth = () => {
  const [currentScreen, setCurrentScreen] = useState("landing");

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentScreen("login");
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleLoginSuccess = () => {
    setCurrentScreen("phone");
  };

  const handleBack = () => {
    setCurrentScreen("forgotPassword");
  };

  const handleForgotPassword = () => {
    setCurrentScreen("forgotPassword");
  };

  const handleNewPassword = () => {
    setCurrentScreen("newPassword");
  };

  const screens = {
    landing: <LandingPage />,
    login: (
      <Login
        onLoginSuccess={handleLoginSuccess}
        onForgotPassword={handleForgotPassword}
      />
    ),
    forgotPassword: (
      <ForgotPassword onBack={handleBack} onSuccess={handleLoginSuccess} />
    ),
    phone: (
      <PhoneVarification onBack={handleBack} onSuccess={handleNewPassword} />
    ),
    newPassword: <NewPassword onSuccess={handleLoginSuccess} />,
  };

  return (
    <div className="min-h-screen flex justify-center items-center overflow-hidden">
      <div className="w-full">{screens[currentScreen]}</div>
    </div>
  );
};
