import { menu } from '../data/menu';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className="header">
            <div className="header__top">
                <div className="container header__top-flex">
                    <a href="/" className="header__logo">TUỔI TRẺ</a>
                    <div className="header__cate">
                        <a className="header__clink" href="#">Podcast</a>
                        <a className="header__clink" href="#">YouTube</a>
                        <a className="header__clink" href="#">Cần biết</a>
                    </div>
                </div>
            </div>
            <nav className="header__middle" aria-label="Chuyên mục chính">
                <div className="container">
                    <ul className="menu-nav">
                        <li><NavLink className="nav-link" to="/" end aria-label="Trang chủ">🏠</NavLink></li>
                        {menu.map((m) => (
                            <li key={m.href}><NavLink className="nav-link" to={m.href}>{m.title}</NavLink></li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
}