import { useEffect, useRef } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { newsArticlePath, newsTopicPath, routes } from '../routing/routes.ts'
import { useAppDispatch, useAppSelector } from '../store/hooks.ts'
import { countArticleView, selectNewsArticles } from '../store/slice/NewsSlice.ts'

export default function ArticleDetail() {
    const { id } = useParams()
    const { key } = useLocation()
    const dispatch = useAppDispatch()
    const articles = useAppSelector(selectNewsArticles)
    const article = articles.find(item => String(item.id) === id)
    const articleId = article?.id
    const countedEntry = useRef<string | null>(null)

    useEffect(() => {
        if (articleId === undefined || countedEntry.current === key) return
        countedEntry.current = key
        dispatch(countArticleView(articleId))
    }, [articleId, dispatch, key])

    if (!article) return <div className="container news-collection">
        <h1>Bài viết không tồn tại</h1>
        <Link to={routes.home}>Về trang chủ</Link>
    </div>

    const related = articles.filter(item => item.id !== article.id && item.topics?.some(topic => article.topics?.includes(topic))).slice(0, 3)

    return (
        <article className="container home-article">
            <header>
                <span className="box-category-category">{article.zone}</span>
                <time className="box-category-time" dateTime={article.publishedAt}>{article.time}</time>
                <h1>{article.title}</h1>
                <p className="home-article__note">Nội dung minh họa</p>
            </header>
            {article.sapo && <p className="home-article__summary">{article.sapo}</p>}
            {article.image && <img src={article.image} alt={article.title} />}
            <div className="home-article__body">
                {article.content?.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </div>
            {article.topics && article.topics.length > 0 && <ul className="list-tag">
                {article.topics.map(topic => <li key={topic}><Link to={newsTopicPath(topic)} className="item">{topic}</Link></li>)}
            </ul>}
            <Link to={routes.home} className="home-article__back">← Về trang chủ</Link>
            {related.length > 0 && <section className="home-article__related" aria-labelledby="home-related-title">
                <h2 id="home-related-title">Bài liên quan</h2>
                <ul>{related.map(item => <li key={item.id}><Link to={newsArticlePath(item.id)}>{item.title}</Link></li>)}</ul>
            </section>}
        </article>
    )
}
