import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function Home() {
    return (
        <main>
            <div className="m-0 pt-5">
                <Navbar />
                <div className="m-5 sm:m-15">
                    <Hero />
                    <About />
                    <Experience />
                    <Projects />
                    <Contact />
                </div>

            </div>
        </main>
    );
}
