import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx'
import { routes } from '../routing/routes.ts'

export default function Layout() {
    const { pathname } = useLocation()
    const hasCategoryMain = pathname === routes.education || pathname === routes.realEstate || pathname.startsWith(`${routes.realEstate}/bai/`)
    return (
        <div className={`site-shell${pathname === '/' ? '' : ' site-shell--category'}`}>
            <a className="skip-link" href="#main-content">Đến nội dung chính</a>
            <Header />
            {hasCategoryMain ? <Outlet /> : <main className="main" id="main-content">
                <Outlet />
            </main>}
            <Footer />
        </div>
    )
}
