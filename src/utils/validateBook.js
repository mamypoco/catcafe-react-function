export const validateBook = (values) => {
   const errors = {};

   if (!values.firstName) {
      errors.firstName = "Required";
   } else if (values.firstName.length < 2) {
      errors.firstName = "Must be at least  2 characters.";
   } else if (values.firstName.length > 15) {
      errors.firstName = "Must be 15 character or less.";
   }

   if (!values.lastName) {
      errors.lastName = "Required";
   } else if (values.lastName.length < 2) {
      errors.lastName = "Must be at least  2 characters.";
   } else if (values.lastName.length > 15) {
      errors.lastName = "Must be 15 character or less.";
   }

   if (!values.date) {
      errors.date = "required";
   }

   if (!values.from) {
      errors.from = "required";
   }

   if (!values.to) {
      errors.to = "required";
   }

   if (!values.email.includes("@")) {
      errors.email = "email should contain a @.";
   }
   return errors;
};
