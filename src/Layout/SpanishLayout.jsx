import NavbarSp from "../Components/NavbarSp";
import FooterSp from "../Components/FooterSp";
import ScrollToTop from "../Components/ScrollToTop";
import { Outlet } from "react-router-dom";

const SpanishLayout = () => (
  <>
    <ScrollToTop />
    <NavbarSp />
    <Outlet />
    <FooterSp />
  </>
);

export default SpanishLayout;
