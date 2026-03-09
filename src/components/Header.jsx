import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import useSiteData from '../hooks/useSiteData';
import logo from '../assets/brand/logo-new.png'

const Header = () => {
    const { data } = useSiteData();
    const { general } = data;
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'TRANG CHỦ', path: '/' },
        {
            name: 'XÂY DỰNG VIỆT THÀNH',
            dropdown: [
                { name: 'DỊCH VỤ THIẾT KẾ THI CÔNG', path: '/thiet-ke-thi-cong' },
                { name: 'NHÀ THÉP TIỀN CHẾ', path: '/nha-thep-tien-che' },
                { name: 'XÂY DỰNG DÂN DỤNG', path: '/xay-dung-dan-dung' },
                { name: 'THIẾT KẾ LẮP ĐẶT THANG MÁY', path: '/thang-may' },
            ]
        },
        { name: 'DỰ ÁN', path: '/#projects' },
        { name: 'QUY TRÌNH', path: '/#workflow' },
        { name: 'LIÊN HỆ', path: '/#contact' },
        { name: 'TUYỂN DỤNG', path: '/tuyen-dung' }
    ];

    const handleLinkClick = (path) => {
        setMobileMenuOpen(false);
        setDropdownOpen(false);

        if (path === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        if (path.startsWith('/#')) {
            const id = path.substring(2);
            if (location.pathname === '/') {
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <Link to="/" className="logo" onClick={() => handleLinkClick('/')}>
                    <img src={logo} alt="Vitha Cons Logo" style={{ height: '50px', width: 'auto' }} />
                </Link>

                <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
                    {navLinks.map((link, idx) => (
                        link.dropdown ? (
                            <div
                                key={idx}
                                className={`dropdown ${dropdownOpen ? 'open' : ''}`}
                                onMouseEnter={() => setDropdownOpen(true)}
                                onMouseLeave={() => setDropdownOpen(false)}
                            >
                                <span className="nav-link dropdown-toggle" onClick={() => setDropdownOpen(!dropdownOpen)}>
                                    {link.name} <span className="arrow">▼</span>
                                </span>
                                <div className="dropdown-menu">
                                    {link.dropdown.map((sub, sIdx) => (
                                        <Link
                                            key={sIdx}
                                            to={sub.path}
                                            className="dropdown-item"
                                            onClick={() => handleLinkClick(sub.path)}
                                        >
                                            {sub.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            link.external ? (
                                <a
                                    key={idx}
                                    href={link.path}
                                    className="nav-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {link.name}
                                </a>
                            ) : (
                                <Link
                                    key={idx}
                                    to={link.path}
                                    className="nav-link"
                                    onClick={() => handleLinkClick(link.path)}
                                >
                                    {link.name}
                                </Link>
                            )
                        )
                    ))}
                    <a href={`tel:${(general?.phone || '').replace(/\s/g, '')}`} className="btn btn-secondary" style={{ marginLeft: '10px' }}>
                        ☎ {general?.phone || 'Liên hệ'}
                    </a>
                </nav>

                <div className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? '✕' : '☰'}
                </div>
            </div>
        </header>
    );
};

export default Header;
