import React from "react";
import ExperienceTimeline from "@/components/experience-timeline";
import ProjectList from "@/components/project-list";
import AboutSection from "@/components/about-section";
import NavHeader from "@/components/nav-header";

export default function Home() {
  return (
    <div className="gradient-bg ">
      <NavHeader />
      <div id="about" className="anchor" />
      <main className="mx-auto z-50 min-h-screen w-full px-6 pb-12 md:px-12 md:pb-20 lg:px-24 lg:pb-10 xl:px-72 2xl:px-96 min-[1700px]:px-[500px] min-[2000px]:px-[600px]">
        <AboutSection />
        <ExperienceTimeline />
        <ProjectList />
      </main>
    </div>
  );
}
