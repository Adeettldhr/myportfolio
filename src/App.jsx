// import components
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Showcase from "./components/Showcase";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from "./components/Contact";
import { useEffect } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="">
      <Navbar />
      <Hero />

      <Service />
      <Projects />
      <Showcase />
     
      <Contact />
      <footer className="p-3 text-center">
        <h6 className="mb-3">Adeet Tuladhar</h6>
        <p>© All CopyRights Reserved {new Date().getFullYear()}</p>
      </footer>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default App;
