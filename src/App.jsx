import Home from "./Pages/Home";
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


import EnglishLayout from "./Layout/EnglishLayout";
import UkrainianLayout from "./Layout/UkrainianLayout";
import SpanishLayout from "./Layout/SpanishLayout";

import HomeUkr from "./PagesUkr/HomeUkr";
import AboutUkr from "./PagesUkr/AboutUkr";
import MethodUkr from "./PagesUkr/ModelUkr";
import CareerPathUkr from "./PagesUkr/CareerPathUkr";
import JobSearchUkr from "./PagesUkr/JobSearchUkr";
import CareerDevUkr from "./PagesUkr/CareerDevUkr";
import ResumeSkillsUkr from "./PagesUkr/ResumeSkillsUkr";
import CandidatePoolUkr from "./PagesUkr/CandidatePoolUkr";
import InterviewUkr from "./PagesUkr/InterviewUkr";
import OnBoardUkr from "./PagesUkr/OnboardUkr";
import TalentUkr from "./PagesUkr/TalentUkr";
import StudentUkr from "./PagesUkr/StudentUkr";
import PricingUkr from "./PagesUkr/PricingUkr";
import FAQUkr from "./PagesUkr/FAQUkr";
import BlogsUkr from "./PagesUkr/BlogsUkr";
import ContactUkr from "./PagesUkr/ContactUkr";



import HomeSp from "./PagesSp/HomeSp";
import AboutSp from "./PagesSp/AboutSp";
import MethodSp from "./PagesSp/ModelSp";
import CareerPathSp from "./PagesSp/CareerPathSp";
import JobSearchSp from "./PagesSp/JobSearchSp";
import CareerDevSp from "./PagesSp/CareerDevSp";
import ResumeSkillsSp from "./PagesSp/ResumeSkillsSp";
import InterviewSp from "./PagesSp/InterviewSp";
import OnBoardSp from "./PagesSp/OnboardSp";
import TalentSp from "./PagesSp/TalentSp";
import CandidatePoolSp from "./PagesSp/CandidatePoolSp";
import StudentSp from "./PagesSp/StudentSp";
import FAQSp from "./PagesSp/FAQSp";
import BlogsSp from "./PagesSp/BlogsSp";
import ContactSp from "./PagesSp/ContactSp";
import PricingSectionSp from "./PagesSp/PricingSp";



function App() {
  return (
    <Router>
      <Routes>
        <Route   element={<EnglishLayout />}>
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
        </Route>

        {/* Ukrainian Layout & Routes */}
        <Route element={<UkrainianLayout />}>
          <Route path="/ua"  element={<HomeUkr />} />
          <Route path="/aboutua" element={<AboutUkr />} />
          <Route path="/Methodua" element={<MethodUkr />} />
          <Route path="/Career-pathua" element={<CareerPathUkr />} />
          <Route path="/JobSearchua" element={<JobSearchUkr/>} />
          <Route path="/JobSearchua" element={<JobSearchUkr/>} />
          <Route path="/Career-Devua" element={<CareerDevUkr/>} />
          <Route path="/Resume-skills-enhancementua" element={<ResumeSkillsUkr/>} />
          <Route path="/Candidate-Poolua" element={<CandidatePoolUkr/>} />
          <Route path="/Interviewua" element={<InterviewUkr/>} />
          <Route path="/Onboardingua" element={<OnBoardUkr/>} />
          <Route path="/Talentua" element={<TalentUkr/>} />
          <Route path="/Studentua" element={<StudentUkr/>} />
          <Route path="/pricingua" element={<PricingUkr/>} />
          <Route path="/FAQua" element={<FAQUkr/>} />
          <Route path="/Blogsua" element={<BlogsUkr/>} />
          <Route path="/Contactua" element={<ContactUkr/>} />
        </Route>

        <Route element={<SpanishLayout />}>
         <Route path="/sp"  element={<HomeSp />} />
         <Route path="/Aboutsp"  element={<AboutSp />} />
         <Route path="/Methodsp" element={<MethodSp />} />
         <Route path="/Career-pathsp" element={<CareerPathSp />} />
          <Route path="/JobSearchsp" element={<JobSearchSp/>} />
          <Route path="/Career-Devsp" element={<CareerDevSp/>} />
          <Route path="/Resume-skills-enhancementsp" element={<ResumeSkillsSp/>} />
          <Route path="/Candidate-Poolsp" element={<CandidatePoolSp/>} />
          <Route path="/Interviewsp" element={<InterviewSp/>} />
          <Route path="/Onboardingsp" element={<OnBoardSp/>} />
          <Route path="/Talentsp" element={<TalentSp/>} />
          <Route path="/Studentsp" element={<StudentSp/>} />
          <Route path="/FAQsp" element={<FAQSp/>} />
          <Route path="/Blogssp" element={<BlogsSp/>} />
          <Route path="/Contactsp" element={<ContactSp/>} />
           <Route path="/pricingsp" element={<PricingSectionSp/>} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
