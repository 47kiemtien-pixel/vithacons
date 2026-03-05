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

                    <div className="experience-marker" style={{
                        margin: '20px 0',
                        padding: '10px 20px',
                        borderLeft: '4px solid var(--secondary)',
                        background: 'rgba(212, 106, 42, 0.05)',
                        display: 'inline-block'
                    }}>
                        <span style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--secondary)' }}>{about.experienceYears}</span>
                        <span style={{ marginLeft: '10px', fontWeight: '600', color: 'var(--dark)', textTransform: 'uppercase', fontSize: '0.9rem' }}>{about.experienceText}</span>
                    </div>

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
