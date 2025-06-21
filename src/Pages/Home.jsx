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

const NAVBAR_HEIGHT = 64; // px, adjust to match your Navbar

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
  }, [router]);

  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>nuJOB.AI | Elevate Your Career Journey</title>
        <meta
          name="description"
          content=" Discover a smarter approach to career advancement with tools designed to refine your skills and connect you to opportunities that align with your ambitions."
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
            <source src="/hero-desktop2.mp4" type="video/mp4" />
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
            <source src="/hero-mobile.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      {/* Succeeding Sections */}
      <Services />
      <Business />
      <Career />
      <ResumeBuilder />
      <Bottom />
    </div>
  );
};

export default Home;
