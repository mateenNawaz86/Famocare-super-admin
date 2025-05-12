import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";
import { generateProfileSettingValidationSchema } from "../../validation/auth-validation";
import { AddVersionControlFormFields } from "../../components/versionControl/add/add-version-control-fields";

export const useAddVersionControl = () => {
  const { loading } = useSelector((state) => state.auth);
  const schema = generateProfileSettingValidationSchema();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const fields = AddVersionControlFormFields(register, loading, control);

  const onSubmit = async (data) => {
    try {
      console.log("Submitting data:", data);
    } catch (error) {
      console.error("Sign up error:", error);
    }
  };

  return {
    handleSubmit,
    errors,
    fields,
    onSubmit,
  };
};
