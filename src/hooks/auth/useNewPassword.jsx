import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { NewPasswordFormFields } from "../../components/auth/fields/new-password-fields";

export const useNewPassword = ({ onSuccess }) => {
  const { loading } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setError,
  } = useForm({});

  const fields = NewPasswordFormFields(register, loading, control);

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
