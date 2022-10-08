import { Label, Container, Col, Row, Form, Button } from "reactstrap";

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
                  1234 NE 123rd St, Kirkland WA 98034 <br />
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
            <Col className="mx-auto" md="8">
               <h5>
                  For any questions or feedback, please contact through the form
                  and we’ll reply as soon as we can.
               </h5>
            </Col>
         </Row>
      </Container>
   );
};

export default Contact;
