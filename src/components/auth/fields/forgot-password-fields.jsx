import { Field } from "../../../utils/static";

export const ForgotPasswordFormFields = (register, loading) => {
  let formField = [
    {
      containerClass: "mb-[22px]",
      field: {
        type: Field.input,
        id: "email",
        name: "email",
        inputType: "email",
        placeholder: "Email",
        className: "w-full pl-14",
        svg: `<svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.5502 9.99609L13.5402 12.0129C12.7251 12.8309 11.2909 12.8485 10.4582 12.0129L8.44802 9.99609L1.22852 17.239C1.49725 17.3633 1.79355 17.4375 2.10855 17.4375H21.8898C22.2048 17.4375 22.501 17.3634 22.7696 17.2391L15.5502 9.99609Z" fill="#055860"/>
<path d="M21.8906 0.5625H2.10938C1.79438 0.5625 1.49808 0.636656 1.22944 0.760922L8.94398 8.50106C8.9445 8.50158 8.94511 8.50167 8.94563 8.50219C8.94594 8.50252 8.94616 8.50295 8.94623 8.50341L11.4547 11.0201C11.7211 11.2866 12.279 11.2866 12.5454 11.0201L15.0533 8.50383C15.0533 8.50383 15.054 8.5027 15.0545 8.50219C15.0545 8.50219 15.0556 8.50158 15.0561 8.50106L22.7705 0.760875C22.5018 0.636563 22.2056 0.5625 21.8906 0.5625ZM0.224344 1.74431C0.0853125 2.02547 0 2.33756 0 2.67188V15.3281C0 15.6624 0.0852187 15.9745 0.224297 16.2557L7.45631 9.00023L0.224344 1.74431ZM23.7757 1.74422L16.5437 9.00023L23.7757 16.2558C23.9147 15.9746 24 15.6625 24 15.3281V2.67188C24 2.33747 23.9147 2.02538 23.7757 1.74422Z" fill="#055860"/>
</svg>

`,
        register,
      },
    },

    {
      containerClass: "mb-0 mt-[106px] flex items-center justify-center",
      field: {
        type: Field.button,
        id: "button",
        text: "Send",
        inputType: "submit",
        className:
          "rounded-[6px] md:w-[309px] h-[42px] hover:bg-none bg-[#055860] font-bold",
        loading,
      },
    },
  ];

  return formField;
};
