import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Features from '../components/Features'
import Projects from '../components/Projects'
import Testimonials from '../components/Testimonials'
import Workflow from '../components/Workflow'
import Contact from '../components/Contact'
import Benefits from '../components/Benefits'

const Home = () => {
    return (
        <main>
            <Hero />
            <About />
            <Benefits />
            <Services />
            <Features />
            <Projects />
            <Testimonials />
            <Workflow />
            <Contact />
        </main>
    );
};

export default Home;
