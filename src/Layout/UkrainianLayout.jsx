import NavbarUkr from "../Components/NavbarUkr";
import FooterUkr from "../Components/FooterUkr";
import ScrollToTop from "../Components/ScrollToTop";
import { Outlet } from "react-router-dom";

const UkrainianLayout = () => (
  <>
    <ScrollToTop />
    <NavbarUkr />
    <Outlet />
    <FooterUkr />
  </>
);

export default UkrainianLayout;
