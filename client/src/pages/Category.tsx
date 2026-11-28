import { useParams, useSearchParams } from 'react-router-dom'
import { useAppSelector } from '../store/hooks.ts'
import { hotTags, menu } from '../data/menu.ts'
import NotFoundPage from './NotFoundPage.tsx'
import NewsList from '../components/NewsList.tsx'
import HotTags from '../components/HotTags.tsx'
import { routes } from '../routing/routes.ts'
import { selectLatestNews, selectNewsArticles, selectNewsViews, selectPopularNews } from '../store/slice/NewsSlice.ts'

export default function Category() {
    const { zone = '' } = useParams()
    const [params] = useSearchParams()
    const path = `/${zone}`
    const isPopular = path === routes.popular
    const isLatest = path === routes.latest
    const news = useAppSelector(isPopular ? selectPopularNews : isLatest ? selectLatestNews : selectNewsArticles)
    const views = useAppSelector(selectNewsViews)
    const topic = params.get('q') ?? ''

    let title: string
    let articles = news
    if (path === routes.guides) {
        title = 'Cần biết'
        articles = news.filter(article => article.guide)
    } else if (path === routes.topic) {
        const knownTopic = hotTags.includes(topic)
        title = knownTopic ? topic : 'Chủ đề nổi bật'
        articles = knownTopic ? news.filter(article => article.topics?.includes(topic)) : []
    } else {
        const item = menu.find(entry => entry.href === path)
        if (!item) return <NotFoundPage embedded />
        title = item.title
        if (!isLatest && !isPopular) articles = news.filter(article => article.zone === title)
    }

    return (
        <div className="news-collection">
            <div className="container">
                <h1>{title}</h1>
                {isPopular && <p className="news-collection__note">Lượt xem minh họa, có cộng lượt mở bài trên trình duyệt này.</p>}
                {articles.length === 0 && <p>Chưa có bài viết nào trong mục này.</p>}
            </div>
            {articles.length > 0 && <NewsList articles={articles} views={isPopular ? views : undefined} />}
            {path === routes.topic && <HotTags />}
        </div>
    )
}
