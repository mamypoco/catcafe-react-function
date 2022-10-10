import { Link } from "react-router-dom";
import { Container, Button, Col, Row, Form, FormGroup } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faInstagram,
   faFacebook,
   faTwitter,
   faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import catinCocoa from "../assets/images/cat_in_cocoa.jpg";

const Footer = () => {
   return (
      <footer className="site-footer">
         <Container>
            <Row>
               <Col lg="5" md="6" mt-3>
                  <p className="footer-text">
                     Join newsletter for future adoption event:
                  </p>
                  <Form>
                     <FormGroup row>
                        <Col md="6">
                           <input
                              type="text"
                              className="form-control"
                              name="emailNews"
                              id="emailNews"
                              placeholder="Your Email"
                           />
                        </Col>
                        <Col md="4">
                           <Button color="info">Signup</Button>
                        </Col>
                     </FormGroup>
                  </Form>
               </Col>
               <Col md="6" lg="4" className="social-media-icons-white">
                  <a href="http://instagram.com/">
                     <FontAwesomeIcon icon={faInstagram} />
                  </a>{" "}
                  <a href="http://www.facebook.com/">
                     <FontAwesomeIcon icon={faFacebook} />
                  </a>{" "}
                  <a href="http://twitter.com/">
                     <FontAwesomeIcon icon={faTwitter} />
                  </a>{" "}
                  <a href="http://youtube.com/">
                     <FontAwesomeIcon icon={faYoutube} />
                  </a>
               </Col>

               <Row className="row">
                  <Col lg="4" md="6" sm="12">
                     <ul className="list-unstyled">
                        <li>
                           <Link className="footer-menu" to="/home">
                              Home
                           </Link>
                        </li>
                        <li>
                           <Link className="footer-menu" to="/aboutus">
                              About Us
                           </Link>
                        </li>
                        <li>
                           <Link className="footer-menu" to="/cafemenu">
                              Cafe Menu
                           </Link>
                        </li>
                        <li>
                           <Link className="footer-menu" to="/adoptcat">
                              Adopt a cat
                           </Link>
                        </li>
                        <li>
                           <Link className="footer-menu" to="/contactus">
                              Contact Us
                           </Link>
                        </li>
                     </ul>
                  </Col>

                  <Col lg="4" md="6" className="footer-text text-center">
                     <p>
                        12345 NE 123rd St, Kirkland WA 98034
                        <br />
                        1-206-465-1234
                        <br />
                        {/* </a> */}
                        purr@catcocoa.com
                        <br />
                        Cat Cocoa All rights reserved.
                     </p>
                  </Col>
                  <Col lg="4" className="text-center">
                     <img src={catinCocoa} width="100" alt="A cat in cocoa" />
                  </Col>
               </Row>
            </Row>
         </Container>
      </footer>
   );
};

export default Footer;
