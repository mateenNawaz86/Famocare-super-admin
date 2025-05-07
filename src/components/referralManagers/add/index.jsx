import { Form } from "../../../base-component/form/form";
import { useAddReferralManager } from "../../../hooks/referral-managers/useAddReferralManager";

export const AddReferralManager = () => {
  const { handleSubmit, errors, fields, onSubmit } = useAddReferralManager();

  return (
    <div className="bg-white rounded-[14px] border border-[#e0e0e0] py-[88px] px-[260px] mb-10">
      <Form
        formFields={fields}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
      />
    </div>
  );
};
