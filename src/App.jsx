import Clients from "./sections/Clients";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Project from "./sections/Project";
import Footer from "./sections/Footer";
import Experience from "./sections/Experience";

function App() {
	return (
		<main className="mx-auto max-w-7xl">
			<Navbar />
			<Hero />
			<About />
			<Project />
			<Clients />
			<Experience />
			<Contact />
			<Footer />
		</main>
	);
}

export default App;
