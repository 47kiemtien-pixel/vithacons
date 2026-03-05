import useSiteData from '../hooks/useSiteData';
import { Link } from 'react-router-dom'
import logo from '../assets/brand/logo-new.png'

const Footer = () => {
    const { data } = useSiteData();
    const { general } = data;
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-col" style={{ gridColumn: 'span 2' }}>
                        <a href="#" className="footer-logo">
                            <img src={logo} alt="Vitha Cons Logo" style={{ height: '60px', width: 'auto', marginBottom: '15px' }} />
                        </a>
                        <p className="footer-desc">
                            Công Ty TNHH Cơ Khí Xây Dựng Thương Mại Việt Thành tự hào là đơn vị uy tín trong lĩnh vực thiết kế, thi công nhà tiền chế và xây dựng dân dụng. Chúng tôi cam kết chất lượng, tiến độ và giải pháp tối ưu chi phí.
                        </p>
                        <div style={{ marginTop: '15px', fontSize: '0.9rem', opacity: 0.8 }}>
                            <p><strong>Giấy phép ĐKKD:</strong> {general.license}</p>
                            <p><strong>Người đại diện:</strong> {general.representative}</p>
                            <p><strong>Trụ sở chính:</strong> {general.addressHCM}</p>
                            <p><strong>Văn phòng:</strong> {general.addressDakLak}</p>
                        </div>
                    </div>
                    <div className="footer-col">
                        <h4>Danh Mục</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Trang Chủ</Link></li>
                            <li><a href="#about">Giới Thiệu</a></li>
                            <li><Link to="/thiet-ke-thi-cong">Dịch Vụ Thi Công</Link></li>
                            <li><Link to="/nha-thep-tien-che">Nhà Thép Tiền Chế</Link></li>
                            <li><a href="#workflow">Quy Trình</a></li>
                            <li><a href="#contact">Liên Hệ</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Bản quyền thuộc về {general.companyName}.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
