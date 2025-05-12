import { Field } from "../../../utils/static";

export const NewPasswordFormFields = (register, loading, onForgotPassword) => {
  let formField = [
    {
      containerClass: "mb-[22px]",
      field: {
        type: Field.input,
        id: "newPassword",
        name: "newPassword",
        inputType: "password",
        placeholder: "New Password",
        className: "w-full",
        svg: `<svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5014 9.94033H15.5343V6.53486C15.5342 2.93159 12.6027 0 8.99937 0C5.39619 0 2.4646 2.93159 2.4646 6.53491V9.94038H1.49756C0.733106 9.94038 0.113281 10.5601 0.113281 11.3246V22.6157C0.113281 23.3803 0.733057 24 1.49756 24H16.5014C17.2658 24 17.8855 23.3803 17.8855 22.6157V11.3246C17.8855 10.5601 17.2658 9.94033 16.5014 9.94033ZM10.4728 19.8559H7.52607L8.05347 17.3428C7.56025 17.029 7.23081 16.4809 7.23081 15.853C7.23081 14.8763 8.0227 14.0845 8.99941 14.0845C9.97617 14.0845 10.7679 14.8763 10.7679 15.853C10.7679 16.4809 10.4386 17.029 9.94541 17.3427L10.4728 19.8559ZM13.2025 9.94033H4.79629V6.53486C4.79629 4.21704 6.68169 2.33169 8.99941 2.33169C11.3172 2.33169 13.2025 4.21709 13.2025 6.53486V9.94033Z" fill="#055860"/>
</svg>
`,
        register,
      },
    },
    {
      containerClass: "mb-0",
      field: {
        type: Field.input,
        id: "newPassword",
        name: "newPassword",
        inputType: "password",
        placeholder: "Confirm New Password",
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
        text: "Confirm",
        inputType: "submit",
        className:
          "rounded-[6px] md:w-[309px] h-[42px] bg-[#055860] font-bold",
        loading,
      },
    },
  ];

  return formField;
};
