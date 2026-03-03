const Services = () => {
    const servicesData = [
        {
            title: 'Nhà Thép Tiền Chế Showroom',
            desc: 'Thiết kế showroom nổi bật, đẹp mắt giúp nâng cao hiệu quả kinh doanh. Nhà tiền chế cho phép xây dựng nhanh chóng, không gian rộng rãi và thẩm mỹ cao.',
            icon: '🏢'
        },
        {
            title: 'Xây Dựng Dân Dụng',
            desc: 'Chuyên thi công, thiết kế các công trình xây dựng uy tín. Mang đến cho khách hàng những công trình tuyệt đẹp, chất lượng và bền vững theo thời gian.',
            icon: '🏠'
        },
        {
            title: 'Lắp Đặt Thang Máy',
            desc: 'Cung cấp dịch vụ thiết kế và thi công lắp đặt thang máy an toàn, hiệu quả. Đội ngũ kỹ sư đảm bảo hệ thống hoạt động ổn định, đạt chuẩn cho mọi công trình.',
            icon: '🛗'
        },
        {
            title: 'Bảo Dưỡng Cầu Trục',
            desc: 'Tư vấn, thiết kế, thi công và bảo dưỡng cầu trục chất lượng cao. Báo giá chi tiết dựa trên khẩu độ, chiều cao, tốc độ và môi trường vận hành.',
            icon: '⚙️'
        }
    ];

    return (
        <section id="services" className="services section">
            <div className="container">
                <h3 className="section-subtitle" style={{ marginBottom: "10px", color: "var(--secondary)" }}>LĨNH VỰC HOẠT ĐỘNG</h3>
                <h2 className="section-title">Dịch Vụ Thiết Kế Thi Công</h2>
                <p className="section-subtitle">
                    Công Ty TNHH Cơ Khí Xây Dựng Thương Mại Việt Thành tự hào là đơn vị uy tín trong lĩnh vực thiết kế và thi công nhà thép tiền chế, xây dựng dân dụng và lắp đặt thang máy tại khu vực Tây Nguyên và miền Nam.
                </p>
                <p className="section-subtitle">
                    Với đội ngũ kỹ sư giàu kinh nghiệm và quy trình làm việc chuyên nghiệp, chúng tôi cam kết mang đến những giải pháp tối ưu về kết cấu, thẩm mỹ và chi phí, đảm bảo sự hài lòng tuyệt đối cho mọi khách hàng.
                </p>

                <div className="grid grid-2">
                    {servicesData.map((srv, idx) => (
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
