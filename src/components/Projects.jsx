import useSiteData from '../hooks/useSiteData';

const Projects = () => {
    const { data } = useSiteData();
    const { projects } = data;

    return (
        <section id="projects" className="projects section">
            <div className="container">
                <h2 className="section-title">{projects.title}</h2>
                <p className="section-subtitle">{projects.subtitle}</p>

                <div className="grid grid-3">
                    {projects.list.map((pj, idx) => (
                        <div className="project-card reveal" key={idx}>
                            <div className="project-img">
                                <img src={pj.img} alt={pj.title} loading="lazy" />
                                <div className="project-overlay">
                                    <span>{pj.category}</span>
                                    <h3>{pj.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
