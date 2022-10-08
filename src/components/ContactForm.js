import { Button, Label, Col, FormGroup } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { validateContactForm } from "../utils/validateContactForm";

const ContactForm = () => {
   const handleSubmit = (values, { resetForm }) => {
      console.log("form values:", values);
      console.log("in JSON format:", JSON.stringify(values));
      resetForm();
   };
   return (
      <Formik
         initialValues={{
            firstName: "",
            lastName: "",
            phoneNum: "",
            email: "",
            agree: false,
            contactType: "By phone",
            feedback: "",
         }}
         onSubmit={handleSubmit}
         validate={validateContactForm}
      >
         <Form>
            <FormGroup row>
               <Label htmlFor="firstName" md="2">
                  Name:
               </Label>
               <Col md="5">
                  <Field
                     name="firstName"
                     placeholder="First"
                     className="form-control"
                  />
                  <ErrorMessage name="firstName">
                     {(msg) => <p className="text-danger">{msg}</p>}
                  </ErrorMessage>
               </Col>
               <Col md="5">
                  <Field
                     name="lastName"
                     placeholder="Last"
                     className="form-control"
                  />
                  <ErrorMessage name="lastName">
                     {(msg) => <p className="text-danger">{msg}</p>}
                  </ErrorMessage>
               </Col>
            </FormGroup>
            <FormGroup row>
               <Label htmlFor="email" md="2">
                  Email:
               </Label>
               <Col md="10">
                  <Field
                     name="email"
                     placeholder="Email"
                     type="email"
                     className="form-control"
                  />
                  <ErrorMessage name="email">
                     {(msg) => <p className="text-danger">{msg}</p>}
                  </ErrorMessage>
               </Col>
            </FormGroup>
            <FormGroup row>
               <Label check md={{ size: 10, offset: 2 }}>
                  <Field
                     name="newsletter"
                     type="checkbox"
                     className="form-check-input"
                  />{" "}
                  Check to receive a newsletter
               </Label>
            </FormGroup>
            <FormGroup row>
               <Label htmlFor="phone" md="2">
                  Phone:
               </Label>
               <Col md="10">
                  <Field
                     name="phone"
                     placeholder="Phone Number"
                     className="form-control"
                  />
                  <ErrorMessage name="phone">
                     {(msg) => <p className="text-danger">{msg}</p>}
                  </ErrorMessage>
               </Col>
            </FormGroup>
            <FormGroup row>
               <Label htmlFor="feedback" md="2">
                  Your Feedback
               </Label>
               <Col md="10">
                  <Field
                     name="feedback"
                     as="textarea"
                     rows="6"
                     className="form-control"
                  />
               </Col>
            </FormGroup>
            <FormGroup row>
               <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                     Send Feedback
                  </Button>
               </Col>
            </FormGroup>
         </Form>
      </Formik>
   );
};

export default ContactForm;
