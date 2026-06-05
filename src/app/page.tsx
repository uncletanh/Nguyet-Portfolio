import HeroSection from "@/components/HeroSection";
import Biography from "@/components/Biography";
import AboutMe from "@/components/AboutMe";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Moments from "@/components/Moments";
import ProjectsGrid from "@/components/ProjectsGrid";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <main className="flex flex-col gap-12 md:gap-20 overflow-hidden w-full">
      <HeroSection />
      <Biography />
      <AboutMe />
      <ExperienceTimeline />
      <Moments />
      <ProjectsGrid />
      <ContactFooter />
    </main>
  );
}
