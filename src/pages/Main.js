import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import Contact from "./Contact";
import Cafemenuitem from "./Cafemenuitem";
import Adoptcat from "./Adoptcat";
import About from "./About";
import { Routes, Route } from "react-router-dom";

const Main = () => {
   return (
      <div>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/cafemenu" element={<Cafemenuitem />} />
            <Route path="/contactus" element={<Contact />} />
            <Route path="/adoptcat" element={<Adoptcat />} />
         </Routes>
         <Footer />
      </div>
   );
};

export default Main;
