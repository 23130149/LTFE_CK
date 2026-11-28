import { useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { headerLinks, menu, sectionLinks } from '../data/menu.ts'
import { routes } from '../routing/routes.ts'

export default function Header() {
    const directory = useRef<HTMLDivElement>(null)

    return (
        <>
            <header className="site-masthead" id="site-top" tabIndex={-1}>
                <div className="container site-masthead__inner">
                    <Link to={routes.home} className="site-wordmark" aria-label="Tuổi Trẻ · Trang chủ">TUỔI TRẺ</Link>
                    <nav aria-label="Tiện ích" className="site-masthead__utilities">
                        {headerLinks.map(({ title, href, external }) => external
                            ? <a key={href} href={href}>{title}</a>
                            : <NavLink key={href} to={href}>{title}</NavLink>
                        )}
                    </nav>
                </div>
            </header>

            <nav className="site-nav" aria-label="Chuyên mục chính">
                <div className="container site-nav__inner">
                    <NavLink className="site-nav__home" to={routes.home} end aria-label="Trang chủ">
                        <span aria-hidden="true" className="site-nav__home-icon" />
                    </NavLink>
                    <ul className="site-nav__list">
                        {menu.map(({ title, href }) => (
                            <li key={href}><NavLink to={href}>{title}</NavLink></li>
                        ))}
                    </ul>
                    <button
                        type="button"
                        className="site-nav__toggle"
                        popoverTarget="site-section-directory"
                        aria-label="Tất cả chuyên mục"
                        title="Tất cả chuyên mục"
                    >
                        <span aria-hidden="true" className="site-nav__menu-icon" />
                    </button>
                    <div ref={directory} id="site-section-directory" popover="auto" className="site-nav__directory">
                        <h2>Tất cả chuyên mục</h2>
                        <ul>
                            {sectionLinks.map(({ title, href }) => (
                                <li key={href}>
                                    <NavLink to={href} onClick={() => directory.current?.hidePopover()}>{title}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
