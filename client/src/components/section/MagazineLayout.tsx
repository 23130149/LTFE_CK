import { Link } from 'react-router-dom'
import type { Article } from '../../types/Article.ts'
import Thumb from './Thumb.tsx'

export default function MagazineLayout({ articles }: { articles: Article[] }) {
    const [hero, sideLead, ...rest] = articles
    const cards = rest.slice(0, 3)
    const sideList = rest.slice(3, 9)

    return (
        <div className="mg-layout">
            <div className="mg-main">
                <article className="mg-hero">
                    <Link to={`/bai/${hero.id}`}><Thumb article={hero} /></Link>
                    <div>
                        <h2><Link to={`/bai/${hero.id}`}>{hero.title}</Link></h2>
                        {hero.sapo && <p>{hero.sapo}</p>}
                    </div>
                </article>

                <div className="mg-cards">
                    {cards.map((a) => (
                        <article key={a.id} className="mg-card">
                            <Link to={`/bai/${a.id}`}><Thumb article={a} /></Link>
                            <h3><Link to={`/bai/${a.id}`}>{a.title}</Link></h3>
                            <span className="sec-time">{a.time}</span>
                        </article>
                    ))}
                </div>
            </div>

            <aside className="mg-side">
                {sideLead && (
                    <article className="mg-side__lead">
                        <Link to={`/bai/${sideLead.id}`}><Thumb article={sideLead} /></Link>
                        <h3><Link to={`/bai/${sideLead.id}`}>{sideLead.title}</Link></h3>
                    </article>
                )}
                <ul className="mg-side__list">
                    {sideList.map((a) => (
                        <li key={a.id}><Link to={`/bai/${a.id}`}>{a.title}</Link></li>
                    ))}
                </ul>
            </aside>
        </div>
    )
}
