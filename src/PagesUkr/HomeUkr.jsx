import Navbar from "../Components/NavbarUkr";
import ServicesSectionUkr from "../home/ServicesUkr";
import BusinessUkr from "../home/BusinessUkr";
import CareerUkr from "../home/CareerUkr";
import ResumeBuilderUkr from "../home/ResumeBuilderUkr";
import BottomUkr from "../About/BottomUkr";
import { Helmet } from "react-helmet";

const NAVBAR_HEIGHT = 64; // px, adjust to match your Navbar

const HomeUkr = () => {
  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>nuJOB.AI | Підніміть свою кар'єру</title>
        <meta
          name="description"
          content="Відкрийте для себе розумніший підхід до розвитку кар'єри з інструментами, створеними для вдосконалення ваших навичок і пошуку можливостей, що відповідають вашим прагненням."
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
            <source src="/Ukraine_hero.mp4" type="video/mp4" />
            Ваш браузер не підтримує відео.
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
            <source src="/Ukraine_hero_mobile.mp4" type="video/mp4" />
            Ваш браузер не підтримує відео.
          </video>
        </div>
      </div>
      {/* Succeeding Sections */}
      <ServicesSectionUkr />
      <BusinessUkr />
      <CareerUkr />
      <ResumeBuilderUkr />
      <BottomUkr />
    </div>
  );
};

export default HomeUkr;
