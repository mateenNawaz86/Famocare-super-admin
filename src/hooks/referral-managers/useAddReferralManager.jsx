import { useForm } from "react-hook-form";
import { ProfileSettingFormFields } from "../../components/profileSetting/profile-setting-fields";
import { useSelector } from "react-redux";

export const useAddReferralManager = () => {
  const { loading } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({});

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
