import { idText } from "typescript";
import './globals.css'

export default function Home() {
  return (
    <div className="grid lg:grid-cols-2 gap-4 font-montserrat">
      <header className="left-panel border-box lg:max-h-screen lg:w-1/2 flex flex-col lg:ml-24 lg:sticky lg:top-0 py-24">
        <div id="basics">
          <h1 className="text-5xl font-bold mb-4">Lucas Catchlove
          </h1>
          <h2 className="text-xl mb-12">Software Engineer</h2>
          <p>I love building software!</p>
        </div>
        <nav></nav>
        <div id="socials"></div>
      </header>

      <main className="right-scroll-panel lg:w-1/2 h-[100rem] overflow-y-auto mt-24">
        <h2>hello from scroll panel!</h2>
        <section id="about"></section>
        <section id="experience"></section>
        <section id="projects"></section>
      </main>
    </div>
  );
}
