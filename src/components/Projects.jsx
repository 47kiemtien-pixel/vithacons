import civil1 from '../assets/images/civil/xay-dung-dan-dung-1.jpg';
import civil2 from '../assets/images/civil/xay-dung-dan-dung-2.jpg';
import civil3 from '../assets/images/civil/xay-dung-dan-dung-3.jpg';
import civil4 from '../assets/images/civil/xay-dung-dan-dung-4.jpg';
import elev1 from '../assets/images/elevators/tk-lap-dat-thang-may-1.jpg';
import elev2 from '../assets/images/elevators/tk-lap-dat-thang-may-2.jpg';
import elev3 from '../assets/images/elevators/tk-lap-dat-thang-may-3.jpg';
import elev4 from '../assets/images/elevators/tk-lap-dat-thang-may-4.jpg';

const Projects = () => {
    const projectList = [
        { title: 'Công trình Công ty Đạt Vĩnh Tiến', category: 'Thi Công Nhà Xưởng', img: civil1 },
        { title: 'Dự án Holme - Tập đoàn Hòa Bình', category: 'Xây Dựng Căn Hộ', img: civil2 },
        { title: 'Nhà máy Garment Factory', category: 'Kết Cấu Thép', img: civil3 },
        { title: 'Khu nhà xưởng Nhà máy Kenda', category: 'Thi Công Nhà Xưởng', img: civil4 },
        { title: 'Mái kính khu nhà ở Nam Sài Gòn', category: 'Xây Dựng Dân Dụng', img: elev1 },
        { title: 'Nhà máy điện tử Hiệp Phước 2', category: 'Kết Cấu Thép', img: elev2 },
        { title: 'Công ty Kim Thụy Phúc VN', category: 'Thi Công Nhà Xưởng', img: elev3 },
        { title: 'Nhà máy gạch không nung Việt Tân', category: 'Xây Dựng Công Nghiệp', img: elev4 },
        { title: 'Vườn ươm công nghiệp Hàn Quốc Việt Nam', category: 'Thi Công Chọn Gói', img: civil1 },
        { title: 'Thi công Nhà xưởng Nội thất', category: 'Xây Dựng Dân Dụng', img: civil2 }
    ];

    return (
        <section id="projects" className="projects section">
            <div className="container">
                <h2 className="section-title">Dự Án Tiêu Biểu</h2>
                <p className="section-subtitle">Minh chứng cho chất lượng và năng lực thi công của Việt Thành qua các công trình quy mô.</p>

                <div className="grid grid-3">
                    {projectList.map((pj, idx) => (
                        <div className="project-card reveal" key={idx}>
                            <div className="project-img">
                                <img src={pj.img} alt={pj.title} loading="lazy" />
                                <div className="project-overlay">
                                    <span>{pj.category}</span>
                                    <h3>{pj.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
