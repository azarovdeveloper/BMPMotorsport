import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Brands from './components/Brands';
import Process from './components/Process';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'glightbox/dist/css/glightbox.min.css';
import 'swiper/css';
import 'swiper/css/pagination';

// Reusing global CSS
import '../public/css/style.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true,
      offset: 100
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Brands />
      <Process />
      <Gallery />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingActions />
    </>
  );
}

export default App;
