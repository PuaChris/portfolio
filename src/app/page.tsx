import React from "react";
import ExperienceTimeline from "@/components/experience-timeline";
import ProjectList from "@/components/project-list";
import AboutSection from "@/components/about-section";
import NavHeader from "@/components/nav-header";

export default function Home() {
  return (
    <>
      <NavHeader />
      <div id="about" className="anchor" />
      <main className="mx-auto z-50 min-h-screen max-w-screen-xl px-6 pb-12 md:px-12 md:pb-20 lg:px-24 lg:pb-10">
        <AboutSection />
        <ExperienceTimeline />
        <ProjectList />
      </main>
      <footer></footer>
    </>
  );
}
