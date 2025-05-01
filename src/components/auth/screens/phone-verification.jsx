import { useSelector } from "react-redux";
import logo from "../../../assets/svgs/logo.svg";
import { Form } from "../../../base-component/form/form";
import { usePhoneVerification } from "../../../hooks/auth/usePhoneVerification";

export const PhoneVarification = ({ onBack, onSuccess }) => {
  const { handleSubmit, errors, fields, onSubmit } = usePhoneVerification({
    onSuccess,
    onBack,
  });

  const { user } = useSelector((state) => state.auth);

  // const phoneCode = user.user?.phoneCode;
  // const phoneNo = user.user?.phoneNo;

  return (
    <div className="bg-white flex w-full">
      <div className="flex justify-center items-center w-1/2">
        <img src={logo} alt="logo" className="h-[240px]" />
      </div>

      <div className="flex flex-col justify-center gap-y-[114px] w-1/2 px-[162px] border-l-2 border-[#ccc]">
        <div className="flex flex-col items-center gap-y-[22px]">
          <h2 className="text-[48px] font-normal">Verification Code</h2>
          <p className="text-sm font-bold">
            Pleas enter the code send to your email
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
