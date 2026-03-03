const SocialSidebar = () => {
    return (
        <div className="social-sidebar">
            <a href="tel:0972524799" className="social-item phone" title="Gọi điện">
                <span className="icon">📞</span>
                <span className="label">0972 524 799</span>
            </a>
            <a href="https://zalo.me/0972524799" target="_blank" rel="noreferrer" className="social-item zalo" title="Zalo">
                <span className="icon">💬</span>
                <span className="label">Zalo</span>
            </a>
            <a href="https://www.facebook.com/VITHACONS" target="_blank" rel="noreferrer" className="social-item facebook" title="Facebook">
                <span className="icon">FB</span>
                <span className="label">Facebook</span>
            </a>
            <a href="https://trangvangvietnam.com/listings/1187927307/xay-dung-viet-thanh-cong-ty-tnhh-co-khi-xay-dung-thuong-mai-viet-thanh.html" target="_blank" rel="noreferrer" className="social-item yellow-pages" title="Trang Vàng">
                <span className="icon">🌟</span>
                <span className="label">Trang Vàng</span>
            </a>
        </div>
    );
};

export default SocialSidebar;
