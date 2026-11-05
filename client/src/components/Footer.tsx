import { Link, NavLink } from 'react-router-dom'
import { menu } from '../data/menu.ts'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__nav">
                    <ul className="menu-nav">
                        <li><Link className="nav-link" to="/">Trang chủ</Link></li>
                        {menu.map((m) => (
                            <li key={m.href}><NavLink className="nav-link" to={m.href}>{m.title}</NavLink></li>
                        ))}
                    </ul>
                </div>

                <div className="footer__middle-flex">
                    <div className="footer__logo">
                        <Link to="/" className="logo-text">TUỔI TRẺ</Link>
                    </div>
                    <div className="footer__m-content">
                        <div className="box">
                            <p>Tổng biên tập: ...</p>
                            <p>Báo điện tử (bản demo học tập)</p>
                            <p>Giấy phép hoạt động báo điện tử: ...</p>
                        </div>
                        <div className="box">
                            <p>Địa chỉ: ...</p>
                            <p>Hotline: ... - Email: ...</p>
                            <p>Quảng cáo: ...</p>
                        </div>
                    </div>
                </div>

                <p className="footer__coppy">© Demo học tập, không phải trang chính thức của Báo Tuổi Trẻ.</p>
            </div>
        </footer>
    )
}
