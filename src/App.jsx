import Home from "./Pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Navbar from "./Components/Navbar";
import FAQ from "./Pages/FAQ";
import Footer from "./Components/Footer";
import Blogs from "./Pages/Blogs";

function App() {


  return (
    <Router>
      <Navbar /> {/* Keep Navbar visible on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path= "/FAQ" element={<FAQ/>}/>
        <Route path= "/Blogs" element={<Blogs/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
