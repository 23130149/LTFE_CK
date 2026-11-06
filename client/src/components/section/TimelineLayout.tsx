import { Link } from 'react-router-dom'
import type { Article } from '../../types/Article.ts'
import Thumb from './Thumb.tsx'

// Bố cục Tin mới nhất: danh sách dạng dòng, thời gian bên trái, ảnh và chữ bên phải
export default function TimelineLayout({ articles }: { articles: Article[] }) {
    return (
        <section className="tl-list">
            {articles.map((a) => (
                <article key={a.id} className="tl-row">
                    <time className="tl-time">{a.time}</time>
                    <Link to={`/bai/${a.id}`}><Thumb article={a} className="tl-thumb" /></Link>
                    <div>
                        <h3><Link to={`/bai/${a.id}`}>{a.title}</Link></h3>
                        {a.sapo && <p>{a.sapo}</p>}
                    </div>
                </article>
            ))}
        </section>
    )
}
