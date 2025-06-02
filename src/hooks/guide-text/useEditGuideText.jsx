import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { EditGuideTextFormFields } from "../../components/guideText/edit-fields";

export const useEditGuideText = () => {
  const { loading } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setError,
  } = useForm({});

  const fields = EditGuideTextFormFields(register, loading, control);

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
