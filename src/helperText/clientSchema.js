import * as yup from "yup";

export const clientSchema = yup.object().shape({
  firstName: yup.string().required("Please enter your First name"),
  lastname: yup.string().required("Please enter your last name"),
  mobile: yup.string().required("Please enter your mobile number"),
  sendNotificationsBy: yup.string(),
  preferredlanguage: yup.string().required(),
  gender: yup.string().required(),
  referralSource: yup.string(),
  birthDay: yup.string().required(),
  birthMonth: yup.string().required(),
  birthYear: yup.string().required(),
  notes: yup.string(),
  area: yup.string(),
  block: yup.string(),
  street: yup.string(),
  avenue: yup.string(),
  houseNumber: yup.number(),
});
