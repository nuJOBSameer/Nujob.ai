import Home from "./Pages/Home"
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
import OnboardingSection from "./Pages/OnBoardingSection";
import CandidatePool from "./Pages/CandidatePool";
import Method from "./Pages/Model";

function App() {


  return (
    <Router>
      <Navbar /> {/* Keep Navbar visible on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path= "/FAQ" element={<FAQ/>}/>
        <Route path= "/Blogs" element={<Blogs/>}/>
        <Route path= "/Contact" element={<Contact/>}/>
        <Route path='/Pricing' element={<Pricing/>}/>
        <Route path='/Career-Path' element={<CareerPath/>}/>
        <Route path='/JobSearch' element={<JobSearch/>}/>
        <Route path='/Resume-skills-enhancement' element={<ResumeSkills/>}/>
        <Route path='/Career-Dev' element={<CareerDev/>}/>
        <Route path='/Interview' element={<Interview/>}/>
        <Route path='/Talent' element={<Talent/>}/>
        <Route path='/Onboarding' element={<OnboardingSection/>}/>
        <Route path='/Candidate-Pool' element={<CandidatePool/>}/>
        <Route path='/Method' element={<Method/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
