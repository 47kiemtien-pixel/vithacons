import React, { useState, useMemo, useEffect } from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const TuyenDung = () => {
    const jobs = [
        {
            id: 'ky-thuat',
            title: 'Kỹ Thuật Công Trình',
            salary: 'Lên tới 20.000.000 VNĐ',
            desc: 'Triển khai bản vẽ, bóc tách khối lượng & giám sát chất lượng tại công trình.',
            pdf: '/tuyen-dung-ky-thuat.pdf',
            zalo: 'https://zalo.me/0972524799',
            reqs: ['ĐH/CĐ Xây dựng/Cơ Khí', 'Kinh nghiệm 2-3 năm', 'Thành thạo AutoCAD']
        },
        {
            id: 'ke-toan',
            title: 'Kế Toán Tổng Hợp',
            salary: '7.000.000 - 12.000.000 VNĐ',
            desc: 'Thực hiện nghiệp vụ kế toán, theo dõi thu chi, báo cáo tài chính & thuế.',
            pdf: '/tuyen-dung-ke-toan.pdf',
            zalo: 'https://zalo.me/0972524799',
            reqs: ['CĐ/ĐH chuyên ngành Kế toán', 'Kinh nghiệm tối thiểu 2 năm', 'Thành thạo Excel']
        },
        {
            id: 'tho-han',
            title: 'Thợ Hàn Cơ Khí',
            salary: 'Từ 15.000.000 VNĐ',
            desc: 'Hàn, gia công & lắp dựng kết cấu thép nhà xưởng tiền chế.',
            pdf: '/tuyen-dung-tho-han.pdf',
            zalo: 'https://zalo.me/0972524799',
            reqs: ['Biết hàn que/MIG cơ bản', 'Có thể làm việc trên cao', 'Sức khỏe tốt']
        },
        {
            id: 'noi-that',
            title: 'Thiết kế nội thất',
            salary: '15.000.000 - 20.000.000 VNĐ',
            desc: 'Thiết kế phối cảnh 3D, triển khai bản vẽ kỹ thuật nội thất showroom, văn phòng.',
            pdf: '/tuyen-dung-noi-that.pdf',
            zalo: 'https://zalo.me/0972524799',
            reqs: ['ĐH/CĐ chuyên ngành Nội thất/Kiến trúc', 'Thành thạo 3Ds Max, AutoCAD, Photoshop', 'Có gu thẩm mỹ tốt']
        }
    ];

    const [selectedJob, setSelectedJob] = useState(null);
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const plugins = useMemo(() => [defaultLayoutPluginInstance], []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [selectedJob]);

    if (selectedJob) {
        return (
            <div className="recruitment-detail-view reveal">
                <div className="detail-header-bar">
                    <div className="container">
                        <div className="header-bar-content">
                            <button className="btn-back" onClick={() => setSelectedJob(null)}>
                                <span>←</span> Quay lại danh sách
                            </button>
                            <h2>{selectedJob.title}</h2>
                            <a href={selectedJob.zalo} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
                                Ứng tuyển Zalo
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="container" style={{ paddingTop: '100px', paddingBottom: '40px' }}>
                    <div className="pdf-full-view">
                        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                            <Viewer
                                fileUrl={selectedJob.pdf}
                                plugins={plugins}
                            />
                        </Worker>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="recruitment-page page-content">
            <div className="container">
                <div className="recruitment-header reveal text-center">
                    <h1>Cơ Hội Nghề Nghiệp</h1>
                    <p className="section-subtitle">Gia nhập đội ngũ Việt Thành để cùng xây dựng những công trình bền vững.</p>
                </div>

                <div className="recruitment-grid">
                    {jobs.map((job) => (
                        <div className="job-card-new reveal" key={job.id}>
                            <div className="card-top">
                                <span className="job-badge">Phổ biến</span>
                                <h3>{job.title}</h3>
                                <div className="job-salary">💰 {job.salary}</div>
                            </div>
                            
                            <div className="card-body">
                                <p>{job.desc}</p>
                                <ul className="brief-reqs">
                                    {job.reqs.map((req, i) => <li key={i}>{req}</li>)}
                                </ul>
                            </div>

                            <div className="card-footer">
                                <button className="btn-detail-link" onClick={() => setSelectedJob(job)}>
                                    Xem chi tiết PDF <span>→</span>
                                </button>
                                <a href={job.zalo} target="_blank" rel="noopener noreferrer" className="btn btn-secondary w-100">
                                    Ứng Tuyển Ngay
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
