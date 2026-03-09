import React from 'react';

const TuyenDung = () => {
    return (
        <div style={{ width: '100%', height: 'calc(100vh - 80px)', marginTop: '80px', overflow: 'hidden', backgroundColor: '#f0f0f0' }}>
            <iframe
                src="https://docs.google.com/viewer?url=https://vithacon.vn/tuyen-dung-viet-thanh.pdf&embedded=true"
                style={{ width: '100%', height: '100%', border: 'none' }}
                title="Tuyển Dụng Việt Thành PDF Viewer"
            />
        </div>
    );
};

export default TuyenDung;
