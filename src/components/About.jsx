import useSiteData from '../hooks/useSiteData';

const About = () => {
    const { data } = useSiteData();
    const { about } = data;

    return (
        <section id="about" className="about section">
            <div className="container about-grid">
                <div className="about-image reveal">
                    <img src={about.image} alt={about.heading} />
                </div>

                <div className="about-content reveal">
                    <h3>{about.title}</h3>
                    <h2>{about.heading}</h2>
                    <p>{about.description1}</p>
                    <p>{about.description2}</p>

                    <div className="about-features">
                        {about.features.map((feature, idx) => (
                            <div className="about-feature" key={idx}>
                                <span className="feature-icon">✓</span> {feature}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
