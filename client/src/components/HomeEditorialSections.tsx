import { Link } from 'react-router-dom'
import { editorialSections } from '../data/editorialSections.ts'
import { editorialArticlePath } from '../routing/routes.ts'
import { useAppSelector } from '../store/hooks.ts'
import CategoryImage from './category/CategoryImage.tsx'

export default function HomeEditorialSections() {
    const articles = useAppSelector(state => state.editorial)

    return <div className="container home-editorial">
        {editorialSections.map(section => {
            const [lead, ...supporting] = articles.filter(article => article.slug === section.slug).slice(0, 3)
            if (!lead) return null

            const headingId = `home-section-${section.slug}`
            return <section key={section.slug} className="home-editorial__section" aria-labelledby={headingId}>
                <header className="home-editorial__header">
                    <h2 id={headingId}>{section.title}</h2>
                    <Link to={section.path} aria-label={`Xem thêm tin ${section.title}`}>Xem thêm <span aria-hidden="true">→</span></Link>
                </header>
                <div className="home-editorial__articles">
                    <article className="home-editorial__lead">
                        <Link to={editorialArticlePath(section.path, lead.id)} className="home-editorial__lead-link">
                            <CategoryImage image={{ src: lead.image.src, alt: '' }} />
                            <h3>{lead.title}</h3>
                        </Link>
                        <p>{lead.summary}</p>
                    </article>
                    <ul className="home-editorial__supporting">
                        {supporting.map(article => <li key={article.id}>
                            <h3><Link to={editorialArticlePath(section.path, article.id)}>{article.title}</Link></h3>
                        </li>)}
                    </ul>
                </div>
            </section>
        })}
    </div>
}
