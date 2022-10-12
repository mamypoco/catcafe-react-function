// import HomeImg from "../assets/images/cat_and_coffee.jpg";
import { Container, Row, Col } from "reactstrap";
import BookModal from "../components/BookModal";
// import SliderUncontrolled from "../components/SliderUncontrolled";
// import SliderClass from "../components/SliderClass";
import Slider from "../components/Slider";

const Home = () => {
   return (
      <Container>
         <Row className="row-content">
            <Col className="text-center">
               <h1 className="header">Seattle Eastsides' first cat cafe</h1>
               {/* <img
                  src={HomeImg}
                  alt="A cat with coffee laying on the yellow blanket"
                  className="img-fluid"
               /> */}
               <Slider />
               <BookModal />
            </Col>
         </Row>
         <Row className="row-content">
            <Col className="col">
               <h2>
                  We provide you with a chance to relax and joy of purr therapy.
               </h2>

               <p>
                  We are located at Finn Hill neignborhood where you can easily
                  visit on foot if you are aready resident here. Our space is
                  fully customized for catas to play, fetch and enternain
                  humans. Our fresh coffee and pastries are locally made. If you
                  feel like some furry love, or need a break from
                  work-from-home, please come stop by!{" "}
               </p>

               <p>
                  The cat lounge fee is $7.00 up to hour and the capacity is 7.
                  Walk-in is always welcome without reservation. For ordering
                  drink and foo menu only, you do not need to book a visit. When
                  under 7 people in the launge, feel free to come in to the
                  laounge. If you want to reserve the spot in advance, please
                  book a visit via the button to make sure you are in.{" "}
               </p>
            </Col>
         </Row>

         <Row className="row-content text-center">
            <Col>
               <h3>Cafe Hours:</h3>
               <p>
                  Monday-Friday: 9am -6pm (The last entry 5pm) <br />
                  Saturday and Sunday: 10am - 4pm (The last entry 3pm)
               </p>
            </Col>
         </Row>
      </Container>
   );
};

export default Home;
