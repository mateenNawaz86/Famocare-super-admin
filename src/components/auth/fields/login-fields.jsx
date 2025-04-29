import { Field } from "../../../utils/static";

export const LoginContactFormFields = (register, loading, control) => {
  let formField = [
    {
      containerClass: "mb-[22px]",
      field: {
        type: Field.input,
        id: "name",
        name: "name",
        inputType: "text",
        placeholder: "User Name",
        className: "w-full",
        svg: `<svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.0009 12.4626C14.4295 12.4626 17.2322 9.6599 17.2322 6.2313C17.2322 2.80271 14.4295 0 11.0009 0C7.57231 0 4.76965 2.80271 4.76965 6.2313C4.76965 9.6599 7.57236 12.4626 11.0009 12.4626ZM21.6948 17.4422C21.5315 17.034 21.3139 16.6531 21.069 16.2993C19.8173 14.449 17.8853 13.2245 15.7085 12.9252C15.4364 12.898 15.137 12.9523 14.9193 13.1156C13.7765 13.9592 12.416 14.3945 11.001 14.3945C9.58595 14.3945 8.22543 13.9592 7.08257 13.1156C6.86486 12.9523 6.56554 12.8707 6.29345 12.9252C4.11658 13.2245 2.15741 14.449 0.932931 16.2993C0.688035 16.6531 0.470327 17.0613 0.307098 17.4422C0.225483 17.6055 0.252671 17.7959 0.334285 17.9592C0.551993 18.3402 0.824077 18.7211 1.06897 19.0477C1.44991 19.5647 1.85809 20.0272 2.32069 20.4626C2.70163 20.8435 3.13699 21.1973 3.57241 21.551C5.72205 23.1565 8.3071 24 10.9738 24C13.6404 24 16.2255 23.1565 18.3751 21.551C18.8105 21.2245 19.2458 20.8435 19.6268 20.4626C20.0622 20.0272 20.4976 19.5646 20.8786 19.0477C21.1506 18.6939 21.3956 18.3402 21.6132 17.9592C21.7492 17.7959 21.7764 17.6054 21.6948 17.4422Z" fill="#055860"/>
</svg>
`,
        register,
      },
    },
    {
      containerClass: "mb-0",
      field: {
        type: Field.input,
        id: "password",
        name: "password",
        inputType: "password",
        placeholder: "Password",
        svg: `<svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5014 9.94033H15.5343V6.53486C15.5342 2.93159 12.6027 0 8.99937 0C5.39619 0 2.4646 2.93159 2.4646 6.53491V9.94038H1.49756C0.733106 9.94038 0.113281 10.5601 0.113281 11.3246V22.6157C0.113281 23.3803 0.733057 24 1.49756 24H16.5014C17.2658 24 17.8855 23.3803 17.8855 22.6157V11.3246C17.8855 10.5601 17.2658 9.94033 16.5014 9.94033ZM10.4728 19.8559H7.52607L8.05347 17.3428C7.56025 17.029 7.23081 16.4809 7.23081 15.853C7.23081 14.8763 8.0227 14.0845 8.99941 14.0845C9.97617 14.0845 10.7679 14.8763 10.7679 15.853C10.7679 16.4809 10.4386 17.029 9.94541 17.3427L10.4728 19.8559ZM13.2025 9.94033H4.79629V6.53486C4.79629 4.21704 6.68169 2.33169 8.99941 2.33169C11.3172 2.33169 13.2025 4.21709 13.2025 6.53486V9.94033Z" fill="#055860"/>
</svg>

`,
        className: "w-full",
        register,
      },
    },

    {
      containerClass: "mb-0 mt-[106px] flex items-center justify-center",
      field: {
        type: Field.button,
        id: "button",
        text: "Login",
        inputType: "submit",
        className:
          "rounded-[6px] md:w-[309px] h-[42px] hover:bg-none bg-[#055860] font-bold",
        loading,
      },
    },

    {
      containerClass: "mt-[43px]",
      field: {
        type: Field.span,
        text: `FORGOTTON YOUR PASSWORD?`,
        containerClassName:
          "text-xs text-primary font-semibold text-center cursor-pointer",
        id: "forgotPassword",
      },
    },
  ];

  return formField;
};

export const PhoneVarificationFormFields = (
  register,
  loading,
  control,
  onBack
) => {
  let formField = [
    {
      containerClass: "mb-[35px]",
      field: {
        type: Field.otpField,
        id: "otp",
        name: "otp",
        control,
      },
    },
    {
      field: {
        type: Field.span,
        text: "Did not receive a code?",
        containerClassName:
          "text-sm md:text-[22px] text-dark font-medium text-center hidden md:block",
        id: "info",
      },
    },

    {
      containerClass:
        "mb-0 mt-[35px] hidden md:flex items-center justify-center",
      field: {
        type: Field.button,
        id: "button",
        text: "RESEND",
        inputType: "button",
        onClick: onBack,
        className: "bg-none w-fit hover:bg-none text-primary",
        loading,
      },
    },

    {
      containerClass: "mb-0 mt-10",
      field: {
        type: Field.button,
        id: "button",
        text: "Verify Code",
        inputType: "submit",
        className: "rounded-xl w-full h-[50px] hover:bg-none",
        loading,
      },
    },

    {
      field: {
        type: Field.span,
        text: "Could not receive a verification code yet?",
        containerClassName:
          "text-sm md:text-[22px] text-dark font-medium text-center mt-[45px] md:hidden",
        id: "info",
      },
    },
    {
      field: {
        type: Field.span,
        text: "Resend code after 57s",
        containerClassName:
          "text-sm md:text-[22px] text-dark font-medium text-center mt-3 md:hidden",
        id: "info",
      },
    },
  ];

  return formField;
};
