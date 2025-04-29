import { SignUp } from "./screens/sign-up";
import { useEffect, useState } from "react";
import { Login } from "./screens/login-screen";
import { LandingPage } from "./screens/landing-page";
import { PhoneVarification } from "./screens/phone-verification";
import { ForgotPassword } from "./screens/forgot-password";

export const Auth = () => {
  const [currentScreen, setCurrentScreen] = useState("landing");

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentScreen("login");
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleSignupSuccess = () => {
    setCurrentScreen("login");
  };

  const handleLoginSuccess = () => {
    setCurrentScreen("phone");
  };

  const handleBack = () => {
    setCurrentScreen("forgotPassword");
  };

  const handleForgotPassword = () => {
    setCurrentScreen("forgotPassword");
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
      <PhoneVarification onBack={handleBack} onSignUp={handleSignupSuccess} />
    ),
  };

  return <div className="my-[150px]">{screens[currentScreen]}</div>;
};
