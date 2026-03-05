import useSiteData from '../hooks/useSiteData';

const Workflow = () => {
    const { data } = useSiteData();
    const { workflow } = data;

    return (
        <section id="workflow" className="workflow section">
            <div className="container">
                <h2 className="section-title">{workflow.title}</h2>
                <p className="section-subtitle">{workflow.subtitle}</p>

                <div className="workflow-steps">
                    {workflow.steps.map((step, idx) => (
                        <div className="step-card" key={idx}>
                            <div className="step-number">0{idx + 1}</div>
                            <div className="step-content">
                                <h4>{step.title}</h4>
                                <p>{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Workflow;
