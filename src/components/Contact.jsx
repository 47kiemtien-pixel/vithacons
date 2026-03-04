const Contact = () => {
    return (
        <section id="contact" className="section" style={{ backgroundColor: '#fff' }}>
            <div className="container">
                <div className="grid grid-2" style={{ alignItems: 'center', backgroundColor: '#f8fafc', padding: '50px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                    <div>
                        <h2 className="text-primary" style={{ fontSize: '2rem', marginBottom: '20px' }}>Cần Tư Vấn? Liên Hệ Ngay Hôm Nay</h2>
                        <p style={{ color: 'var(--gray)', marginBottom: '30px', fontSize: '1.1rem' }}>
                            Chúng tôi sẵn sàng hỗ trợ mọi thắc mắc về dịch vụ thiết kế và thi công. Hãy liên hệ để được tư vấn tận tình và nhanh chóng!
                        </p>
                        <ul className="contact-info" style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ display: 'flex', marginBottom: '15px' }}><span style={{ marginRight: '15px', fontSize: '1.5rem' }}>🏢</span> <span><strong>Trụ sở chính:</strong> 122/118, KP. Tân Lập, P. Đông Hòa, TP. Hồ Chí Minh</span></li>
                            <li style={{ display: 'flex', marginBottom: '15px' }}><span style={{ marginRight: '15px', fontSize: '1.5rem' }}>📍</span> <span><strong>Văn phòng:</strong> Milano ML127 KĐT Ecocity Premia, P. Tân An, Đắk Lắk</span></li>
                            <li style={{ display: 'flex', marginBottom: '15px' }}><span style={{ marginRight: '15px', fontSize: '1.5rem' }}>📞</span> <span><strong>Hotline:</strong> 0972 524 799</span></li>
                            <li style={{ display: 'flex', marginBottom: '15px' }}><span style={{ marginRight: '15px', fontSize: '1.5rem' }}>📧</span> <span><strong>Email:</strong> vietthanh.me.con@gmail.com</span></li>
                        </ul>
                    </div>
                    <div className="reveal" style={{ minHeight: '350px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.0034533081293!2d108.07831167585475!3d12.713197320489341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3171f7131d64a0f7%3A0x255a3b8181d878be!2zS2h1IMSRw7QgdGjhu4sgRWNvQ2l0eSBQcmVtaWE!5e0!3m2!1svi!2s!4v1728974437044!5m2!1svi!2s"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '400px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
