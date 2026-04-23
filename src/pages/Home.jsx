import Hero from "../components/Hero";
import PlantDiseaseShowcase from "../components/PlantDiseaseLiveDemo";
import GameShowcase from "../components/GameShowcase";
import VueProjectLivePreview from "../components/VueProjectLivePreview";
import UIUXPortfolioShowcase from "../components/UIUXPortfolioShowcase";
import FeaturedProjects from "../components/FeaturedProjects";
import Skills from "../components/Skills";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <PlantDiseaseShowcase />
      <GameShowcase />
      <VueProjectLivePreview />
      <UIUXPortfolioShowcase />
      <FeaturedProjects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </>
  );
}