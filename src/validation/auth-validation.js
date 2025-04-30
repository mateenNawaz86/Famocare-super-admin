import * as yup from "yup";

export const login = {
  user: "phoneNo",
  password: "password",
};

export const newpassword = {
  newPassword: "newPassword",
  confirmNewPassword: "confirmNewPassword",
};

export const forgotpassword = {
  email: "email",
};

export const phoneVarification = {
  otp: "otp",
};

export const profileSetting = {
  image: "image",
  fullName: "fullName",
  userId: "userId",
  email: "email",
  password: "password",
  confirmPassword: "confirmPassword",
};

export const generateLoginValidationSchema = () => {
  return yup.object().shape({
    [login.phoneNo]: yup.string().required("This field is required"),
    [login.password]: yup.string().required("This field is required"),
  });
};

export const generateOtpValidationSchema = () => {
  return yup.object().shape({
    [phoneVarification.otp]: yup.string().required("This field is required"),
  });
};

export const generateProfileSettingValidationSchema = () => {
  return yup.object().shape({
    [profileSetting.image]: yup.string().required("This field is required"),
    [profileSetting.fullName]: yup.string().required("This field is required"),
    [profileSetting.userId]: yup.string().required("This field is required"),
    [profileSetting.email]: yup.string().required("This field is required"),
    [profileSetting.password]: yup.string().required("This field is required"),
    [profileSetting.confirmPassword]: yup
      .string()
      .required("This field is required"),
  });
};

export const generateForgotPasswordValidationSchema = () => {
  return yup.object().shape({
    [forgotpassword.email]: yup.string().required("This field is required"),
  });
};

export const generateNewPasswordValidationSchema = () => {
  return yup.object().shape({
    [newpassword.newPassword]: yup.string().required("This field is required"),
    [newpassword.confirmNewPassword]: yup
      .string()
      .required("This field is required"),
  });
};
