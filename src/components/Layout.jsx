import { useEffect, useRef } from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";
import OpenSourceSection from "./OpenSourceSection";
import SocialSection from "./SocialSection";
import GallerySection from "./GallerySection";
import Footer from "./Footer";

const Layout = () => {
  const heroSectionRef = useRef(null);
  const bodySectionRef = useRef(null);

  useEffect(() => {
    const heroSection = heroSectionRef.current;
    const bodySection = bodySectionRef.current;

    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const syncScroll = (e) => {
      e.preventDefault();
      if (bodySection) {
        bodySection.scrollTop += e.deltaY;
      }
    };

    const handleMediaChange = (e) => {
      if (e.matches) {
        heroSection?.addEventListener("wheel", syncScroll, { passive: false });
      } else {
        heroSection?.removeEventListener("wheel", syncScroll);
      }
    };

    if (mediaQuery.matches) {
      heroSection?.addEventListener("wheel", syncScroll, { passive: false });
    }

    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      heroSection?.removeEventListener("wheel", syncScroll);
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  return (
    <div className="flex font-sans">
      <div className="flex flex-col lg:flex-row w-full">
        <div
          ref={heroSectionRef}
          className="lg:sticky lg:top-0 lg:h-screen lg:flex-none"
        >
          <HeroSection />
        </div>
        <div
          ref={bodySectionRef}
          className="flex-grow lg:h-screen overflow-auto"
        >
          <section className="px-6 py-4 lg:mt-8 xl:mt-10">
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <OpenSourceSection />
            <SocialSection />
            <GallerySection />
          </section>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout; 