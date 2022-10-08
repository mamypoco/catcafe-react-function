export const validateContactForm = (values) => {
   const errors = {};

   if (!values.firstName) {
      errors.firstName = "Required";
   } else if (values.firstName.length < 2) {
      errors.firstName = "Must be at least 2 characters.";
   } else if (values.firstName.length > 15) {
      errors.firstName = "Must be 15 character or less.";
   }

   if (!values.lastName) {
      errors.lastName = "Required";
   } else if (values.lastName.length < 2) {
      errors.lastName = "Must be at least 2 characters.";
   } else if (values.lastName.length > 15) {
      errors.lastName = "Must be 15 characters or less";
   }

   const reg = /^[0-9]*$/;
   if (!reg.test(values.phone)) {
      errors.phone = "The phone number should contain only numbers.";
   } else if (values.phone.length < 10) {
      errors.phone = "Please enter area codes so they are at least 10 digits";
   }

   if (!values.email.includes("@")) {
      errors.email = "email should contain a @.";
   }
   return errors;
};
