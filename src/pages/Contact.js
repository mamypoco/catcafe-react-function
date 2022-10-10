import { Container, Col, Row } from "reactstrap";
import ContactForm from "../components/ContactForm";

const Contact = () => {
   return (
      <Container>
         <Row className="row-content">
            <Col>
               <h1 className="header">Contact us</h1>
            </Col>
         </Row>
         <Row className="row-content">
            <Col className="text-center">
               <p>
                  12345 NE 123rd St, <br />
                  Kirkland WA 98034 <br />
                  206-465-1234 <br />
                  purr@catcocoa.com
               </p>
               <h3>Hours</h3>
               <p>
                  Monday - Friday: 9am - 6pm (last visit at 5pm) <br />
                  Saturday & Sunday: 10am - 4pm (last visit at 3pm)
               </p>
            </Col>
         </Row>
         <Row className="row-content">
            <Col className="mx-auto">
               <h5 md={{ size: 12, offset: 2 }}>
                  For any questions or feedback, please contact through the form
                  and we'll reply as soon as we can.
               </h5>
            </Col>
         </Row>
         <Row className="row-content">
            <ContactForm />
         </Row>
      </Container>
   );
};

export default Contact;
