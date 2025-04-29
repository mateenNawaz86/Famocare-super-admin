import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { logIn } from "../../api/slices/authSlice/auth";
import { generateForgotPasswordValidationSchema } from "../../validation/auth-validation";
import { ForgotPasswordFormFields } from "../../components/auth/fields/forgot-password-fields";

export const useForgotPassword = ({ onBack, onSuccess }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const schema = generateForgotPasswordValidationSchema();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    // resolver: yupResolver(schema),
  });

  const fields = ForgotPasswordFormFields(register, loading);

  const onSubmit = async (data) => {
    try {
      //   const res = await dispatch(logIn({ data: formData, setError }));

      onSuccess();
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  return {
    handleSubmit,
    errors,
    fields,
    onSubmit,
  };
};
