import * as yup from "yup";

//here we can find data initializations for our form
//to use them as validation and send them to somewhere...
export const clientSchema = yup.object().shape({
  firstName: yup.string().required("Please enter your First name"),
  lastName: yup.string().required("Please enter your last name"),
  mobile: yup.string().required("Please enter your mobile number"),
  sendNotificationsBy: yup.string(),
  preferredLanguage: yup
    .string()
    .required()
    .required("Please select preferred language "),
  gender: yup.string().required("Please select your gender"),
  referralSource: yup.string(),
  birthDay: yup.string().required().required("Please select your gender"),
  birthMonth: yup.string().required("Please select your birthday Month"),
  birthYear: yup.string().required("Please select your birth year"),
  notes: yup.string(),
  area: yup.string(),
  block: yup.string(),
  street: yup.string(),
  avenue: yup.string(),
  houseNumber: yup.string(),
});
