const SocialSidebar = () => {
    return (
        <div className="social-sidebar">
            <a href="tel:0972524799" className="social-item phone" title="Gọi điện">
                <span className="icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </span>
                <span className="label">0972 524 799</span>
            </a>
            <a href="https://zalo.me/0972524799" target="_blank" rel="noreferrer" className="social-item zalo" title="Zalo">
                <span className="icon" style={{ fontSize: '0.9rem' }}>Zalo</span>
                <span className="label">Zalo Me</span>
            </a>
            <a href="https://www.facebook.com/VITHACONS" target="_blank" rel="noreferrer" className="social-item facebook" title="Facebook">
                <span className="icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </span>
                <span className="label">Facebook</span>
            </a>
            <a href="https://trangvangvietnam.com/listings/1187927307/xay-dung-viet-thanh-cong-ty-tnhh-co-khi-xay-dung-thuong-mai-viet-thanh.html" target="_blank" rel="noreferrer" className="social-item yellow-pages" title="Trang Vàng">
                <span className="icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                </span>
                <span className="label">Trang Vàng</span>
            </a>
        </div>
    );
};

export default SocialSidebar;
