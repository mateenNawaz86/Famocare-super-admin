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

export const signup = {
  imageUrl: "imageUrl",
  name: "name",
  country: "country",
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

export const generateSignUpValidationSchema = () => {
  return yup.object().shape({
    [signup.imageUrl]: yup.string().required("This field is required"),
    [signup.name]: yup.string().required("This field is required"),
    [signup.country]: yup.string().required("This field is required"),
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
