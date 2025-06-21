import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Services from "../home/Services";
import Business from "../home/Business";
import Career from "../home/Career";
import ResumeBuilder from "../home/ResumeBuilder";
import Footer from "../Components/Footer";
import Bottom from "../About/Bottom";
import { Helmet } from "react-helmet";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SpanishSpeakingCountries = [
  "ar", // Argentina
  "bo", // Bolivia
  "cl", // Chile
  "co", // Colombia
  "cr", // Costa Rica
  "cu", // Cuba
  "do", // Dominican Republic
  "ec", // Ecuador
  "sv", // El Salvador
  "gq", // Equatorial Guinea
  "gt", // Guatemala
  "hn", // Honduras
  "mx", // Mexico
  "ni", // Nicaragua
  "pa", // Panama
  "py", // Paraguay
  "pe", // Peru
  "es", // Spain
  "uy", // Uruguay
  "ve"  // Venezuela
];

const Home = () => {
  const router = useNavigate();
  useEffect(() => {
    axios.get("https://ipapi.co/json").then((response) => {
      const userCountry = response.data.country_code.toLowerCase();
      if (SpanishSpeakingCountries.includes(userCountry)) {
        router("/sp");
      } else {
        //switch statement
        switch (userCountry) {
          case "ng":
            router("/ng");
            break;
          case "ae":
            router("/ae");
            break;
          case "ua":
            router("/ua");
            break;
          // default case for English-speaking countries
          default:
            router("/");
        }
      }
    });
  });
  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>nuJOB.AI | Elevate Your Career Journey</title>
        <meta
          name="description"
          content=" Discover a smarter approach to career advancement with tools designed to refine your skills and connect you to opportunities that align with your ambitions."
        />
      </Helmet>
      <div className="relative min-h-screen w-full flex items-center justify-center text-white overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          playsInline
          className="hidden md:block absolute top-0 left-0 w-full h-full object-cover z-40"
        >
          <source src="/hero-desktop2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Mobile Video */}
        <video
          autoPlay
          muted
          playsInline
          className="block md:hidden absolute top-0 left-0 w-full h-full object-cover z-40"
        >
          <source src="/hero-mobile.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <video
          autoPlay
          muted
          playsInline
          className="hidden lg:block absolute top-0 left-0 w-full h-full object-cover z-40"
        >
          <source src="/hero-desktop1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <video
          autoPlay
          muted
          playsInline
          className="hidden xl:block absolute top-0 left-0 w-full h-full object-cover z-40"
        >
          <source src="/hero-desktop3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Text Content */}
      </div>
      <Services />
      <Business />
      <Career />
      <ResumeBuilder />
      <Bottom />
    </div>
  );
};

export default Home;
