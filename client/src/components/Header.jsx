import { menu } from '../data/menu';

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
            <nav className="header__middle">
                <div className="container">
                    <ul className="menu-nav">
                        <li><a className="nav-link" href="/">🏠</a></li>
                        {menu.map((m) => (
                            <li key={m.href}><a className="nav-link" href={m.href}>{m.title}</a></li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
}