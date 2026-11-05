import { Link } from 'react-router-dom'
import { menu } from '../data/menu.ts'
import type { Article } from '../types/Article.ts'

interface Props {
    article: Article
    showSapo?: boolean
}

export default function ArticleCard({ article, showSapo = true }: Props) {
    const url = `/bai/${article.id}`
    const zoneHref = menu.find((m) => m.title === article.zone)?.href ?? '/'

    return (
        <article className="box-category-item">
            <Link to={url} className="box-category-link-with-avatar img-resize">
                <img src={article.image} alt={article.title} />
            </Link>
            <div className="box-category-content">
                <h3 className="box-category-title-text">
                    <Link to={url} className="box-category-link-title">{article.title}</Link>
                </h3>
                <Link to={zoneHref} className="box-category-category">{article.zone}</Link>
                <span className="box-category-time">{article.time}</span>
                {showSapo && <p className="box-category-sapo">{article.sapo}</p>}
            </div>
        </article>
    )
}
