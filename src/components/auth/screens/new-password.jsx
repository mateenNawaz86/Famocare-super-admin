import logo from "../../../assets/svgs/logo.svg";
import { Form } from "../../../base-component/form/form";
import { useNewPassword } from "../../../hooks/auth/useNewPassword";

export const NewPassword = ({ onSuccess }) => {
  const { handleSubmit, errors, fields, onSubmit } = useNewPassword({
    onSuccess,
  });

  return (
    <div className="bg-white flex w-full">
      <div className="flex justify-center items-center w-1/2">
        <img src={logo} alt="logo" className="h-[240px]" />
      </div>

      <div className="flex flex-col justify-center gap-y-[114px] w-1/2 px-[93px] py-[95px] border-l-2 border-[#ccc]">
        <div className="flex flex-col items-center gap-y-[22px]">
          <h2 className="text-[48px] font-normal">New Password</h2>
          <p className="text-sm font-bold">Please Create a New Password.</p>
        </div>
        <Form
          formFields={fields}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          errors={errors}
        />
      </div>
    </div>
  );
};
