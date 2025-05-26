import * as yup from "yup";

export const guideText = {
  title: "title",
  description: "description",
};

export const generateGuideTextValidationSchema = () => {
  return yup.object().shape({
    [guideText.title]: yup.string().required("This field is required"),
    [guideText.description]: yup.string().required("This field is required"),
  });
};
