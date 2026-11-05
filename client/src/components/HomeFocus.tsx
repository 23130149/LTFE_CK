import { Link } from 'react-router-dom'
import ArticleCard from './ArticleCard'
import type { Article } from '../types/Article'

interface Props {
    articles: Article[]
    sideList: Article[]
}

export default function HomeFocus({ articles, sideList }: Props) {
    return (
        <section className="section__home-focus">
            <div className="container section__hf-flex">
                <div className="section__hf-list">
                    <div className="weather">
                        <a href="#" className="time-d">Thứ 7, ngày 31-10-2026</a>
                    </div>
                    {sideList.map((a) => (
                        <div key={a.id} className="box-category-item side-item">
                            <Link to={`/bai/${a.id}`} className="box-category-link-title">{a.title}</Link>
                        </div>
                    ))}
                </div>
                <div className="section__hf-main">
                    <div className="box-category-middle focus-grid">
                        {articles.map((a, i) => (
                            <div key={a.id} className={i === 0 ? 'focus-big' : ''}>
                                <ArticleCard article={a} showSapo={i === 0} />
                            </div>
                        ))}
                    </div>
                </div>
                <aside className="section__hf-sub">
                    <div className="ad-placeholder">Quảng cáo</div>
                </aside>
            </div>
        </section>
    )
}
