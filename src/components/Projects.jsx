const Projects = () => {
    const projectList = [
        { title: 'Công trình Công ty Đạt Vĩnh Tiến', category: 'Thi Công Nhà Xưởng', img: 'http://vithacon.vn/thuvienanh_images/2622/Cong%20trinh%20cong%20ty%20Dat%20Vinh%20Tien.jpg' },
        { title: 'Dự án Holme - Tập đoàn Hòa Bình', category: 'Xây Dựng Căn Hộ', img: 'http://vithacon.vn/thuvienanh_images/2622/Cong%20trinh%20du%20an%20Holme%20tap%20doan%20Hoa%20Binh.jpg' },
        { title: 'Nhà máy Garment Factory', category: 'Kết Cấu Thép', img: 'http://vithacon.vn/thuvienanh_images/2622/Cong%20trinh%20Garment%20Factory.jpg' },
        { title: 'Khu nhà xưởng Nhà máy Kenda', category: 'Thi Công Nhà Xưởng', img: 'http://vithacon.vn/thuvienanh_images/2622/Cong%20trinh%20khu%20nha%20xuong%20nha%20may%20Kenda.jpg' },
        { title: 'Mái kính khu nhà ở Nam Sài Gòn', category: 'Xây Dựng Dân Dụng', img: 'http://vithacon.vn/thuvienanh_images/2622/Cong%20trinh%20mai%20kinh%20khu%20nha%20o%20Nam%20Sai%20Gon.jpg' },
        { title: 'Nhà máy điện tử Hiệp Phước 2', category: 'Kết Cấu Thép', img: 'http://vithacon.vn/thuvienanh_images/2622/Cong%20trinh%20nha%20may%20dien%20tu%20Hiep%20Phuoc%202.jpg' },
        { title: 'Công ty Kim Thụy Phúc VN', category: 'Thi Công Nhà Xưởng', img: 'http://vithacon.vn/thuvienanh_images/2622/Cong%20trinh%20nha%20xuong%20cong%20ty%20Kim%20Thuy%20Phuc%20VN.jpg' },
        { title: 'Nhà máy gạch không nung Việt Tân - Đắk Lắk', category: 'Xây Dựng Công Nghiệp', img: 'http://vithacon.vn/thuvienanh_images/2622/Cong%20trinh%20san%20xuat%20che%20tao%20lap%20dung%20nha%20may%20gach%20ko%20nung%20Viet%20Tan%20Daklak.jpg' },
        { title: 'Vườn ươm công nghiệp Hàn Quốc Việt Nam', category: 'Thi Công Chọn Gói', img: 'http://vithacon.vn/thuvienanh_images/2622/Cong%20trinh%20vuon%20uom%20cong%20nghiep%20HQVN.jpg' },
        { title: 'Thi công Nhà xưởng Nội thất', category: 'Xây Dựng Dân Dụng', img: 'http://vithacon.vn/thuvienanh_images/2622/z6054152189596_300237d5880866b9e975c1209a98c86a.jpg' }
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
