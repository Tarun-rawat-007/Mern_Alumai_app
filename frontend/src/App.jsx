
import './App.css'
import AboutUs from './components/AboutUs'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import SearchFilter from './components/SearchFilter'
import Services from './components/Servise'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles
import { useEffect } from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
     <Navbar></Navbar>
     <Hero></Hero>
     <AboutUs></AboutUs>
     <ContactForm></ContactForm>
     <Services></Services>
     <SearchFilter></SearchFilter>
     <Footer></Footer>

    </>
  )
}

export default App
