//To open modal and use form function
import {
   Button,
   Modal,
   ModalHeader,
   ModalBody,
   FormGroup,
   Label,
   Row,
   Col,
} from "reactstrap";
import { useState } from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { validateBook } from "../utils/validateBook";

const BookModal = () => {
   const [modalOpen, setModalOpen] = useState(false);

   const handleSubmit = (values, { resetForm }) => {
      console.log("form values:", values);
      console.log("in JSON format:", JSON.stringify(values));
      resetForm();
      setModalOpen(modalOpen(false));
   };

   return (
      <>
         <Row className="row-content text-center">
            <Col mx-auto>
               <Button
                  outline
                  onClick={() => setModalOpen(true)}
                  className="btn-lg btn-dark text-white"
               >
                  Book Your visit
               </Button>
            </Col>
         </Row>
         <Modal isOpen={modalOpen}>
            <ModalHeader
               toggle={() => {
                  setModalOpen(false);
               }}
               //this is the X button to close.
            >
               Let's Book Your Visit
            </ModalHeader>
            <ModalBody>
               <Formik
                  initialValues={{
                     firstName: "",
                     lastName: "",
                     email: "",
                     numPeople: "",
                     date: "",
                     sTime: "",
                     eTime: "",
                  }}
                  onSubmit={handleSubmit}
                  validate={validateBook}
               >
                  <Form>
                     <FormGroup row>
                        <Label htmlFor="firstName" md="2">
                           Name
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
                        <Label htmlFor="email" md="5">
                           Email Address
                        </Label>
                        <Col md="7">
                           <Field
                              name="email"
                              placeholder="Email"
                              className="form-control"
                           />
                           <ErrorMessage name="email">
                              {(msg) => <p className="text-danger">{msg}</p>}
                           </ErrorMessage>
                        </Col>
                     </FormGroup>
                     <FormGroup row>
                        <Label htmlFor="numPeople" md="6">
                           Number of People
                        </Label>
                        <Col md="6">
                           <Field
                              name="numPeople"
                              as="select"
                              className="form-control"
                           >
                              <option>Select...</option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                              <option>6</option>
                              <option>7</option>
                           </Field>
                        </Col>
                     </FormGroup>
                     <FormGroup row>
                        <Label htmlFor="date" md="6">
                           Date of your visit
                        </Label>
                        <Col md="6">
                           <Field
                              name="date"
                              type="date"
                              className="form-control"
                           />
                           <ErrorMessage name="date">
                              {(msg) => <p className="text-danger">{msg}</p>}
                           </ErrorMessage>
                        </Col>
                     </FormGroup>
                     <FormGroup row>
                        <Label htmlFor="from" md="2">
                           From
                        </Label>
                        <Col>
                           <Field
                              name="from"
                              type="time"
                              placeholder="from"
                              className="form-control"
                           />
                           <ErrorMessage name="from">
                              {(msg) => <p className="text-danger">{msg}</p>}
                           </ErrorMessage>
                        </Col>
                        <Label htmlFor="from" md="2">
                           From
                        </Label>
                        <Col>
                           <Field
                              name="to"
                              type="time"
                              interval="1500"
                              placeholder="to"
                              className="form-control"
                           />
                           <ErrorMessage name="to">
                              {(msg) => <p className="text-danger">{msg}</p>}
                           </ErrorMessage>
                        </Col>
                     </FormGroup>
                     <FormGroup row>
                        <Col md={{ size: 10, offset: 2 }}>
                           <Button type="submit" value="submit" color="info">
                              Reserve Your Spot
                           </Button>
                        </Col>
                     </FormGroup>
                  </Form>
               </Formik>
            </ModalBody>
         </Modal>
      </>
   );
};

export default BookModal;
