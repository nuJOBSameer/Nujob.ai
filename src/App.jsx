import Home from "./Pages/Home";
import ScrollToTop from "./Components/ScrollToTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Navbar from "./Components/Navbar";
import FAQ from "./Pages/FAQ";
import Footer from "./Components/Footer";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import Pricing from "./Pages/Pricing";
import CareerPath from "./Pages/CareerPath";
import JobSearch from "./Pages/JobSearch";
import ResumeSkills from "./Pages/ResumeSkills";
import CareerDev from "./Pages/CareerDev";
import Interview from "./Pages/Interview";
import Talent from "./Pages/Talent";
import OnBoard from "./Pages/OnBoard";
import CandidatePool from "./Pages/CandidatePool";
import Method from "./Pages/Model";
import Analysis from "./Pages/Analysis";
import Terms from "./Pages/Terms";
import Privacy from "./Pages/Privacy";
import Refund from "./Pages/Refund";
import Student from "./Pages/Student";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar /> {/* Keep Navbar visible on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Career-Path" element={<CareerPath />} />
        <Route path="/JobSearch" element={<JobSearch />} />
        <Route path="/Resume-skills-enhancement" element={<ResumeSkills />}/>
        <Route path="/Career-Dev" element={<CareerDev />} />
        <Route path="/Interview" element={<Interview />} />
        <Route path="/Talent" element={<Talent />} />
        <Route path="/Onboarding" element={<OnBoard />} />
        <Route path="/Candidate-Pool" element={<CandidatePool />} />
        <Route path="/Method" element={<Method />} />
        <Route path="/Analysis" element={<Analysis />} />
        <Route path="/Terms" element={<Terms/>} />
        <Route path="/Privacy" element={<Privacy/>} />
        <Route path="/Refund" element={<Refund/>} />
        <Route path="/Student" element={<Student/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
