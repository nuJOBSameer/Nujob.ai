import Navbar from "../Components/NavbarSp";
import ServicesSectionSP from "../home/ServicesSp";
import BusinessSp from "../home/BusinessSp";
import CareerSp from "../home/CareerSp";
import ResumeBuilderSp from "../home/ResumeBuilderSp";
import BottomSP from "../About/BottomSp";
import { Helmet } from "react-helmet";

const NAVBAR_HEIGHT = 64; // px, adjust to match your Navbar


const HomeSp = () => {
  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>nuJOB.AI | Eleva tu carrera</title>
        <meta
          name="description"
          content="Descubre un enfoque más inteligente para avanzar en tu carrera con herramientas diseñadas para perfeccionar tus habilidades y conectarte con oportunidades que se alinean con tus aspiraciones."
        />
      </Helmet>
      {/* Fixed Navbar */}
      <Navbar />
      {/* Video Section */}
      <div
        className="w-full"
        style={{
          paddingTop: `${NAVBAR_HEIGHT}px`, // Push below navbar
        }}
      >
        <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
          {/* Desktop & Tablet Video */}
          <video
            autoPlay
            muted
            playsInline
            loop
            preload="auto"
            className="hidden md:block absolute inset-0 w-full h-full object-contain bg-black"
          >
            <source src="/Spanish_hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Mobile Video */}
          <video
            autoPlay
            muted
            playsInline
            loop
            preload="auto"
            className="block md:hidden absolute inset-0 w-full h-full object-contain bg-black"
          >
            <source src="/Spanish_hero_mobile.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      {/* Succeeding Sections */}
      <ServicesSectionSP />
      <BusinessSp />
      <CareerSp />
      <ResumeBuilderSp />
      <BottomSP />
    </div>
  );
};

export default HomeSp;
