"use client";
import "./globals.css";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {

    function handleIntersection(
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) {
      entries.forEach((entry) => {
        console.log(entry.target);
        if (entry.isIntersecting) {
          // todo
          //needs refactor to avoid client side rendering!
        }
      });
    }

    const options: IntersectionObserverInit = {
      root: null, // Use the viewport as the root
      rootMargin: "0px", // No margin
      threshold: 0.0, // Fire the callback when even a single pixel is in the viewport
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    const experienceElement = document.getElementById("experience");
    const aboutElement = document.getElementById("about");
    const projectsElement = document.getElementById("projects");

    if (experienceElement && aboutElement && projectsElement) {
      observer.observe(experienceElement);
      observer.observe(aboutElement);
      observer.observe(projectsElement);
    }
  });

  return (
    <div className="grid lg:grid-cols-2 font-montserrat mx-12">
      <header className="lg:sticky max-h-screen flex flex-col lg:top-0 py-24 lg:ml-12">
        <div id="basics">
          <h1 className="text-5xl font-bold mb-4 text-slate-200">
            Lucas Catchlove
          </h1>
          <h2 className="text-2xl mb-8 text-teal-200">Software Engineer</h2>
          <p className="md:max-w-xs opacity-75 leading-relaxed">
            I enjoy designing and building software professionally and at home
            (:
          </p>
        </div>
        <nav className="mt-24">
          <ol className="flex flex-col space-evenly text-xl">
            <li>
              <a href="#experience">experience</a>
            </li>
            <li>
              <a href="#projects">projects</a>
            </li>
          </ol>
        </nav>
        <div id="socials"></div>
      </header>

      <main className="lg:mt-24 lg:mr-12 mb-24">
        <section id="about">
          <h2 className="uppercase mb-12 lg:hidden opacity-80 text-2xl">
            About
          </h2>
          <p className="opacity-75">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>

        <section id="experience" className="lg:mt-28 pt-24">
          <h2 className="uppercase mb-12 text-2xl opacity-80">Experience</h2>
          {[1, 2].map((e, i) => (
            <ExperienceCard key={i} />
          ))}
        </section>

        <section id="projects" className="pt-24">
          <h2 className="uppercase mb-12 text-2xl opacity-80">Projects</h2>
          {[1, 2].map((e, i) => (
            <ProjectCard key={i} />
          ))}
        </section>
      </main>
    </div>
  );
}
