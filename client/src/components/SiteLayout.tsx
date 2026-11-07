import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header.tsx';
import Footer from './Footer.tsx';
import { routes } from '../routing/routes.ts';

export default function SiteLayout() {
    const { pathname } = useLocation();
    return <div className={`site-shell${pathname === routes.home ? '' : ' site-shell--category'}`}>
        <a className="skip-link" href="#main-content">Đến nội dung chính</a><Header /><Outlet /><Footer />
    </div>;
}
