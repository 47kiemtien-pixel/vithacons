import useSiteData from '../hooks/useSiteData';

const Services = () => {
    const { data } = useSiteData();
    const { services } = data;

    return (
        <section id="services" className="services section">
            <div className="container">
                <h3 className="section-subtitle" style={{ marginBottom: "10px", color: "var(--secondary)" }}>{services.subtitle}</h3>
                <h2 className="section-title">{services.title}</h2>
                <div style={{ marginBottom: '40px' }}>
                    <p className="section-subtitle">{services.desc1}</p>
                    <p className="section-subtitle">{services.desc2}</p>
                </div>

                <div className="grid grid-2">
                    {services.list.map((srv, idx) => (
                        <div className="service-card reveal" key={idx}>
                            <div className="service-icon">{srv.icon}</div>
                            <h3>{srv.title}</h3>
                            <p>{srv.desc}</p>
                            <a href="#contact" className="service-link">Tư vấn báo giá →</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
