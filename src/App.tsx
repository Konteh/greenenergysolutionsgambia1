import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Products } from "./components/Products";
import { Services } from "./components/Services";
import { Stats } from "./components/Stats";
import { Mission } from "./components/Mission";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Team } from "./components/Team";
import { Partners } from "./components/Partners";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Services />
      <Stats />
      <Mission />
      <WhyChooseUs />
      <Partners />
      <Gallery />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}