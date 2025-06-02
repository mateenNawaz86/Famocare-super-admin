import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { PhoneVarificationFormFields } from "../../components/auth/fields/login-fields";

export const usePhoneVerification = ({ onBack, onSuccess }) => {
  const { loading, user } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({});

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
