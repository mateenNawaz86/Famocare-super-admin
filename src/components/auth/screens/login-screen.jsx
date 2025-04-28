import logo from "../../../assets/svgs/logo.svg";
import { Form } from "../../../base-component/form/form";
import { useLogin } from "../../../hooks/auth/useLogin";

export const Login = ({ onLoginSuccess, onSignUp }) => {
  const { handleSubmit, errors, fields, onSubmit } = useLogin({
    onLoginSuccess,
    onSignUp,
  });

  return (
    <div className="bg-white px-[93px] py-[150px] flex justify-between items-center">
      <img src={logo} alt="logo" className="pr-[93px]" />

      <div className="flex flex-col gap-y-[114px] pl-[93px] border-l border-l-[#ccc]">
        <div className="flex flex-col items-center gap-y-1">
          <h2 className="text-[48px] font-normal">Welcome</h2>
          <p className="text-sm font-bold">PLASE LOGIN TO ADMIN DASHBOARD.</p>
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
