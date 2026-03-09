import React from 'react';

const TuyenDung = () => {
    return (
        <div style={{ width: '100%', height: 'calc(100vh - 80px)', marginTop: '80px', overflow: 'hidden' }}>
            <iframe
                src="/tuyen-dung-viet-thanh.pdf"
                style={{ width: '100%', height: '100%', border: 'none' }}
                title="Tuyển Dụng Việt Thành PDF"
            />
        </div>
    );
};

export default TuyenDung;
