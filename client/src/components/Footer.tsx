import { Link, NavLink } from 'react-router-dom'
import { headerLinks, quickNewsLinks, sectionLinks } from '../data/menu.ts'
import { routes } from '../routing/routes.ts'

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="site-footer__bar">
                    <nav aria-label="Đọc nhanh">
                        <ul className="site-footer__quick">
                            <li><NavLink to={routes.home} end>Trang chủ</NavLink></li>
                            {quickNewsLinks.map(({ title, href }) => (
                                <li key={href}><NavLink to={href}>{title}</NavLink></li>
                            ))}
                        </ul>
                    </nav>
                    <a className="site-footer__top-link" href="#site-top" aria-label="Lên đầu trang" title="Lên đầu trang">
                        <span aria-hidden="true">↑</span>
                    </a>
                </div>

                <div className="site-footer__content">
                    <div className="site-footer__brand">
                        <Link to={routes.home} className="site-wordmark" aria-label="Tuổi Trẻ · Trang chủ">TUỔI TRẺ</Link>
                    </div>
                    <nav aria-labelledby="footer-topics">
                        <h2 id="footer-topics">Chuyên mục</h2>
                        <ul className="site-footer__sections">
                            {sectionLinks.map(({ title, href }) => (
                                <li key={href}><NavLink to={href}>{title}</NavLink></li>
                            ))}
                        </ul>
                    </nav>
                    <nav aria-labelledby="footer-utilities" className="site-footer__utilities">
                        <h2 id="footer-utilities">Tiện ích</h2>
                        <ul>
                            {headerLinks.map(({ title, href, external }) => (
                                <li key={href}>
                                    {external ? <a href={href}>{title}</a> : <NavLink to={href}>{title}</NavLink>}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}
