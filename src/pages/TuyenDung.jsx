import React, { useState, useMemo, useEffect, useRef } from 'react';
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
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const sidebarRef = useRef(null);
    const jobRefs = useRef({});

    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const plugins = useMemo(() => [defaultLayoutPluginInstance], []);

    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Auto-play logic
    useEffect(() => {
        if (!isAutoPlay) return;

        const interval = setInterval(() => {
            setSelectedJob((prev) => {
                const currentIndex = jobs.findIndex(j => j.id === prev.id);
                const nextIndex = (currentIndex + 1) % jobs.length;
                return jobs[nextIndex];
            });
        }, 8000); // 8 seconds per slide

        return () => clearInterval(interval);
    }, [isAutoPlay, jobs]);

    // Auto-scroll sidebar when selectedJob changes
    useEffect(() => {
        const activeItem = jobRefs.current[selectedJob.id];
        if (activeItem && sidebarRef.current && window.innerWidth <= 992) {
            const container = sidebarRef.current;
            const scrollLeft = activeItem.offsetLeft - (container.offsetWidth / 2) + (activeItem.offsetWidth / 2);
            container.scrollTo({
                left: scrollLeft,
                behavior: 'smooth'
            });
        }
    }, [selectedJob]);

    const handleJobSelect = (job) => {
        setIsAutoPlay(false);
        setSelectedJob(job);
    };

    return (
        <div className="recruitment-page page-content">
            <div className="container">
                <div className="recruitment-header reveal text-center" style={{ marginBottom: '60px' }}>
                    <h1 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '15px' }}>Cơ Hội Nghề Nghiệp</h1>
                    <p className="section-subtitle">Gia nhập đội ngũ Việt Thành để cùng xây dựng những công trình bền vững và đẳng cấp.</p>
                </div>

                <div className="recruitment-layout reveal">
                    {/* Sidebar: Job List */}
                    <div className="job-sidebar" ref={sidebarRef}>
                        <h3 className="sidebar-title-hidden" style={{ marginBottom: '20px', fontSize: '1.2rem', color: 'var(--gray)', paddingLeft: '10px' }}>
                            Vị Trí Đang Tuyển ({jobs.length})
                        </h3>
                        {jobs.map((job) => (
                            <div 
                                key={job.id} 
                                ref={el => jobRefs.current[job.id] = el}
                                className={`job-sidebar-item ${selectedJob.id === job.id ? 'active' : ''}`}
                                onClick={() => handleJobSelect(job)}
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
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                {!isAutoPlay && (
                                    <button 
                                        className="btn btn-outline btn-sm" 
                                        onClick={() => setIsAutoPlay(true)}
                                        style={{ color: 'var(--gray)', borderColor: '#ddd', padding: '8px 15px', borderRadius: '50px' }}
                                    >
                                        ▶ Chế độ tự động
                                    </button>
                                )}
                                <a href={selectedJob.zalo} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                                    Ứng Tuyển Qua Zalo
                                </a>
                            </div>
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
