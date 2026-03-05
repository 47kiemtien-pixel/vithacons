import useSiteData from '../hooks/useSiteData';
import heroImg from '../assets/images/banners/artboard-3.jpg';
import model1 from '../assets/images/elevators/tk-lap-dat-thang-may-1.jpg';
import model2 from '../assets/images/elevators/tk-lap-dat-thang-may-2.jpg';
import model3 from '../assets/images/elevators/tk-lap-dat-thang-may-3.jpg';
import model4 from '../assets/images/elevators/tk-lap-dat-thang-may-4.jpg';
import model5 from '../assets/images/elevators/tk-lap-dat-thang-may-5.jpg';
import model6 from '../assets/images/elevators/tk-lap-dat-thang-may-6.jpg';
import brandLogo from '../assets/brand/logo-new.png';

const ElevatorServices = () => {
    const { data } = useSiteData();
    const { general } = data;
    const phoneNoSpace = (general?.phone || '').replace(/\s/g, '');
    const images = {
        logo: brandLogo,
        hero: heroImg,
        models: [
            {
                url: model1,
                title: "Thang Máy Kính Vàng",
                desc: "Thiết kế sang trọng với khung mạ vàng, tối ưu cho biệt thự cao cấp."
            },
            {
                url: model2,
                title: "Thang Máy Kính Bạc",
                desc: "Vẻ đẹp hiện đại, tinh tế, phù hợp với mọi không gian kiến trúc."
            },
            {
                url: model3,
                title: "Thang Khung Thép Đen",
                desc: "Phong cách công nghiệp mạnh mẽ và bền bỉ theo thời gian."
            },
            {
                url: model4,
                title: "Thang Inox Gương",
                desc: "Sự kết hợp hoàn hảo giữa Inox 304 chất lượng cao và kính."
            },
            {
                url: model5,
                title: "Nội Thất Cabin Luxury",
                desc: "Không gian bên trong được chăm chút tỉ mỉ từ sàn đến trần."
            },
            {
                url: model6,
                title: "Dòng Thang Gia Đình",
                desc: "Tiết kiệm diện tích hố thang, vận hành êm ái và an toàn tuyệt đối."
            }
        ]
    };

    return (
        <main className="elevator-page">
            {/* Hero Section */}
            <section className="hero-banner" style={{ position: 'relative', height: '400px', overflow: 'hidden' }}>
                <img
                    src={images.hero}
                    alt="Elevator Banner"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))', display: 'flex', flexDirection: 'column',
                    justifyContent: 'center', alignItems: 'center', color: 'white', textAlign: 'center', padding: '20px'
                }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '10px', textShadow: '0 4px 15px rgba(0,0,0,0.8)', color: 'white' }}>Thang Máy {general?.companyName?.includes('Việt Thành') ? 'Việt Thành' : general?.companyName}</h1>
                    <p style={{ fontSize: '1.2rem', maxWidth: '800px', textShadow: '0 2px 4px rgba(0,0,0,0.6)', color: 'white' }}>Giải pháp di chuyển thông minh cho những công trình hiện đại</p>
                </div>
            </section>

            <div className="container" style={{ padding: '60px 20px' }}>
                {/* Introduction */}
                <div className="grid grid-2 reveal" style={{ alignItems: 'center', gap: '40px', marginBottom: '80px' }}>
                    <div className="text-content">
                        <img src={images.logo} alt="Logo" style={{ width: '150px', marginBottom: '20px' }} />
                        <h2 style={{ color: 'var(--primary)', marginBottom: '20px', fontSize: '2.2rem' }}>Công Nghệ Dẫn Đầu - An Toàn Tuyệt Đối</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155' }}>
                            Tại Việt Thành, chúng tôi không chỉ cung cấp thang máy; chúng tôi mang đến một hệ thống di chuyển
                            <strong style={{ color: 'var(--primary)' }}> an toàn, thông minh và thẩm mỹ</strong>. Với đội ngũ kỹ sư giàu kinh nghiệm, mỗi sản phẩm
                            đều được kiểm định gắt gao theo tiêu chuẩn quốc tế.
                        </p>
                        <div style={{ marginTop: '30px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                                <span style={{ fontSize: '20px', color: '#10b981', marginRight: '10px' }}>✓</span>
                                <strong>Vận hành siêu êm:</strong> Giảm thiểu tối đa tiếng ồn và độ rung.
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                                <span style={{ fontSize: '20px', color: '#10b981', marginRight: '10px' }}>✓</span>
                                <strong>Tiết kiệm 40% điện năng:</strong> Sử dụng động cơ không hộp số hiện đại.
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                                <span style={{ fontSize: '20px', color: '#10b981', marginRight: '10px' }}>✓</span>
                                <strong>Hệ thống cứu hộ tự động (ARD):</strong> An tâm trong mọi sự cố điện.
                            </div>
                        </div>
                    </div>
                    <div className="image-content" style={{ position: 'relative' }}>
                        <img
                            src={images.models[0].url}
                            alt="Thang máy kính"
                            className="rounded-img shadow-lg"
                            style={{ border: '8px solid white' }}
                        />
                        <div style={{
                            position: 'absolute', bottom: '-20px', right: '-20px',
                            background: 'var(--gradient-primary)', color: 'white', padding: '20px',
                            borderRadius: '10px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                        }}>
                            <div style={{ fontSize: '24px', fontWeight: 'bold' }}>10+ Năm</div>
                            <div>Kinh nghiệm lắp đặt</div>
                        </div>
                    </div>
                </div>

                {/* Product Gallery */}
                <section style={{ marginBottom: '80px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <h2 className="section-title">Mẫu Mã Đa Dạng - Phù Hợp Mọi Không Gian</h2>
                        <div style={{ width: '80px', height: '4px', background: 'var(--primary)', margin: '15px auto' }}></div>
                    </div>
                    <div className="grid grid-3" style={{ gap: '30px' }}>
                        {images.models.map((item, index) => (
                            <div key={index} className="service-card reveal" style={{
                                background: 'white', borderRadius: '15px', overflow: 'hidden',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.05)', transition: 'transform 0.3s'
                            }}>
                                <div style={{ height: '300px', overflow: 'hidden' }}>
                                    <img
                                        src={item.url}
                                        alt={item.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                                        onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
                                        onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                                    />
                                </div>
                                <div style={{ padding: '20px' }}>
                                    <h4 style={{ color: 'var(--primary)', marginBottom: '10px' }}>{item.title}</h4>
                                    <p style={{ fontSize: '0.95rem', color: '#64748b' }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Workflow */}
                <div className="safety-standards reveal text-white" style={{
                    background: 'var(--dark)', color: 'white', padding: '60px 40px',
                    borderRadius: '25px', marginBottom: '80px', boxShadow: '0 15px 30px rgba(0,0,0,0.3)'
                }}>
                    <h3 className="text-center" style={{ fontSize: '2.5rem', marginBottom: '50px', color: 'white' }}>Quy Trình Lắp Đặt Chuyên Nghiệp</h3>
                    <div className="grid grid-4" style={{ gap: '20px' }}>
                        {[
                            { step: "01", title: "Khảo Sát Kỹ Thuật", desc: "Kiểm tra kích thước hố thang và tư vấn tải trọng phù hợp." },
                            { step: "02", title: "Lắp Đặt Thiết Bị", desc: "Ray, cabin, máy kéo được lắp dựng bởi chuyên gia." },
                            { step: "03", title: "Kiểm Định An Toàn", desc: "Thực hiện test tải và kiểm định bởi cơ quan nhà nước." },
                            { step: "04", title: "Bàn Giao & Bảo Trì", desc: "Hướng dẫn vận hành và bảo trì định kỳ 01 lần/tháng." }
                        ].map((item, index) => (
                            <div key={index} style={{ padding: '20px', borderLeft: '2px solid rgba(255,255,255,0.1)', position: 'relative' }}>
                                <div style={{
                                    fontSize: '60px',
                                    fontWeight: '900',
                                    color: 'rgba(255,255,255,0.12)',
                                    marginBottom: '-35px',
                                    lineHeight: 1
                                }}>{item.step}</div>
                                <h4 style={{ color: 'var(--secondary)', position: 'relative', zIndex: 1, fontSize: '1.3rem' }}>{item.title}</h4>
                                <p style={{ fontSize: '1rem', color: '#e2e8f0', marginTop: '15px', lineHeight: '1.6' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="cta-box reveal text-white" style={{
                    background: 'var(--gradient-primary)', padding: '60px 30px',
                    borderRadius: '25px', textAlign: 'center', color: 'white',
                    boxShadow: '0 20px 40px rgba(0,107,68,0.3)'
                }}>
                    <h2 style={{ marginBottom: '20px', fontSize: '2.5rem', color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
                        Khởi Tạo Hành Trình Mới Với Việt Thành
                    </h2>
                    <p style={{ marginBottom: '40px', fontSize: '1.2rem', opacity: 0.95, color: 'white' }}>
                        Nhận báo giá chi tiết và phương án thi công tối ưu nhất cho tòa nhà của bạn.
                    </p>
                    <a href={`tel:${phoneNoSpace}`} className="btn" style={{
                        background: 'white', color: 'var(--primary)', fontWeight: '800',
                        padding: '18px 50px', fontSize: '1.2rem', border: 'none',
                        borderRadius: '50px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                        display: 'inline-block', transition: 'transform 0.3s ease'
                    }}>
                        Liên Hệ Ngay: {general?.phone}
                    </a>
                </div>
            </div>
        </main>
    );
};

export default ElevatorServices;
