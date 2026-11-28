import { Link } from 'react-router-dom'
import { menu } from '../data/menu.ts'
import { newsArticlePath } from '../routing/routes.ts'
import type { Article } from '../types/Article.ts'

interface Props {
    article: Article
    showSapo?: boolean
    priority?: boolean
    viewCount?: number
}

export default function ArticleCard({ article, showSapo = true, priority = false, viewCount }: Props) {
    const url = newsArticlePath(article.id)
    const zoneHref = menu.find((m) => m.title === article.zone)?.href

    return (
        <article className="box-category-item">
            <Link to={url} className="box-category-link-with-avatar img-resize">
                <img src={article.image} alt={article.title} loading={priority ? 'eager' : 'lazy'} />
            </Link>
            <div className="box-category-content">
                <h3 className="box-category-title-text">
                    <Link to={url} className="box-category-link-title">{article.title}</Link>
                </h3>
                {zoneHref
                    ? <Link to={zoneHref} className="box-category-category">{article.zone}</Link>
                    : <span className="box-category-category">{article.zone}</span>}
                <time className="box-category-time" dateTime={article.publishedAt}>{article.time}</time>
                {viewCount !== undefined && <span className="box-category-time news-views">{viewCount} lượt xem</span>}
                {showSapo && <p className="box-category-sapo">{article.sapo}</p>}
            </div>
        </article>
    )
}
