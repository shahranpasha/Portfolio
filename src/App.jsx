import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <>
      <div className="bg-black ">
        <Navbar />
        <Home />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}