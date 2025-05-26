import { Form } from "../../base-component/form/form";
import { useEditGuideText } from "../../hooks/guide-text/useEditGuideText";

export const EditGuideText = () => {
  const { errors, fields, handleSubmit, onSubmit } = useEditGuideText();

  return (
    <div className="max-w-[70%] mx-auto mt-[90px] px-[43px] py-[38px] md:border md:border-[#CFD6E9] bg-white rounded-[14px] w-full mb-10">
      <p className="text-2xl font-medium mb-3 text-center">Update Guide Text</p>
      <Form
        formFields={fields}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
      />
    </div>
  );
};
