import { useState } from "react";
import cafeLogo from "../assets/images/cocoa_logo8.jpg";
import {
   Nav,
   Navbar,
   NavItem,
   Collapse,
   NavbarToggler,
   NavbarBrand,
} from "reactstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
   const [menuOpen, setMenuOpen] = useState(false);

   return (
      <div className="site-header">
         <Navbar dark expand="md">
            <NavbarBrand className="ms-5" href="/">
               <img
                  src={cafeLogo}
                  height="140"
                  width="300"
                  alt="A house with door, paw print and a coffee cup"
               />
            </NavbarBrand>

            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
               <Nav className="ms-auto" navbar>
                  <NavItem>
                     <NavLink className="nav-link" to="/">
                        Home
                     </NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink className="nav-link" to="/aboutus">
                        About Us
                     </NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink className="nav-link" to="/cafemenu">
                        Cafe Menu
                     </NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink className="nav-link" to="/adoptcat">
                        Adopt A Cat
                     </NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink className="nav-link" to="/contactus">
                        Contact
                     </NavLink>
                  </NavItem>
               </Nav>
            </Collapse>
         </Navbar>
      </div>
   );
};

export default Header;
