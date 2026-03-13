import React, { useState, useMemo } from 'react';
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
            zalo: 'https://zalo.me/0972524799'
        },
        {
            id: 'ke-toan',
            title: 'Kế Toán Tổng Hợp',
            salary: '7.000.000 - 12.000.000 VNĐ',
            desc: 'Thực hiện nghiệp vụ kế toán, theo dõi thu chi, báo cáo tài chính & thuế.',
            pdf: '/tuyen-dung-ke-toan.pdf',
            zalo: 'https://zalo.me/0972524799'
        },
        {
            id: 'tho-han',
            title: 'Thợ Hàn Cơ Khí',
            salary: 'Từ 15.000.000 VNĐ',
            desc: 'Hàn, gia công & lắp dựng kết cấu thép nhà xưởng tiền chế.',
            pdf: '/tuyen-dung-tho-han.pdf',
            zalo: 'https://zalo.me/0972524799'
        }
    ];

    const [selectedJob, setSelectedJob] = useState(jobs[0]);
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const plugins = useMemo(() => [defaultLayoutPluginInstance], []);

    return (
        <div className="recruitment-page page-content">
            <div className="container">
                <div className="recruitment-header">
                    <h1>Cơ Hội Nghề Nghiệp</h1>
                    <p className="section-subtitle">Gia nhập đội ngũ Việt Thành để cùng xây dựng những công trình bền vững.</p>
                </div>

                <div className="recruitment-layout">
                    {/* Sidebar: Job List */}
                    <div className="job-sidebar">
                        {jobs.map((job) => (
                            <div 
                                key={job.id} 
                                className={`job-sidebar-item ${selectedJob.id === job.id ? 'active' : ''}`}
                                onClick={() => setSelectedJob(job)}
                            >
                                <span className="sidebar-salary">{job.salary}</span>
                                <h4>{job.title}</h4>
                                <p>{job.desc.substring(0, 60)}...</p>
                            </div>
                        ))}
                    </div>

                    {/* Main Content: PDF Viewer */}
                    <div className="viewer-section">
                        <div className="viewer-header">
                            <h2>{selectedJob.title}</h2>
                            <a 
                                href={selectedJob.zalo} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="btn btn-secondary btn-sm"
                            >
                                Ứng Tuyển Zalo
                            </a>
                        </div>
                        <div className="viewer-content">
                            <div className="pdf-viewer-wrapper" style={{ height: '800px', overflow: 'hidden' }}>
                                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                                    <Viewer
                                        key={selectedJob.id} // Force re-render viewer on job change
                                        fileUrl={selectedJob.pdf}
                                        plugins={plugins}
                                    />
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
