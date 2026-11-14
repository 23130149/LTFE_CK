import type { SectionArticle } from '../../types/Article.ts'
import ArticleLink from '../../components/section/ArticleLink.tsx'
import Thumb from './Thumb.tsx'

export default function MagazineLayout({ articles }: { articles: SectionArticle[] }) {
    const [hero, sideLead, ...rest] = articles
    const cards = rest.slice(0, 3)
    const sideList = rest.slice(3)

    return (
        <div className="mg-layout">
            <div className="mg-main">
                <article className="mg-hero">
                    <ArticleLink article={hero}><Thumb article={hero} /></ArticleLink>
                    <div>
                        <h2><ArticleLink article={hero}>{hero.title}</ArticleLink></h2>
                        {hero.sapo && <p>{hero.sapo}</p>}
                    </div>
                </article>

                <div className="mg-cards">
                    {cards.map((a) => (
                        <article key={a.id} className="mg-card">
                            <ArticleLink article={a}><Thumb article={a} /></ArticleLink>
                            <h3><ArticleLink article={a}>{a.title}</ArticleLink></h3>
                            <span className="sec-time">{a.time}</span>
                        </article>
                    ))}
                </div>
            </div>

            <aside className="mg-side">
                {sideLead && (
                    <article className="mg-side__lead">
                        <ArticleLink article={sideLead}><Thumb article={sideLead} /></ArticleLink>
                        <h3><ArticleLink article={sideLead}>{sideLead.title}</ArticleLink></h3>
                    </article>
                )}
                <ul className="mg-side__list">
                    {sideList.map((a) => (
                        <li key={a.id}><ArticleLink article={a}>{a.title}</ArticleLink></li>
                    ))}
                </ul>
            </aside>
        </div>
    )
}
