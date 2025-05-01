import logo from "../../../assets/svgs/logo.svg";
import { Form } from "../../../base-component/form/form";
import { useForgotPassword } from "../../../hooks/auth/useForgotPassword";

export const ForgotPassword = ({ onBack, onSuccess }) => {
  const { handleSubmit, errors, fields, onSubmit } = useForgotPassword({
    onBack,
    onSuccess,
  });

  return (
    <div className="bg-white flex w-full">
      <div className="flex justify-center items-center w-1/2">
        <img src={logo} alt="logo" className="h-[240px]" />
      </div>

      <div className="flex flex-col justify-center gap-y-[114px] w-1/2 px-[93px] border-l-2 border-[#ccc]">
        <div className="flex flex-col items-center gap-y-[22px]">
          <h2 className="text-[48px] font-normal">Forgot Your Password?</h2>
          <p className="text-sm font-bold">
            Please confirm your email address below and we will send you a
            verification code.
          </p>
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
