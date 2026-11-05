import { useParams } from 'react-router-dom'
import { useAppSelector } from '../store/hooks'
import { menu } from '../data/menu'
import NewsList from '../components/NewsList'

// Các mục menu không phải chuyên mục thật thì hiện tất cả bài
const ALL_SLUGS = ['tin-moi-nhat', 'tin-xem-nhieu']

export default function Category() {
    const { zone = '' } = useParams()
    const news = useAppSelector((state) => state.news)

    const item = menu.find((m) => m.href === `/${zone}`)
    if (!item) return <h2 className="container">Chuyên mục không tồn tại!</h2>

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
