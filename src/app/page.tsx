import { idText } from "typescript";
import './globals.css'
import ExperienceCard from "@/components/ExperienceCard";

export default function Home() {
  return (
    <div className="grid lg:grid-cols-2 gap-2 font-montserrat">
      <header className="left-panel border-box lg:max-h-screen flex flex-col lg:sticky lg:top-0 py-24 mx-12">
        <div id="basics">
          <h1 className="text-5xl font-bold mb-4">Lucas Catchlove
          </h1>
          <h2 className="text-xl mb-12">Software Engineer</h2>
          <p>I love building software!</p>
        </div>
        <nav></nav>
        <div id="socials"></div>
      </header>

      <main className="right-scroll-panel h-[100rem] overflow-y-auto mt-24 mx-12">
        <h2>hello from scroll panel!</h2>
        <section id="about">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</section>
        <section id="experience" className="mt-4"><ExperienceCard /></section>
        <section id="projects"></section>
      </main>
    </div>
  );
}
