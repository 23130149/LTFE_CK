import { Link } from 'react-router-dom'
import { useAppSelector } from '../store/hooks.ts'
import HomeFocus from '../components/HomeFocus.tsx'
import HomeEditorialSections from '../components/HomeEditorialSections.tsx'
import HotTags from '../components/HotTags.tsx'
import NewsList from '../components/NewsList.tsx'
import { newsArticlePath, routes } from '../routing/routes.ts'
import { selectNewsArticles, selectPopularNews } from '../store/slice/NewsSlice.ts'

export default function Home() {
    const news = useAppSelector(selectNewsArticles)
    const popular = useAppSelector(selectPopularNews)
    const otherNews = news.slice(9)
    const recommended = otherNews.find(article => article.guide) ?? otherNews[0]

    return (
        <>
            <HomeFocus articles={news.slice(0, 4)} sideList={news.slice(4, 9)} recommended={recommended} />
            <HotTags />
            <HomeEditorialSections />
            <NewsList articles={otherNews.filter(article => article.id !== recommended?.id)} sidebar={popular.length > 0 && <>
                <h2 id="popular-heading"><Link to={routes.popular}>Xem nhiều</Link></h2>
                <ol>
                    {popular.slice(0, 5).map(article => (
                        <li key={article.id}><Link to={newsArticlePath(article.id)}>{article.title}</Link></li>
                    ))}
                </ol>
            </>} />
        </>
    )
}
