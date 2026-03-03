const Workflow = () => {
    const steps = [
        { title: 'Tiếp nhận thông tin', desc: 'Lắng nghe và ghi nhận đầy đủ nhu cầu của khách hàng.' },
        { title: 'Khảo sát & tư vấn', desc: 'Khảo sát thực tế, đưa ra giải pháp thiết kế tối ưu.' },
        { title: 'Tiến hành báo giá', desc: 'Cung cấp bảng báo giá chi tiết và minh bạch nhất.' },
        { title: 'Ký kết hợp đồng', desc: 'Xác định rõ trách nhiệm và quyền lợi của hai bên.' },
        { title: 'Thực hiện thi công', desc: 'Triển khai chuyên nghiệp, nhanh chóng và chất lượng.' },
        { title: 'Nghiệm thu bảo hành', desc: 'Nghiệm thu kỹ lưỡng và bảo hành dài hạn.' }
    ];

    return (
        <section id="workflow" className="workflow section">
            <div className="container">
                <h2 className="section-title">Quy Trình Làm Việc</h2>
                <p className="section-subtitle">Chuyên nghiệp, bài bản trong từng bước thực hiện dự án.</p>

                <div className="workflow-steps">
                    {steps.map((step, idx) => (
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
