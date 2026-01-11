import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const location = useLocation();

  // Hide footer on Home and Projects pages
  const hideFooter =
    location.pathname === "/" ||
    location.pathname === "/projects";

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Experience />} />
        <Route path="/skills" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {!hideFooter && <Footer />}
    </div>
  );
}
