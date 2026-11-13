import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx'
import { routes } from '../routing/routes.ts'

const OWN_MAIN_PATHS: string[] = [routes.education, routes.thoiSu, routes.theGioi, routes.phapLuat, routes.kinhDoanh, routes.congNghe]

export default function Layout() {
    const { pathname } = useLocation()
    const ownsMain = OWN_MAIN_PATHS.includes(pathname)
    return (
        <div className={`site-shell${pathname === '/' ? '' : ' site-shell--category'}`}>
            <a className="skip-link" href="#main-content">Đến nội dung chính</a>
            <Header />
            {ownsMain ? <Outlet /> : <main className="main" id="main-content">
                <Outlet />
            </main>}
            <Footer />
        </div>
    )
}
