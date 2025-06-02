import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { AddVersionControlFormFields } from "../../components/versionControl/add/add-version-control-fields";

export const useAddVersionControl = () => {
  const { loading } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({});

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
