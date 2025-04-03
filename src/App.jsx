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
import OnBoard from "./Pages/OnBoard";
import CandidatePool from "./Pages/CandidatePool";
import Method from "./Pages/Model";
import Analysis from "./Pages/Analysis";

function App() {


  return (
    <Router>
      <Navbar /> {/* Keep Navbar visible on all pages */}
      <Routes>
        <Route path='/wip/' element={<Home />} />
        <Route path='/wip/about' element={<About />} />
        <Route path= '/wip/FAQ' element={<FAQ/>}/>
        <Route path= '/wip/Blogs' element={<Blogs/>}/>
        <Route path= '/wip/Contact' element={<Contact/>}/>
        <Route path='/wip/Pricing' element={<Pricing/>}/>
        <Route path='/wip/Career-Path' element={<CareerPath/>}/>
        <Route path='/wip/JobSearch' element={<JobSearch/>}/>
        <Route path='/wip/Resume-skills-enhancement' element={<ResumeSkills/>}/>
        <Route path='/wip/Career-Dev' element={<CareerDev/>}/>
        <Route path='/wip/Interview' element={<Interview/>}/>
        <Route path='/wip/Talent' element={<Talent/>}/>
        <Route path='/wip/Onboarding' element={<OnBoard/>}/>
        <Route path='/wip/Candidate-Pool' element={<CandidatePool/>}/>
        <Route path='/wip/Method' element={<Method/>}/>
        <Route path='/wip/Analysis' element={<Analysis/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
