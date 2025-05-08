import { Form } from "../../../base-component/form/form";
import { useAddSupportManager } from "../../../hooks/support-managers/useAddSupportManager";

export const AddVersionControl = () => {
  const { handleSubmit, errors, fields, onSubmit } = useAddSupportManager();

  return (
    <div className="bg-white rounded-[14px] border border-[#e0e0e0] py-[88px] px-[260px] mb-10">
      <p className="text-2xl font-medium">Add New Android Version</p>
      <Form
        formFields={fields}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
      />
    </div>
  );
};
