import BenefitSection from "../components/Fragments/BenefitSection";
import FaqSection from "../components/Fragments/FAQSection";
import HeroSection from "../components/Fragments/HeroSection";
import HowSection from "../components/Fragments/HowSection";
import PartnerSection from "../components/Fragments/PartnerSection";
import TechSection from "../components/Fragments/TechSection";
import TestimonialSection from "../components/Fragments/TestimonialSection";

const HomePage = () => {
  return (
    <>
      <div id="about">
        <HeroSection />
        <PartnerSection />
      </div>
      <div id="how-it-works">
        <HowSection />
      </div>
      <TechSection />
      <div id="benefit">
        <BenefitSection />
      </div>
      <div id="testimonials">
        <TestimonialSection />
      </div>
      <div id="faqs">
        <FaqSection />
      </div>
    </>
  );
};

export default HomePage;
