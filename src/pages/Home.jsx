import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Hero from "../components/Hero";
import EventsSection from "../components/EventSection";
import ContactForm from "../components/Contact";
import Testimonials from "../components/Testimonials";
import Map from "../components/MapEmbed";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <EventsSection />
      <Testimonials />
      <ContactForm />
      <Map />
      <Footer />
    </>
  );
}

export default Home;
