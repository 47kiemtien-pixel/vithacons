import useSiteData from '../hooks/useSiteData';

const Hero = () => {
    const { data } = useSiteData();
    const { hero } = data;

    return (
        <section id="home" className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h3 className="hero-subtitle reveal">{hero.subtitle}</h3>
                <h1 className="hero-title reveal">{hero.title}</h1>
                <p className="hero-text reveal">{hero.description}</p>
                <div className="hero-btns reveal">
                    <a href="#projects" className="btn btn-primary">Dự án tiêu biểu</a>
                    <a href="#contact" className="btn btn-secondary">Liên hệ ngay</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
