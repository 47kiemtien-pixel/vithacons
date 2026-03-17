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

    const [selectedJob, setSelectedJob] = useState(jobs[0]);
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const plugins = useMemo(() => [defaultLayoutPluginInstance], []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="recruitment-page page-content">
            <div className="container">
                <div className="recruitment-header reveal text-center" style={{ marginBottom: '60px' }}>
                    <h1 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '15px' }}>Cơ Hội Nghề Nghiệp</h1>
                    <p className="section-subtitle">Gia nhập đội ngũ Việt Thành để cùng xây dựng những công trình bền vững và đẳng cấp.</p>
                </div>

                <div className="recruitment-layout reveal">
                    {/* Sidebar: Job List */}
                    <div className="job-sidebar">
                        <h3 style={{ marginBottom: '20px', fontSize: '1.2rem', color: 'var(--gray)', paddingLeft: '10px' }}>
                            Vị Trí Đang Tuyển ({jobs.length})
                        </h3>
                        {jobs.map((job) => (
                            <div 
                                key={job.id} 
                                className={`job-sidebar-item ${selectedJob.id === job.id ? 'active' : ''}`}
                                onClick={() => setSelectedJob(job)}
                            >
                                <span className="sidebar-salary">💰 {job.salary}</span>
                                <h4>{job.title}</h4>
                                <p>{job.desc.substring(0, 70)}...</p>
                            </div>
                        ))}
                    </div>

                    {/* Main Content: Job Detail Viewer */}
                    <div className="viewer-section">
                        <div className="viewer-header">
                            <div>
                                <h2>{selectedJob.title}</h2>
                                <p style={{ color: 'var(--gray)', fontSize: '0.9rem', marginTop: '5px' }}>
                                    <span style={{ color: 'var(--secondary)', fontWeight: '700' }}>Thu nhập:</span> {selectedJob.salary}
                                </p>
                            </div>
                            <a href={selectedJob.zalo} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                                Ứng Tuyển Qua Zalo
                            </a>
                        </div>
                        
                        <div className="viewer-content">
                            <div className="pdf-full-view" style={{ height: '750px', borderRadius: '0' }}>
                                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                                    <div key={selectedJob.id}>
                                        <Viewer
                                            fileUrl={selectedJob.pdf}
                                            plugins={plugins}
                                        />
                                    </div>
                                </Worker>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TuyenDung;
