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
  let errors = { ...formFields };
  let isValid = true;

  const email = formFields.email.value.trim();
  const firstName = formFields.firstName.value.trim();
  const message = formFields.message.value.trim();
  const phone = formFields.phone.value.trim();

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
  } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    errors.email.error = "Please enter a valid email.";
    isValid = false;
  }
  if (!message) {
    errors.message.error = "Please enter a message.";
    isValid = false;
  }
  const numericPhone = phone.replace(/\D/g, ""); // Remove all non-numeric characters
  if (!numericPhone) {
    errors.phone.error = "Please enter phone number.";
    isValid = false;
  } else if (numericPhone.length < 11) {
    errors.phone.error =
      "Please enter a valid phone number (at least 10 digits).";
    isValid = false;
  }
  return { isValid, errors };
};
