import { useEffect } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { generateOtpValidationSchema } from "../../validation/auth-validation";
import { PhoneVarificationFormFields } from "../../components/auth/fields/login-fields";

export const usePhoneVerification = ({ onBack, onSuccess }) => {
  const navigate = useNavigate();
  const schema = generateOtpValidationSchema();
  const { loading, user } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(schema),
  });

  const enteredOtp = watch("otp");

  useEffect(() => {
    if (user?.user?.otp) {
      const otpString = user?.user?.otp?.toString();
      reset({ otp: otpString });
    }
  }, [user, reset]);

  const fields = PhoneVarificationFormFields(
    register,
    loading,
    control,
    onBack
  );

  const onSubmit = (data) => {
    try {
      // const expectedOtp = user?.user?.otp?.toString();
      // if (!expectedOtp) {
      //   toast.error("No OTP available to verify. Please try again.");
      //   return;
      // }
      // if (enteredOtp === expectedOtp) {
      //   toast.success("Login successfully!");
      //   navigate("/dashboard?status=ref-guide");
      // } else {
      //   toast.error("Invalid OTP. Please try again.");
      //   return;
      // }

      onSuccess();
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return {
    handleSubmit,
    errors,
    fields,
    onSubmit,
  };
};
