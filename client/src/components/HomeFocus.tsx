import { useState } from 'react'
import { Link } from 'react-router-dom'
import ArticleCard from './ArticleCard.tsx'
import type { Article } from '../types/Article.ts'
import { newsArticlePath } from '../routing/routes.ts'

interface Props {
    articles: Article[]
    sideList: Article[]
    recommended?: Article
}

const dayFormat = new Intl.DateTimeFormat('vi-VN', {
    timeZone: 'Asia/Ho_Chi_Minh',
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
})

export default function HomeFocus({ articles, sideList, recommended }: Props) {
    const [today] = useState(() => dayFormat.format(new Date()))

    return (
        <section className="section__home-focus">
            <div className={`container section__hf-flex${recommended ? ' section__hf-flex--with-recommendation' : ''}`}>
                <div className="section__hf-main">
                    <div className="box-category-middle focus-grid">
                        {articles.map((a, i) => (
                            <div key={a.id} className={i === 0 ? 'focus-big' : ''}>
                                <ArticleCard article={a} showSapo={i === 0} priority={i === 0} />
                            </div>
                        ))}
                    </div>
                </div>
                <aside className="section__hf-list" aria-label="Tin đáng chú ý">
                    <p className="time-d">{today}</p>
                    {sideList.map((a) => (
                        <div key={a.id} className="box-category-item side-item">
                            <Link to={newsArticlePath(a.id)} className="box-category-link-title">{a.title}</Link>
                        </div>
                    ))}
                </aside>
                {recommended && <aside className="section__hf-sub" aria-labelledby="home-recommendation-heading">
                    <h2 id="home-recommendation-heading">Đáng đọc</h2>
                    <ArticleCard article={recommended} />
                </aside>}
            </div>
        </section>
    )
}
