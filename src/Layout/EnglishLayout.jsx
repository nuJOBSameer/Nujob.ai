import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/ScrollToTop";
import { Outlet } from "react-router-dom";

const EnglishLayout = () => (
  <>
    <ScrollToTop />
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

export default EnglishLayout;
