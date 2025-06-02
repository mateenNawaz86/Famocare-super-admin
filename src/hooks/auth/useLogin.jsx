import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { LoginContactFormFields } from "../../components/auth/fields/login-fields";

export const useLogin = ({ onLoginSuccess, onForgotPassword }) => {
  const { loading } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setError,
  } = useForm({});

  const fields = LoginContactFormFields(
    register,
    loading,
    control,
    onForgotPassword
  );

  const onSubmit = async (data) => {};

  return {
    handleSubmit,
    errors,
    fields,
    onSubmit,
  };
};
