import { Field } from "../../../utils/static";

export const AddVersionControlFormFields = (register, loading, control) => {
  let formField = [
    {
      containerClass: "mb-[22px]",
      label: {
        text: "Version number",
        htmlFor: `colour`,
        className: "mb-3 font-semibold",
      },
      field: {
        type: Field.input,
        id: "version number",
        name: "version number",
        inputType: "text",
        placeholder: "Enter Version Number",
        className: "w-full pl-2",
        register,
      },
    },
    {
      containerClass: "mb-[22px]",
      label: {
        text: "Release Date",
        htmlFor: `colour`,
        className: "mb-3 font-semibold",
      },
      field: {
        type: Field.input,
        id: "Release Date",
        name: "Release Date",
        inputType: "text",
        placeholder: "dd/mm/yyyy",
        className: "w-full pl-2",
        register,
      },
    },

    {
      containerClass: "mb-[22px]",
      label: {
        text: "Version Status",
        htmlFor: `colour`,
        className: "mb-3 font-semibold",
      },
      field: {
        className: "!px-4 !border-[#BFBFBF] focus:!border-primary",
        type: Field.select,
        id: "Version Status",
        name: "Version Status",
        options: [{ value: "Lates", label: "Lates" }],
        control,
      },
    },

    {
      containerClass: "mb-[22px]",
      label: {
        text: "Description",
        htmlFor: `colour`,
        className: "mb-3 font-semibold",
      },
      field: {
        type: Field.input,
        id: "Description",
        name: "Description",
        inputType: "text",
        placeholder: "Enter Description here...",
        className: "w-full pl-2",
        register,
      },
    },

    {
      containerClass: "mb-0 mt-[100px] flex items-center justify-center",
      field: {
        type: Field.button,
        id: "button",
        text: "Add Version",
        inputType: "submit",
        className:
          "rounded-[6px] bg-[#055860] w-[309px] h-[50px]",
        loading,
      },
    },
  ];

  return formField;
};
