import MenuImg from "../assets/images/cafe_menu.jpg";
import { Table, Container, Row, Col } from "reactstrap";

const Cafemenuitem = () => {
   return (
      <Container>
         <Row className="row-content">
            <Col className="text-center">
               <h1 className="header">Our Cafe Menu</h1>
               <img src={MenuImg} alt="a latte art with a smiling kitty" />
            </Col>
         </Row>
         <Row className="row-content mx-auto">
            <Col md="6">
               <h2>Drink Items</h2>
               <Table striped>
                  <tr>
                     <th>
                        <br />
                     </th>
                     <th>(12 oz)</th>
                     <th>(16 oz)</th>
                  </tr>
                  <tr>
                     <td>Drip Coffee</td>
                     <td>$2.00</td>
                     <td>$2.75</td>
                  </tr>
                  <tr>
                     <td>Espresso</td>
                     <td>$3.50</td>
                     <td>$4.00</td>
                  </tr>
                  <tr>
                     <td>Latte or Cappuccino</td>
                     <td>$3.50</td>
                     <td>$4.00</td>
                  </tr>
                  <tr>
                     <td>Mocha</td>
                     <td>$3.50</td>
                     <td>$4.00</td>
                  </tr>
                  <tr>
                     <td>Herbal Tea</td>
                     <td>$1.50</td>
                     <td>$2.00</td>
                  </tr>
                  <tr>
                     <td>
                        Smoothies <br /> (Strawberry, Mango, Banana, Avocado){" "}
                     </td>
                     <td>3.75</td>
                     <td>4.50</td>
                  </tr>
               </Table>
            </Col>
            <Col md="6">
               <h2>Food Items</h2>
               <Table className="striped">
                  <tr>
                     <td>Pastries</td>
                     <td>See in the showcase</td>
                  </tr>
                  <tr>
                     <td>Sandwitches</td>
                     <td>$3.95(half) $6.25(whole)</td>
                  </tr>
                  <tr>
                     <td>Pancakes (2 per order)</td>
                     <td>$3.95</td>
                  </tr>
                  <tr>
                     <td>Wafles (2 per order)</td>
                     <td>$3.95</td>
                  </tr>
                  <tr>
                     <td>Popcorn chicken</td>
                     <td>$4.25</td>
                  </tr>
               </Table>
            </Col>
         </Row>
      </Container>
   );
};

export default Cafemenuitem;
