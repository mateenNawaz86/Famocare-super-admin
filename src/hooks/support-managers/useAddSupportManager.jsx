import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { ProfileSettingFormFields } from "../../components/profileSetting/profile-setting-fields";
import { generateProfileSettingValidationSchema } from "../../validation/auth-validation";

export const useAddSupportManager = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, errorData } = useSelector((state) => state.auth);
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

  const fields = ProfileSettingFormFields(register, loading, control);

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
