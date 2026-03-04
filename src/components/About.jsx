import aboutImg from '../assets/images/banners/artboard-2b.jpg';

const About = () => {
    return (
        <section id="about" className="about section">
            <div className="container about-grid">
                <div className="about-image reveal">
                    <img src={aboutImg} alt="Công trình xây dựng Việt Thành" />
                    <div className="about-badge">
                        <span className="year">10+</span>
                        <span className="text">Năm Kinh Nghiệm</span>
                    </div>
                </div>

                <div className="about-content reveal">
                    <h3>Về Chúng Tôi</h3>
                    <h2>Công Ty TNHH Cơ Khí Xây Dựng Thương Mại Việt Thành</h2>
                    <p>
                        Công Ty TNHH Cơ Khí Xây Dựng Thương Mại Việt Thành tự hào là đơn vị uy tín hàng đầu trong lĩnh vực thiết kế và thi công nhà thép tiền chế, xây dựng dân dụng tại khu vực Tây Nguyên và các tỉnh phía Nam.
                    </p>
                    <p>
                        Với đội ngũ kỹ sư tâm huyết và quy trình thi công chuyên nghiệp, chúng tôi mang đến những giải pháp tối ưu về kết cấu, đảm bảo tính thẩm mỹ cao và tiết kiệm chi phí tối đa cho nhà đầu tư. Việt Thành luôn cam kết chất lượng bền vững cho mọi công trình.
                    </p>

                    <div className="about-features">
                        <div className="about-feature">
                            <span className="feature-icon">✓</span> Khảo sát công trình miễn phí
                        </div>
                        <div className="about-feature">
                            <span className="feature-icon">✓</span> Giám sát thi công 24/24
                        </div>
                        <div className="about-feature">
                            <span className="feature-icon">✓</span> Không phát sinh chi phí
                        </div>
                        <div className="about-feature">
                            <span className="feature-icon">✓</span> Cam kết thi công đúng hạn
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
