import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { generateNewPasswordValidationSchema } from "../../validation/auth-validation";
import { NewPasswordFormFields } from "../../components/auth/fields/new-password-fields";

export const useNewPassword = ({ onSuccess }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const schema = generateNewPasswordValidationSchema();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const fields = NewPasswordFormFields(register, loading, control);

  const onSubmit = async (data) => {
    try {
      // const res = await dispatch(logIn({ data: formData, setError }));

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
