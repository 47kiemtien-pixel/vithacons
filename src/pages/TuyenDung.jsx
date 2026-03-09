import React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const TuyenDung = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <div style={{ width: '100%', height: 'calc(100vh - 80px)', marginTop: '80px', display: 'flex', justifyContent: 'center', backgroundColor: '#e4e4e4' }}>
            <div style={{ width: '100%', maxWidth: '1000px', height: '100%' }}>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                    <Viewer
                        fileUrl="/tuyen-dung-viet-thanh.pdf"
                        plugins={[defaultLayoutPluginInstance]}
                    />
                </Worker>
            </div>
        </div>
    );
};

export default TuyenDung;
