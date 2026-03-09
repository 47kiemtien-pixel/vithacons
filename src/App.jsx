import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import SocialSidebar from './components/SocialSidebar'

// Pages
import Home from './pages/Home'
import DesignConstruction from './pages/DesignConstruction'
import SteelBuildings from './pages/SteelBuildings'
import CivilConstruction from './pages/CivilConstruction'
import ElevatorServices from './pages/ElevatorServices'
import TuyenDung from './pages/TuyenDung'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import ProtectedRoute from './components/ProtectedRoute'

// Scroll To Top Component
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

// Reveal Animation Hook
const useRevealOnScroll = () => {
    const location = useLocation();
    useEffect(() => {
        const observerOptions = { threshold: 0.15 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        const revealElements = document.querySelectorAll('.reveal');
        revealElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, [location]);
};

const AppContent = () => {
    useRevealOnScroll();
    return (
        <div className="app-wrapper">
            <ScrollToTop />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/thiet-ke-thi-cong" element={<DesignConstruction />} />
                <Route path="/nha-thep-tien-che" element={<SteelBuildings />} />
                <Route path="/xay-dung-dan-dung" element={<CivilConstruction />} />
                <Route path="/thang-may" element={<ElevatorServices />} />
                <Route path="/tuyen-dung" element={<TuyenDung />} />

                {/* Admin Routes */}
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin" element={
                    <ProtectedRoute>
                        <AdminDashboard />
                    </ProtectedRoute>
                } />
            </Routes>
            <Footer />
            <SocialSidebar />
        </div>
    );
};

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    )
}

export default App
