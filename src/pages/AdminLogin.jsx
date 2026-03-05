import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Use environment variables for security in public repo
    const ADMIN_USER = import.meta.env.VITE_ADMIN_USER;
    const ADMIN_PASS = import.meta.env.VITE_ADMIN_PASS;

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === ADMIN_USER && password === ADMIN_PASS) {
            localStorage.setItem('isAdminAuthenticated', 'true');
            navigate('/admin');
        } else {
            setError('Tên đăng nhập hoặc mật khẩu không đúng!');
        }
    };

    return (
        <div className="admin-login-container">
            <div className="login-card reveal active">
                <h2>Quản Trị Hệ Thống</h2>
                <p>Vui lòng đăng nhập để tiếp tục</p>

                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label>Tên đăng nhập</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Nhập tài khoản"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Mật khẩu</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Nhập mật khẩu"
                            required
                        />
                    </div>
                    {error && <p className="error-msg">{error}</p>}
                    <button type="submit" className="btn btn-primary w-100">Đăng Nhập</button>
                </form>

                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <a href="/" style={{ fontSize: '0.9rem', color: 'var(--gray)' }}>Quay lại trang chủ</a>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
