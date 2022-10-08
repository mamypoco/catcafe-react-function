import AdoptmeImg from "../assets/images/adoptme.jpg";
import { Container, Row, Col } from "reactstrap";

const Adoptcat = () => {
   return (
      <Container>
         <Row className="row-content mx-auto">
            <Col>
               <h1 className="header">Adopt a cat</h1>
               <h2>
                  Looking to expand your family with a new cat from The Cat
                  Cocoa?
               </h2>
               <Row className="row-content">
                  <Col md="6">
                     <p>
                        We have partnered with{" "}
                        <a href="https://www.seattlehumane.org/">
                           Seattle Humaine Society
                        </a>
                        . The Cat Coacoa is starting sending cats to good homes.
                        We have kittens, adults, and senior cats including
                        special needs cats, who would be missing tails, cats
                        with one eye, blind cats, and cats with other medical
                        conditions. We generally do not receive any pedigreed
                        cats, because there are many cat rescue groups that
                        focus on these animals. However, The Cat Cocoa has
                        adopted various mixes of Persians, Snowshoes, Maine
                        Coons, Siamese, and other breeds.
                     </p>
                  </Col>
                  <Col md="6">
                     <img
                        className="img-fluid w-100 mx-auto"
                        src={AdoptmeImg}
                        alt="A cat holding a cardboard that says Adopt Me"
                     />
                  </Col>
               </Row>

               <Row className="row-content">
                  <Col md="5" sm="12">
                     <h3>
                        Here are step-by-step guide to our adoption process.
                     </h3>
                  </Col>
                  <Col md="7" sm="12">
                     <p>
                        Step 1: Visit a trip with the kitties and try to find
                        your purrrfect match. Talk with the cafe worker about
                        the kitty you are interested in. Step 2: Ask for
                        adaption form at Cat Cocoa. Complete our ADOPTION
                        APPLICATION. Step 3: Please note that our kitties are
                        very popular and each cat receives many applicants.
                        Applicants are reviewed by our team and those that
                        appear to be the best match will move onto the interview
                        process. After we complete the interviews of 5-10
                        candidates a lucky adopter will be chosen! Each adopter
                        is matched to the specific cat and human wants and
                        needs. Step 4: Get your house setup for your newest
                        family member! We will let you know all their favorite
                        things to help make a smooth transition. Step 5: Once
                        your house is all set up, we will schedule an adoption
                        day! Our adoption process typically takes between 4-8
                        weeks. We do not do same-day adoptions.
                     </p>
                  </Col>
               </Row>
            </Col>
         </Row>
      </Container>
   );
};

export default Adoptcat;
