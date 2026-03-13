import React from 'react';

const TuyenDung = () => {
    const jobs = [
        {
            title: 'Kỹ Thuật Công Trình',
            salary: 'Lên tới 20.000.000 VNĐ',
            reqs: ['ĐH/CĐ Xây dựng/Cơ Khí', 'Kinh nghiệm 2-3 năm', 'Thành thạo AutoCAD', 'Sẵn sàng công tác ngoại tỉnh'],
            desc: 'Triển khai bản vẽ, bóc tách khối lượng & giám sát chất lượng tại công trình.',
            benefits: ['Đầy đủ BHXH, BHYT', 'Thưởng năng lực & Lễ Tết', 'Môi trường năng động'],
            pdf: '/tuyen-dung-ky-thuat.pdf'
        },
        {
            title: 'Kế Toán Tổng Hợp',
            salary: '7.000.000 - 12.000.000 VNĐ',
            reqs: ['CĐ/ĐH chuyên ngành Kế toán', 'Kinh nghiệm tối thiểu 2 năm', 'Thành thạo Excel & phần mềm kế toán'],
            desc: 'Thực hiện nghiệp vụ kế toán, theo dõi thu chi, báo cáo tài chính & thuế.',
            benefits: ['Tham gia BHXH theo quy định', 'Thưởng lương tháng 13', 'Môi trường ổn định'],
            pdf: '/tuyen-dung-ke-toan.pdf'
        },
        {
            title: 'Thợ Hàn Cơ Khí',
            salary: 'Từ 15.000.000 VNĐ',
            reqs: ['Biết hàn que/MIG cơ bản', 'Có thể làm việc trên cao', 'Sức khỏe tốt'],
            desc: 'Hàn, gia công & lắp dựng kết cấu thép nhà xưởng tiền chế.',
            benefits: ['Hỗ trợ ăn ở tại công trình', 'Phụ cấp công tác', 'BHXH đầy đủ'],
            pdf: '/tuyen-dung-tho-han.pdf'
        }
    ];

    return (
        <div className="recruitment-page page-content">
            <div className="container">
                <div className="recruitment-header reveal">
                    <h1>Cơ Hội Nghề Nghiệp</h1>
                    <p className="section-subtitle">Gia nhập đội ngũ Việt Thành để cùng xây dựng những công trình bền vững.</p>
                </div>

                <div className="recruitment-grid">
                    {jobs.map((job, idx) => (
                        <div className="job-card reveal" key={idx}>
                            <div className="job-badge">Đang Tuyển Dụng</div>
                            <h3>{job.title}</h3>
                            <div className="job-salary">💰 {job.salary}</div>
                            
                            <div className="job-info-block">
                                <h4>📋 Mô tả công việc</h4>
                                <p>{job.desc}</p>
                            </div>

                            <div className="job-info-block">
                                <h4>🎓 Yêu cầu</h4>
                                <ul>
                                    {job.reqs.map((req, i) => <li key={i}>{req}</li>)}
                                </ul>
                            </div>

                            <div className="job-info-block">
                                <h4>🎁 Quyền lợi</h4>
                                <ul>
                                    {job.benefits.map((ben, i) => <li key={i}>{ben}</li>)}
                                </ul>
                            </div>

                            <div className="job-footer">
                                <a href="https://zalo.me/0972524799" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                                    Ứng Tuyển Ngay
                                </a>
                                <a href={job.pdf} target="_blank" rel="noopener noreferrer" className="job-pdf-link">
                                    Xem chi tiết PDF
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TuyenDung;
