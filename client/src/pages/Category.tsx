import { useParams } from 'react-router-dom'
import { useAppSelector } from '../store/hooks.ts'
import { menu } from '../data/menu.ts'
import NotFoundPage from './NotFoundPage.tsx'
import NewsList from '../components/NewsList.tsx'

const ALL_SLUGS = ['tin-moi-nhat', 'tin-xem-nhieu']

export default function Category() {
    const { zone = '' } = useParams()
    const news = useAppSelector((state) => state.news)

    const item = menu.find((m) => m.href === `/${zone}`)
    if (!item) return <NotFoundPage embedded />

    const articles = ALL_SLUGS.includes(zone) ? news : news.filter((a) => a.zone === item.title)

    return (
        <div className="container">
            <h2 style={{ color: '#ed1c24', textTransform: 'uppercase' }}>{item.title}</h2>
            {articles.length === 0
                ? <p>Chưa có bài viết nào trong chuyên mục này.</p>
                : <NewsList articles={articles} />}
        </div>
    )
}