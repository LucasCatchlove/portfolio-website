import { idText } from "typescript";

export default function Home() {
  return (
    <div className="grid lg:grid-cols-2 gap-4">
      <header className="left-panel lg:max-h-screen lg:w-1/2 flex flex-col">
        <div id="basics" className="py-24">
          <h1 className="text-5xl font-bold">
            Lucas
            <br />
            Catchlove
          </h1>
          <h2>Software Engineer</h2>
          <p>I love building software!</p>
        </div>
        <nav></nav>
        <div id="socials"></div>
      </header>

      <main className="right-scroll-panel lg:w-1/2">
        <h2>hello from scroll panel!</h2>
        <section id="about"></section>
        <section id="experience"></section>
        <section id="projects"></section>
      </main>
    </div>
  );
}
