import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { generateGuideTextValidationSchema } from "../../validation/schema";
import { EditGuideTextFormFields } from "../../components/guideText/edit-fields";

export const useEditGuideText = () => {
  const { loading } = useSelector((state) => state.auth);

  const schema = generateGuideTextValidationSchema();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
  });

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
