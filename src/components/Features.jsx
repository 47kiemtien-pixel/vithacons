const Features = () => {
    const featureList = [
        { title: 'Chất lượng dịch vụ', desc: 'Tiêu chuẩn nghiêm ngặt từ thiết kế đến thi công, đạt yêu cầu kỹ thuật khắt khe.', icon: '⭐' },
        { title: 'Kinh nghiệm phong phú', desc: 'Hiểu rõ nhu cầu khách hàng, đưa ra các giải pháp tối ưu dựa trên hàng loạt dự án.', icon: '💡' },
        { title: 'Đội ngũ chuyên nghiệp', desc: 'Kỹ sư giàu kinh nghiệm, đào tạo bài bản, giám sát 24/24.', icon: '👨‍🔧' },
        { title: 'Cam kết tiến độ', desc: 'Chúng tôi hiểu thời gian là vàng, cam kết hoàn thành hợp đồng đúng hạn.', icon: '⏱️' },
        { title: 'Giải pháp linh hoạt', desc: 'Sẵn sàng lắng nghe và điều chỉnh theo yêu cầu, đảm bảo sự hài lòng.', icon: '🔄' },
        { title: 'Tối ưu chi phí', desc: 'Chất lượng cao đi đôi với giá thành hợp lý, KHÔNG phát sinh chi phí.', icon: '💰' }
    ];

    return (
        <section className="section section-bg-dark">
            <div className="container">
                <h2 className="section-title">Tại Sao Chọn Việt Thành?</h2>
                <p className="section-subtitle">Đến với chúng tôi, bạn sẽ nhận được giá trị đích thực cho mọi công trình.</p>

                <div className="features-grid">
                    {featureList.map((ft, idx) => (
                        <div className="feature-item" key={idx}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{ft.icon}</div>
                            <h3>{ft.title}</h3>
                            <p>{ft.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
