import "./globals.css";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { useEffect, useState } from "react";

export default function Home() {
  // const [navhighlight, setNav] = useState("");
  // useEffect(() => {
  //   function handleIntersection(
  //     entries: IntersectionObserverEntry[],
  //     observer: IntersectionObserver
  //   ) {
  //     entries.forEach((entry) => {

  //       if (entry.isIntersecting) {
  //         console.log(entry.target.id)
  //         switch (entry.target.id) {
  //           case "experience":
  //             setNav("experience");
  //             break;
  //           case "projects":
  //             setNav("projects");
  //             break;
  //         }
  //       }
  //     });
  //   }

  //   const options: IntersectionObserverInit = {
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: 0,
  //   };

  //   const observer = new IntersectionObserver(handleIntersection, options);

  //   const experienceElement = document.getElementById("experience");
  //   const projectsElement = document.getElementById("projects");

  //   if (experienceElement && projectsElement) {
  //     observer.observe(projectsElement);
  //     observer.observe(experienceElement);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <div className="grid lg:grid-cols-2 font-montserrat mx-12">
      <header className="lg:sticky max-h-screen flex flex-col lg:top-0 py-24 lg:ml-12">
        <div id="basics">
          <h1 className="text-5xl font-bold mb-4 text-slate-200">Lucas Catchlove</h1>
          <h2 className="text-2xl mb-8 text-teal-200">Software Engineer</h2>
          <p className="md:max-w-xs opacity-75 leading-relaxed">I enjoy designing and building software professionally and at home :)</p>
        </div>
        {/* <nav className="mt-24">
          <ol className="flex flex-col space-evenly text-xl">
            <li>
              <a
                href="#experience"
                className={navhighlight === "experience" ? "text-4xl" : ""}
              >
                experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={navhighlight === "projects" ? "text-4xl" : ""}
              >
                projects
              </a>
            </li>
          </ol>
        </nav> */}
        <div id="socials" className="mt-24 md:flex md:justify-items-center">
          <ol className="flex flex-col space-evenly xs:text-3xl text-xl">
            <li className="transition ease-in-out hover:text-yellow-200 duration-300 flex flex-items-center">
              <a className="ml-2" href="mailto:lucascatchlove@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />
                <p className="ml-2 inline-block">Email</p>
              </a>
            </li>
            <li className="transition ease-in-out hover:text-yellow-200 duration-300">
              <a className="ml-2" href="https://github.com/LucasCatchlove">
                <FontAwesomeIcon icon={faGithub} />
                <p className="ml-2 inline-block">Github</p>
              </a>
            </li>
            <li className="transition ease-in-out hover:text-yellow-200 duration-300">
              <a className="ml-2" href="https://www.linkedin.com/in/lucascatchlove/">
                <FontAwesomeIcon icon={faLinkedin} />
                <p className="ml-2 inline-block">LinkedIn</p>
              </a>
            </li>
          </ol>
        </div>
      </header>

      <main className="lg:mt-24 lg:mr-12 mb-24">
        <section id="about">
          <h2 className="uppercase mb-12 lg:hidden opacity-80 text-2xl">About</h2>
          <p className="opacity-75">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
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
