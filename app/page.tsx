import AboutSection from "@/components/AboutSection";
import ContactSections from "@/components/ContactSection";
import {IntroAnimation} from "@/components/IntroAnimation";
import IntroSection from "@/components/IntroSection";
import ProjectsSections from "@/components/ProjectsSections";
import SpecializationSection from "@/components/SpecializationSection";
import ToolsSection from "@/components/ToolsSection";
import PictureSection from "@/components/PictureSection";

export default async function Home() {
  const sections = [
    { id: "about", label: "About Me", component: AboutSection },
    {
      id: "specialization",
      label: "Area of Specialization",
      component: SpecializationSection,
    },
    { id: "tools", label: "Tools & platform", component: ToolsSection },
    { id: "projects", label: "Projects", component: ProjectsSections },
    { id: "contact", label: "Contact", component: ContactSections },
  ];
  return (
    <main className="">
      <IntroAnimation className="lg:fixed lg:left-0 z-20 bg-primary text-primary-foreground h-screen">
        <IntroSection sections={sections.map(sec=>{return {id:sec.id,label:sec.label}})} />
      </IntroAnimation>
      <div className="lg:w-[50%] lg:ml-[50%] z-10 relative">
        <PictureSection />
        {sections.map((sec, ind) => (
          <sec.component key={ind} id={sec.id} />
        ))}
      </div>
    </main>
  );
}
