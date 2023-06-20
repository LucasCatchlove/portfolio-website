export default function Home() {
  return (
    <div className="grid lg:grid-cols-2 gap-4">
      <header className="left-panel lg:max-h-screen lg:w-1/2">
        <h2>hello from side panel!</h2>
      </header>
      <main className="right-scroll-panel lg:w-1/2">
        <h2>hello from scroll panel!</h2>
      </main>
    </div>
  );
}
