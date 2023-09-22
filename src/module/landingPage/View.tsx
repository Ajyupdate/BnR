import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import BestChoice from "@/module/landingPage/components/BestChoice";
import { Box } from "@chakra-ui/react";
import HeroSection from "./components/HeroSection";
import LandingContact from "./components/LandingContact";
import Subscription from "./components/Subscription";
import WhyChooseUs from "./components/WhyChooseUs";

export default function LandingPage() {
  return (
    <Box bg="rgb(244, 254, 255)">
      <Nav />
      <HeroSection />
      <BestChoice />
      <WhyChooseUs />
      <LandingContact />
      <Subscription />
      <Footer />
    </Box>
  );
}
