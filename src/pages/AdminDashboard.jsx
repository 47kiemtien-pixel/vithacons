import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isAdminAuthenticated');
        navigate('/admin/login');
    };

    return (
        <div className="admin-dashboard">
            <aside className="admin-sidebar">
                <div className="sidebar-header">
                    <h3>Vithacon Admin</h3>
                </div>
                <nav className="sidebar-nav">
                    <ul>
                        <li className="active">Tổng quan</li>
                        <li>Cấu hình trang</li>
                        <li>Dự án công trình</li>
                        <li>Liên hệ từ khách</li>
                    </ul>
                </nav>
                <button onClick={handleLogout} className="logout-btn">Đăng xuất</button>
            </aside>

            <main className="admin-main">
                <header className="admin-header">
                    <h1>Bảng Điều Khiển</h1>
                    <div className="user-info">
                        <span>Xin chào, Admin</span>
                    </div>
                </header>

                <div className="admin-content">
                    <div className="stats-grid">
                        <div className="stat-card">
                            <h3>Lượt truy cập</h3>
                            <p className="stat-value">1,250</p>
                        </div>
                        <div className="stat-card">
                            <h3>Yêu cầu tư vấn</h3>
                            <p className="stat-value">12</p>
                        </div>
                        <div className="stat-card">
                            <h3>Dự án mới</h3>
                            <p className="stat-value">5</p>
                        </div>
                    </div>

                    <div className="recent-activity">
                        <h2>Thông báo hệ thống</h2>
                        <div className="alert-info" style={{ background: '#e0f2fe', padding: '15px', borderRadius: '8px', color: '#0369a1', marginTop: '15px' }}>
                            Phiên bản quản trị 1.0 đang được triển khai. Bạn hiện có thể xem các thông số cơ bản.
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
