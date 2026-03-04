import showroomImg from '../assets/images/civil/xay-dung-dan-dung-2.jpg';
import civilImg from '../assets/images/civil/xay-dung-dan-dung-1.jpg';
import elevatorImg from '../assets/images/elevators/tk-lap-dat-thang-may-1.jpg';

const DesignConstruction = () => {
    return (
        <main className="page-content section">
            <div className="container">
                <h1 className="section-title">Dịch Vụ Thiết Kế Thi Công</h1>
                <p className="section-subtitle">Việt Thành tự hào là đơn vị chuyên nghiệp, cung cấp giải pháp trọn gói từ khâu tư vấn, thiết kế đến thi công hoàn thiện.</p>

                {/* Sub-service 1: Showroom */}
                <div className="service-deep-item reveal">
                    <div className="grid grid-2">
                        <div className="image-content">
                            <img src={showroomImg} alt="Showroom tiền chế" className="rounded-img" />
                        </div>
                        <div className="text-content">
                            <h3>Thiết Kế Thi Công Showroom Nhà Tiền Chế</h3>
                            <p>Thiết kế showroom nổi bật, đẹp mắt là yếu tố then chốt giúp nâng cao hiệu quả kinh doanh. Giải pháp nhà thép tiền chế của Việt Thành mang lại:</p>
                            <ul>
                                <li><strong>Tính thẩm mỹ cao:</strong> Kiến trúc hiện đại, sang trọng, thu hút khách hàng từ cái nhìn đầu tiên.</li>
                                <li><strong>Không gian rộng rãi:</strong> Khả năng vượt nhịp lớn tạo mặt bằng trưng bày thông thoáng, không vướng cột.</li>
                                <li><strong>Thi công thần tốc:</strong> Rút ngắn 50% thời gian xây dựng, sớm đưa cửa hàng vào hoạt động.</li>
                                <li><strong>Tiết kiệm & Linh hoạt:</strong> Dễ dàng thay đổi quy mô hoặc di dời sang địa điểm mới.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className="section-divider" />

                {/* Sub-service 2: Civil Construction */}
                <div className="service-deep-item reveal">
                    <div className="grid grid-2 reversed">
                        <div className="text-content">
                            <h3>Thi Công Công Trình Xây Dựng Dân Dụng</h3>
                            <p>Việt Thành kiến tạo những không gian sống lý tưởng, từ nhà phố hiện đại đến những biệt thự sang trọng với cam kết chất lượng bền vững.</p>
                            <ul>
                                <li><strong>Chất lượng chuẩn mực:</strong> Kiểm soát nghiêm ngặt từ vật đầu vào đến từng công đoạn hoàn thiện.</li>
                                <li><strong>Kết cấu vững chãi:</strong> Đội ngũ kỹ sư giàu kinh nghiệm tính toán chi tiết độ an toàn.</li>
                                <li><strong>Tiến độ tin cậy:</strong> Cam kết bàn giao nhà đúng thời hạn, không gây ảnh hưởng đến kế hoạch của chủ đầu tư.</li>
                                <li><strong>An toàn tuyệt đối:</strong> Quy trình thi công chuyên nghiệp, đảm bảo an toàn lao động.</li>
                            </ul>
                        </div>
                        <div className="image-content">
                            <img src={civilImg} alt="Xây dựng dân dụng" className="rounded-img" />
                        </div>
                    </div>
                </div>

                <hr className="section-divider" />

                {/* Sub-service 3: Elevators */}
                <div className="service-deep-item reveal">
                    <div className="grid grid-2">
                        <div className="image-content">
                            <img src={elevatorImg} alt="Thang máy chuyên nghiệp" className="rounded-img" />
                        </div>
                        <div className="text-content">
                            <h3>Thiết Kế & Lắp Đặt Thang Máy Chuyên Nghiệp</h3>
                            <p>Chúng tôi cung cấp hệ thống thang máy an toàn, hiệu quả cho mọi công trình từ nhà dân dụng đến tòa nhà cao tầng.</p>
                            <ul>
                                <li><strong>Giải pháp tối ưu:</strong> Tư vấn dòng thang máy phù hợp với kiến trúc và tải trọng thực tế.</li>
                                <li><strong>Vận hành êm ái:</strong> Công nghệ inverter và thiết bị hiện đại giúp thang chạy nhẹ, không rung lắc.</li>
                                <li><strong>An toàn là số 1:</strong> Hệ thống cứu hộ tự động, phanh an toàn đạt chuẩn quốc tế.</li>
                                <li><strong>Bảo trì định kỳ:</strong> Dịch vụ chăm sóc sau lắp đặt tận tâm, đảm bảo thang hoạt động ổn định 24/7.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className="section-divider" />

                {/* Sub-service 4: Cranes (Cau Truc) */}
                <div className="service-deep-item reveal">
                    <div className="text-content">
                        <h3>Thiết Kế Thi Công Bảo Dưỡng Cầu Trục</h3>
                        <p>Giải pháp nâng hạ chuyên nghiệp cho các nhà xưởng công nghiệp. Chúng tôi cung cấp đa dạng các loại hình cầu trục chuyên biệt:</p>
                        <div className="grid grid-3 benefit-grid">
                            <div className="benefit-card">
                                <h5>Cầu trục phòng nổ</h5>
                                <p>Sử dụng trong môi trường hóa chất, khí gas.</p>
                            </div>
                            <div className="benefit-card">
                                <h5>Cầu trục cảng biển</h5>
                                <p>Sức nâng lớn phục vụ vận tải biển chuyên dụng.</p>
                            </div>
                            <div className="benefit-card">
                                <h5>Cầu trục luyện kim</h5>
                                <p>Chịu được nhiệt độ cực cao trong lò đúc.</p>
                            </div>
                            <div className="benefit-card">
                                <h5>Cầu trục gầu ngoạm</h5>
                                <p>Dùng cho vật liệu rời như cát, than đá.</p>
                            </div>
                            <div className="benefit-card">
                                <h5>Cầu trục mâm từ</h5>
                                <p>Bốc xếp thép tấm bằng nam châm điện.</p>
                            </div>
                            <div className="benefit-card">
                                <h5>Cầu trục thủy điện</h5>
                                <p>Phục vụ lắp đặt, sửa chữa các cửa van lớn.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cta-box reveal" style={{ background: 'var(--primary)', color: 'white', padding: '40px', borderRadius: '15px', marginTop: '70px', textAlign: 'center' }}>
                    <h2 style={{ color: 'white' }}>Nhận Tư Vấn Kỹ Thuật Chi Tiết</h2>
                    <p>Liên hệ ngay để nhận báo giá chi tiết dựa trên khẩu độ, chiều cao nâng hạ và tốc độ làm việc mong muốn.</p>
                    <a href="tel:0972524799" className="btn btn-secondary">Gọi Hotline: 0972 524 799</a>
                </div>
            </div>
        </main>
    );
};

export default DesignConstruction;
