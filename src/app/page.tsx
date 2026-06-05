import HeroSection from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectsGrid from "@/components/ProjectsGrid";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <main className="flex flex-col gap-12 md:gap-20 overflow-hidden w-full">
      <HeroSection />
      <AboutMe />
      <ExperienceTimeline />
      <ProjectsGrid />
      <ContactFooter />
    </main>
  );
}
