import heroImg from '../assets/images/banners/Artboard 2b.jpg';
import townhouseImg from '../assets/images/civil/Xay dung dan dung 1.jpg';
import villaImg from '../assets/images/civil/Xay dung dan dung 3.jpg';
import constructionImg from '../assets/images/civil/Xay dung dan dung 4.jpg';

const CivilConstruction = () => {
    // Local images from src/assets
    const images = {
        hero: heroImg,
        townhouse: townhouseImg,
        villa: villaImg,
        construction: constructionImg
    };

    return (
        <main className="page-content section">
            <div className="container">
                <h1 className="section-title">Xây Dựng Dân Dụng</h1>
                <p className="section-subtitle">Việt Thành kiến tạo những tổ ấm mơ ước với tiêu chuẩn kỹ thuật khắt khe và thẩm mỹ tinh tế.</p>

                <div className="grid grid-2 reveal">
                    <div className="text-content">
                        <h3>Kiến Trúc Hoàn Hảo & Phong Thủy</h3>
                        <p>Chúng tôi không chỉ xây nhà, chúng tôi xây dựng không gian sống bền vững. Mỗi công trình dân dụng tại Việt Thành đều được chăm chút kỹ lưỡng:</p>
                        <ul className="feature-list">
                            <li><strong>Tối ưu công năng:</strong> Thiết kế thông minh, tận dụng tối đa ánh sáng và gió tự nhiên.</li>
                            <li><strong>Đảm bảo phong thủy:</strong> Tư vấn bố cục không gian hài hòa, mang lại tài lộc và bình an.</li>
                            <li><strong>Vật liệu chính hãng:</strong> Cam kết 100% vật tư có nguồn gốc rõ ràng, minh bạch về thương hiệu và chất lượng.</li>
                            <li><strong>Bền vững vượt thời gian:</strong> Kỹ thuật xử lý chống thấm, chống nứt đạt tiêu chuẩn cao cấp nhất.</li>
                        </ul>
                    </div>
                    <div className="image-content">
                        <img src={images.hero} alt="Xây dựng dân dụng Việt Thành" className="rounded-img shadow-lg" />
                    </div>
                </div>

                <div className="portfolio-section reveal" style={{ marginTop: '80px' }}>
                    <h2 className="text-center mb-40">Dịch Vụ Trọng Tâm</h2>
                    <div className="grid grid-3 benefit-grid">
                        <div className="benefit-card">
                            <div className="card-image">
                                <img src={images.townhouse} alt="Nhà Phố Hiện Đại" className="card-img-top" />
                            </div>
                            <div className="benefit-content">
                                <h4>Nhà Phố Hiện Đại</h4>
                                <p>Giải pháp thi công tối ưu diện tích cho không gian đô thị chật hẹp, đảm bảo sự thông thoáng và hiện đại.</p>
                            </div>
                        </div>
                        <div className="benefit-card">
                            <div className="card-image">
                                <img src={images.villa} alt="Biệt Thự Sang Trọng" className="card-img-top" />
                            </div>
                            <div className="benefit-content">
                                <h4>Biệt Thự Sang Trọng</h4>
                                <p>Đẳng cấp trong từng chi tiết hoàn thiện, kết cấu vững chãi và không gian sống thượng lưu.</p>
                            </div>
                        </div>
                        <div className="benefit-card">
                            <div className="card-image">
                                <img src={images.construction} alt="Thi Công Chuyên Nghiệp" className="card-img-top" />
                            </div>
                            <div className="benefit-content">
                                <h4>Thi Công Chuyên Nghiệp</h4>
                                <p>Đảm bảo an toàn lao động, vệ sinh công trường và tiến độ thi công đúng cam kết 100%.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cta-box reveal" style={{ background: 'linear-gradient(135deg, var(--primary) 0%, #1a365d 100%)', color: 'white', padding: '60px 40px', borderRadius: '20px', marginTop: '80px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                    <h2 style={{ color: 'white', marginBottom: '20px' }}>Bạn Đang Lên Kế Hoạch Xây Nhà?</h2>
                    <p style={{ fontSize: '1.1rem', marginBottom: '30px', opacity: '0.9' }}>Hãy để chúng tôi tư vấn miễn phí về vật tư và phương án thi công phù hợp nhất với ngân sách của bạn.</p>
                    <a href="#contact" className="btn btn-secondary btn-lg">Nhận Tư Vấn Xây Dựng Miễn Phí</a>
                </div>
            </div>
        </main>
    );
};

export default CivilConstruction;
