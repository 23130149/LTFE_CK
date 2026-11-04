import { Link, useParams } from 'react-router-dom'
import { useAppSelector } from '../store/hooks'

export default function ArticleDetail() {
    const { id } = useParams()
    const article = useAppSelector((state) => state.news.find((a) => a.id === Number(id)))

    if (!article) return <h2 className="container">Bài viết không tồn tại!</h2>

    return (
        <article className="container" style={{ maxWidth: 820 }}>
            <span style={{ color: '#ed1c24', fontSize: 12 }}>{article.zone}</span>
            <h1 style={{ fontSize: 32, lineHeight: '40px', margin: '8px 0' }}>{article.title}</h1>
            <p style={{ color: '#8f8f8f', fontSize: 12 }}>{article.time}</p>
            {article.sapo && <p style={{ fontWeight: 700, margin: '12px 0' }}>{article.sapo}</p>}
            {article.image && <img src={article.image} alt={article.title} />}
            <p style={{ marginTop: 16 }}>Nội dung chi tiết bài viết (sẽ lấy từ API sau).</p>
            <hr />
            <Link to="/">← Về trang chủ</Link>
        </article>
    )
}
