import { isPhoneValid } from "helpers/methods";

export const contactUsForm = () => {
  return {
    firstName: {
      value: "",
      error: "",
    },
    email: {
      value: "",
      error: "",
    },
    phone: {
      value: "",
      error: "",
    },
    message: {
      value: "",
      error: "",
    },
  };
};

export const validateData = (formFields: any) => {
  let errors = formFields;
  let isValid = true;
  const email = formFields.email.value;
  const firstName = formFields.firstName.value;
  const message = formFields.message.value;
  const phone = formFields.phone.value;
  if (!email && !firstName && !message && !phone) {
    errors.firstName.error = "Please enter first name.";
    errors.email.error = "Please enter email.";
    errors.phone.error = "Please enter phone number.";
    errors.message.error = "Please enter message.";
    isValid = false;
  }
  if (!firstName) {
    errors.firstName.error = "Please enter first name.";
    isValid = false;
  }
  if (!email) {
    errors.email.error = "Please enter email.";
    isValid = false;
  }
  if (!message) {
    errors.message.error = "Please enter message.";
    isValid = false;
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    errors.email.error = "Please enter valid email.";
    isValid = false;
  }
  if (!isPhoneValid(phone)) {
    errors.phone.error = "Please enter phone number.";
    isValid = false;
  }
  return { isValid, errors };
};
