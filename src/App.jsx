import About from "./sections/About";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Project from "./sections/Project";

function App() {
  return (
    <main className="mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Project />
    </main>
  );
}

export default App;
