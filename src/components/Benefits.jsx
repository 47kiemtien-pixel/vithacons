const Benefits = () => {
    const benefitsData = [
        {
            title: 'Chất lượng dịch vụ',
            desc: 'Cam kết tiêu chuẩn nghiêm ngặt từ khâu thiết kế đến thi công hoàn thiện.',
            icon: '💎'
        },
        {
            title: 'Kinh nghiệm phong phú',
            desc: 'Nhiều năm hoạt động với hàng trăm dự án lớn nhỏ thành công tại Miền Nam.',
            icon: '🏆'
        },
        {
            title: 'Đội ngũ chuyên nghiệp',
            desc: 'Kỹ sư giàu kinh nghiệm, đội thợ lành nghề, giám sát thi công 24/24.',
            icon: '👷'
        },
        {
            title: 'Cam kết tiến độ',
            desc: 'Đảm bảo bàn giao công trình đúng thời hạn đã ký kết trong hợp đồng.',
            icon: '⏱️'
        },
        {
            title: 'Giải pháp linh hoạt',
            desc: 'Sẵn sàng điều chỉnh thiết kế theo yêu cầu riêng biệt của từng khách hàng.',
            icon: '🛠️'
        },
        {
            title: 'Tối ưu chi phí',
            desc: 'Giải pháp công nghệ mới giúp giảm giá thành, cam kết không phát sinh chi phí.',
            icon: '💰'
        }
    ];

    return (
        <section className="benefits section-bg">
            <div className="container">
                <div className="section-header reveal">
                    <h3 className="section-subtitle">ĐẾN VỚI VIỆT THÀNH BẠN SẼ NHẬN ĐƯỢC</h3>
                    <h2 className="section-title">Tại Sao Nên Chọn Chúng Tôi?</h2>
                </div>
                <div className="grid grid-3">
                    {benefitsData.map((item, idx) => (
                        <div className="benefit-card reveal" key={idx}>
                            <div className="benefit-icon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
