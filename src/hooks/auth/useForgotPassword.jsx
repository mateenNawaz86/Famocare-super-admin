import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { ForgotPasswordFormFields } from "../../components/auth/fields/forgot-password-fields";

export const useForgotPassword = ({ onBack, onSuccess }) => {
  const { loading } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({});

  const fields = ForgotPasswordFormFields(register, loading);

  const onSubmit = async (data) => {
    try {
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
