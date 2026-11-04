import { Link } from 'react-router-dom'
import { menu } from '../data/menu'

export default function Header() {
    return (
        <header className="header">
            <div className="header__top">
                <div className="container header__top-flex">
                    <Link to="/" className="header__logo">TUỔI TRẺ</Link>
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
                        <li><Link className="nav-link" to="/">🏠</Link></li>
                        {menu.map((m) => (
                            <li key={m.href}><Link className="nav-link" to={m.href}>{m.title}</Link></li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    )
}
