import type { ReactNode } from 'react'
import ArticleCard from './ArticleCard.tsx'
import type { Article } from '../types/Article.ts'
import { getNewsViewCount } from '../store/slice/NewsSlice.ts'

interface Props {
    articles: Article[]
    sidebar?: ReactNode
    views?: Record<number, number>
}

export default function NewsList({ articles, sidebar, views }: Props) {
    return (
        <section className="container section__middle-news">
            <div className="section__mn-flex">
                <div className="section__mn-main">
                    {articles.map((a) => (
                        <div key={a.id} className="news-row">
                            <ArticleCard article={a} viewCount={views ? getNewsViewCount(a, views) : undefined} />
                        </div>
                    ))}
                </div>
                {sidebar && <aside className="section__mn-sub" aria-labelledby="popular-heading">{sidebar}</aside>}
            </div>
        </section>
    )
}
