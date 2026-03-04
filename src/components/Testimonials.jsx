import avatarHung from '../assets/images/testimonials/avatar-hung.png';
import avatarMai from '../assets/images/testimonials/avatar-mai.png';
import avatarTuan from '../assets/images/testimonials/avatar-tuan.png';

const Testimonials = () => {
    const reviews = [
        { name: 'Ông Nguyễn Văn Hùng', role: 'GĐ Công ty May Mặc Hùng Phát', text: 'Việt Thành đã thực hiện nhà xưởng của chúng tôi rất chuyên nghiệp. Tiến độ nhanh và chất lượng thép rất đảm bảo.', avatar: avatarHung },
        { name: 'Bà Lê Thị Mai', role: 'Chủ đầu tư Biệt Thự Dĩ An', text: 'Rất hài lòng với đội ngũ kỹ sư của Việt Thành. Họ tư vấn tận tình và giám sát thi công rất kỹ lưỡng.', avatar: avatarMai },
        { name: 'Anh Trần Quốc Tuấn', role: 'Quản lý Showroom Auto', text: 'Giải pháp nhà thép cho showroom của Việt Thành vừa thẩm mỹ vừa giúp chúng tôi tiết kiệm chi phí vận hành.', avatar: avatarTuan }
    ];

    return (
        <section className="testimonials section section-bg-light">
            <div className="container">
                <h2 className="section-title">Khách Hàng Nói Gì?</h2>
                <p className="section-subtitle">Sự hài lòng của khách hàng là thước đo thành công lớn nhất của chúng tôi.</p>

                <div className="grid grid-3">
                    {reviews.map((rv, idx) => (
                        <div className="testimonial-card reveal" key={idx}>
                            <div className="quote-icon">"</div>
                            <p className="testimonial-text">{rv.text}</p>
                            <div className="testimonial-user">
                                <img src={rv.avatar} alt={rv.name} />
                                <div>
                                    <h5>{rv.name}</h5>
                                    <span>{rv.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
