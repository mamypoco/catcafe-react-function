import { useState } from "react";
import cafeLogo from "../assets/images/cocoa_logo8.jpg";
import {
   Nav,
   Navbar,
   NavItem,
   NavLink,
   Collapse,
   NavbarToggler,
   NavbarBrand,
} from "reactstrap";

const Header = () => {
   const [menuOpen, setMenuOpen] = useState(false);

   return (
      <Navbar className="site-header" sticky="top" expand="md">
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
                  <NavLink className="nav-link" href="/">
                     Home
                  </NavLink>
               </NavItem>
               <NavItem>
                  <NavLink className="nav-link" href="/aboutus">
                     About Us
                  </NavLink>
               </NavItem>
               <NavItem>
                  <NavLink className="nav-link" href="/cafemenu">
                     Cafe Menu
                  </NavLink>
               </NavItem>
               <NavItem>
                  <NavLink className="nav-link" href="/adoptcat">
                     Adopt A Cat
                  </NavLink>
               </NavItem>
               <NavItem>
                  <NavLink className="nav-link" href="/contactus">
                     Contact
                  </NavLink>
               </NavItem>
            </Nav>
         </Collapse>
      </Navbar>
   );
};

export default Header;
