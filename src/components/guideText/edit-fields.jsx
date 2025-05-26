import { Field } from "../../utils/static";

export const EditGuideTextFormFields = (register, loading, control) => {
  let formField = [
    {
      containerClass: "mb-[22px]",
      field: {
        type: Field.input,
        id: "title",
        name: "title",
        inputType: "text",
        placeholder: "Title",
        className: "w-full pl-4",
        register,
      },
    },
    {
      containerClass: "mb-[22px]",
      label: {
        text: `Text`,
        htmlFor: "content",
        className: "mb-3 text-[#000] text-base font-normal",
      },
      field: {
        type: Field.input,
        id: "description",
        name: "description",
        inputType: "text",
        placeholder: "Description",
        className: "w-full pl-4",
        register,
      },
    },

    {
      containerClass: "mb-0 mt-[126px] flex items-center justify-center",
      field: {
        type: Field.button,
        id: "button",
        text: "Submit And Publish",
        inputType: "submit",
        className: "rounded-[6px] bg-[#055860] w-[309px] h-[50px]",
        loading,
      },
    },
  ];

  return formField;
};
