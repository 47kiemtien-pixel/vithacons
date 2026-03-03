const SteelBuildings = () => {
    return (
        <main className="page-content section">
            <div className="container">
                <h1 className="section-title">Nhà Thép Tiền Chế</h1>
                <p className="section-subtitle">Giải pháp xây dựng thông minh, tối ưu chi phí và bứt phá về tiến độ cho mọi doanh nghiệp.</p>

                <div className="grid grid-2 reveal">
                    <div className="text-content">
                        <h3>Công Nghệ Xây Dựng Tối Ưu</h3>
                        <p>Nhà thép tiền chế của Việt Thành không chỉ là hệ khung thép đơn thuần, mà là một giải pháp tổng thể được tính toán kỹ lưỡng bởi đội ngũ kỹ sư tâm huyết.</p>
                        <ul>
                            <li><strong>Tiết kiệm tối đa:</strong> Giảm tới <strong>35% chi phí</strong> đầu tư so với bê tông cốt thép truyền thống nhờ tối ưu vật liệu.</li>
                            <li><strong>Vật liệu thượng hạng:</strong> Sử dụng thép cường độ cao, hệ khung kèo mạ kẽm chống ăn mòn tuyệt đối.</li>
                            <li><strong>Thi công thần tốc:</strong> Quy trình lắp ghép module giúp hoàn thành dự án nhanh gấp 2 lần, ít phụ thuộc thời tiết.</li>
                            <li><strong>Linh hoạt & Bền bỉ:</strong> Dễ dàng tháo dỡ, mở rộng hoặc di dời. Chịu được tải trọng lớn và điều kiện khắc nghiệt.</li>
                        </ul>
                    </div>
                    <div className="image-content">
                        <img src="http://vithacon.vn/sanpham_images/2622/Nha%20thep%20tien%20che%201.jpg" alt="Nhà thép tiền chế Việt Thành" className="rounded-img" />
                    </div>
                </div>

                <div className="services-details reveal" style={{ marginTop: '60px' }}>
                    <h3 className="text-center">Quy Trình Thi Công Chuyên Nghiệp</h3>
                    <div className="grid grid-3 benefit-grid">
                        <div className="benefit-card">
                            <span className="benefit-icon">📝</span>
                            <h4>1. Khảo sát & Tư vấn</h4>
                            <p>Tiếp nhận thông tin và khảo sát thực địa để đưa ra phương án tối ưu nhất.</p>
                        </div>
                        <div className="benefit-card">
                            <span className="benefit-icon">📐</span>
                            <h4>2. Thiết kế & Báo giá</h4>
                            <p>Lập bản vẽ kỹ thuật chi tiết và dự toán minh bạch, không phát sinh.</p>
                        </div>
                        <div className="benefit-card">
                            <span className="benefit-icon">🤝</span>
                            <h4>3. Ký kết hợp đồng</h4>
                            <p>Xác lập cam kết về chất lượng, tiến độ và các điều khoản bảo hành.</p>
                        </div>
                        <div className="benefit-card">
                            <span className="benefit-icon">🏗️</span>
                            <h4>4. Gia công tại xưởng</h4>
                            <p>Sản xuất các cấu kiện thép chính xác bằng máy móc hiện đại.</p>
                        </div>
                        <div className="benefit-card">
                            <span className="benefit-icon">🛠️</span>
                            <h4>5. Lắp dựng hiện trường</h4>
                            <p>Đội ngũ công nhân lành nghề lắp ghép dưới sự giám sát chặt chẽ.</p>
                        </div>
                        <div className="benefit-card">
                            <span className="benefit-icon">✅</span>
                            <h4>6. Nghiệm thu & BH</h4>
                            <p>Bàn giao công trình hoàn thiện và thực hiện chế độ bảo hành dài hạn.</p>
                        </div>
                    </div>
                </div>

                <div className="cta-box reveal" style={{ background: '#f8fafc', padding: '40px', borderRadius: '15px', marginTop: '60px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
                    <h3>Việt Thành Cam Kết: Giám Sát 24/24 - Đúng Tiến Độ</h3>
                    <p>Hãy để chúng tôi đồng hành cùng sự phát triển bền vững của doanh nghiệp bạn.</p>
                    <a href="tel:0972524799" className="btn btn-primary">Nhận Báo Giá Nhà Thép: 0972 524 799</a>
                </div>
            </div>
        </main>
    );
};

export default SteelBuildings;
