import { Form } from "../../base-component/form/form";
import { BackIcon } from "../../assets/svgs/components/back-icon";
import { useProfileSetting } from "../../hooks/profile-setting/useProfileSetting";

export const ProfileSetting = () => {
  const { handleSubmit, errors, fields, onSubmit } = useProfileSetting();

  return (
    <div className="p-[22px] md:py-[88px] md:px-[260px] md:border md:border-[#CFD6E9] bg-white rounded-[14px] w-full mb-10">
      <div className="flex md:hidden flex-col gap-y-[18px]">
        <BackIcon />
      </div>
      <Form
        formFields={fields}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
      />
    </div>
  );
};
