import Image from "next/image";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Specialties from "./components/Specialties";
import Services from "./components/Services";
import Observatory from "./components/Observatory";
import Publications from "./components/Publications";
import CTA from "./components/CTA";
import Footer from "./components/Footer";


export default function Home() {
  return (
   <div className="min-h-screen bg-slate-950">
      <Navigation />
      <Hero />
      <Specialties />
       <Services />
       <Observatory />
      <Publications />
      <CTA />
      <Footer />
    </div>
  );
}
