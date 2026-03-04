import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Features from '../components/Features'
import Projects from '../components/Projects'
import Testimonials from '../components/Testimonials'
import Workflow from '../components/Workflow'
import Contact from '../components/Contact'

const Home = () => {
    return (
        <main>
            <Hero />
            <About />
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
