import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSiteData from '../hooks/useSiteData';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const { data, updateData, resetData } = useSiteData();
    const [activeTab, setActiveTab] = useState('general');
    const [statusMsg, setStatusMsg] = useState('');

    const handleLogout = () => {
        localStorage.removeItem('isAdminAuthenticated');
        navigate('/admin/login');
    };

    const handleInputChange = (section, field, value) => {
        const newData = { ...data };
        newData[section][field] = value;
        updateData(newData);
        showStatus('Đã cập nhật dữ liệu tạm thời!');
    };

    const handleListChange = (section, index, field, value) => {
        const newData = { ...data };
        if (field) {
            newData[section].list[index][field] = value;
        } else {
            // For simple string arrays like about.features
            newData[section].features[index] = value;
        }
        updateData(newData);
        showStatus('Đã cập nhật danh sách!');
    };

    const showStatus = (msg) => {
        setStatusMsg(msg);
        setTimeout(() => setStatusMsg(''), 3000);
    };

    const renderGeneralForm = () => (
        <div className="admin-form-section">
            <h2>Thông Tin Chung</h2>
            <div className="form-grid">
                <div className="field-group">
                    <label>Tên Công Ty</label>
                    <input type="text" value={data.general.companyName} onChange={(e) => handleInputChange('general', 'companyName', e.target.value)} />
                </div>
                <div className="field-group">
                    <label>Số Điện Thoại</label>
                    <input type="text" value={data.general.phone} onChange={(e) => handleInputChange('general', 'phone', e.target.value)} />
                </div>
                <div className="field-group">
                    <label>Email</label>
                    <input type="text" value={data.general.email} onChange={(e) => handleInputChange('general', 'email', e.target.value)} />
                </div>
                <div className="field-group">
                    <label>Website</label>
                    <input type="text" value={data.general.website} onChange={(e) => handleInputChange('general', 'website', e.target.value)} />
                </div>
                <div className="field-group full-width">
                    <label>Địa Chỉ HCM</label>
                    <input type="text" value={data.general.addressHCM} onChange={(e) => handleInputChange('general', 'addressHCM', e.target.value)} />
                </div>
                <div className="field-group full-width">
                    <label>Địa Chỉ Đắk Lắk</label>
                    <input type="text" value={data.general.addressDakLak} onChange={(e) => handleInputChange('general', 'addressDakLak', e.target.value)} />
                </div>
            </div>
        </div>
    );

    const renderHeroForm = () => (
        <div className="admin-form-section">
            <h2>Trang Chủ (Hero)</h2>
            <div className="form-grid">
                <div className="field-group full-width">
                    <label>Tiêu đề chính</label>
                    <input type="text" value={data.hero.title} onChange={(e) => handleInputChange('hero', 'title', e.target.value)} />
                </div>
                <div className="field-group full-width">
                    <label>Tiêu đề phụ (Subtitle)</label>
                    <input type="text" value={data.hero.subtitle} onChange={(e) => handleInputChange('hero', 'subtitle', e.target.value)} />
                </div>
                <div className="field-group full-width">
                    <label>Mô tả ngắn</label>
                    <textarea value={data.hero.description} onChange={(e) => handleInputChange('hero', 'description', e.target.value)} rows="3" />
                </div>
            </div>
        </div>
    );

    const renderServicesForm = () => (
        <div className="admin-form-section">
            <h2>Dịch Vụ & Lĩnh Vực</h2>
            <div className="field-group full-width">
                <label>Tiêu đề phần</label>
                <input type="text" value={data.services.title} onChange={(e) => handleInputChange('services', 'title', e.target.value)} />
            </div>

            <div className="list-editor">
                <h3>Danh sách dịch vụ</h3>
                {data.services.list.map((srv, idx) => (
                    <div key={idx} className="list-item-card">
                        <div className="item-header">Dịch vụ #{idx + 1}</div>
                        <input type="text" value={srv.title} onChange={(e) => handleListChange('services', idx, 'title', e.target.value)} placeholder="Tên dịch vụ" />
                        <textarea value={srv.desc} onChange={(e) => handleListChange('services', idx, 'desc', e.target.value)} placeholder="Mô tả" rows="2" />
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="admin-dashboard">
            <aside className="admin-sidebar">
                <div className="sidebar-header">
                    <h3>Vithacon CMS</h3>
                </div>
                <nav className="sidebar-nav">
                    <ul>
                        <li className={activeTab === 'general' ? 'active' : ''} onClick={() => setActiveTab('general')}>Thông tin chung</li>
                        <li className={activeTab === 'hero' ? 'active' : ''} onClick={() => setActiveTab('hero')}>Trang chủ (Hero)</li>
                        <li className={activeTab === 'services' ? 'active' : ''} onClick={() => setActiveTab('services')}>Dịch vụ</li>
                        <li onClick={() => window.open('/', '_blank')}>Xem trang chủ ↗</li>
                    </ul>
                </nav>
                <div className="admin-actions">
                    <button onClick={resetData} className="reset-btn">Mặc định</button>
                    <button onClick={handleLogout} className="logout-btn">Đăng xuất</button>
                </div>
            </aside>

            <main className="admin-main">
                <header className="admin-header">
                    <h1>Quản Lý Nội Dung</h1>
                    {statusMsg && <div className="status-toast">{statusMsg}</div>}
                    <div className="user-info">
                        <span>Admin Mode</span>
                    </div>
                </header>

                <div className="admin-content">
                    {activeTab === 'general' && renderGeneralForm()}
                    {activeTab === 'hero' && renderHeroForm()}
                    {activeTab === 'services' && renderServicesForm()}

                    <div className="save-notice">
                        <p>💡 <strong>Lưu ý:</strong> Các thay đổi sẽ hiển thị ngay khi bạn "Xem trang chủ". Để lưu vĩnh viễn vào mã nguồn, hãy yêu cầu AI cập nhật file siteData.js với dữ liệu mới này.</p>
                        <button className="btn btn-secondary" onClick={() => {
                            const dataStr = JSON.stringify(data, null, 2);
                            navigator.clipboard.writeText(dataStr);
                            alert('Đã copy dữ liệu JSON vào Clipboard. Hãy gửi nó cho AI để cập nhật vĩnh viễn!');
                        }}>Copy JSON Dữ Liệu</button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
