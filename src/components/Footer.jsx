const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-col" style={{ gridColumn: 'span 2' }}>
                        <a href="#" className="footer-logo">VIỆT THÀNH <span>CONSTRUCTION</span></a>
                        <p className="footer-desc">
                            Công Ty TNHH Cơ Khí Xây Dựng Thương Mại Việt Thành tự hào là đơn vị uy tín trong lĩnh vực thiết kế, thi công nhà tiền chế và xây dựng dân dụng. Chúng tôi cam kết chất lượng, tiến độ và giải pháp tối ưu chi phí.
                        </p>
                        <div style={{ marginTop: '15px', fontSize: '0.9rem', opacity: 0.8 }}>
                            <p><strong>Giấy phép ĐKKD:</strong> 3702556996 (Cấp ngày 25/04/2017)</p>
                            <p><strong>Người đại diện:</strong> Lê Quang Khải</p>
                            <p><strong>Trụ sở chính:</strong> Milano ML127 KĐT Ecocity Premia, P. Tân An, Đắk Lắk</p>
                        </div>
                    </div>
                    <div className="footer-col">
                        <h4>Danh Mục</h4>
                        <ul className="footer-links">
                            <li><a href="#home">Trang Chủ</a></li>
                            <li><a href="#about">Giới Thiệu</a></li>
                            <li><a href="#services">Dịch Vụ Thi Công</a></li>
                            <li><a href="#services">Nhà Thép Tiền Chế</a></li>
                            <li><a href="#workflow">Quy Trình</a></li>
                            <li><a href="#contact">Liên Hệ</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Bản quyền thuộc về Công Ty TNHH Cơ Khí Xây Dựng Thương Mại Việt Thành.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
