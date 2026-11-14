import { useState } from 'react'
import type { SectionArticle } from '../../types/Article.ts'
import ArticleLink from '../../components/section/ArticleLink.tsx'
import Thumb from './Thumb.tsx'

const pad = (n: number) => String(n).padStart(2, '0')

export default function ThoiSuLayout({ articles, hot }: { articles: SectionArticle[]; hot: SectionArticle[] }) {
    const [showAll, setShowAll] = useState(false)
    const [savedIds, setSavedIds] = useState<Set<string | number>>(() => new Set())
    const [hero, ...rest] = articles
    const topRight = rest.slice(0, 2)
    const ranked = rest.slice(2, 4)
    const notable = rest.slice(4, 7)
    const latest = showAll ? articles : rest.slice(7)
    const showLatest = () => {
        setShowAll(true)
        document.getElementById('section-latest')?.scrollIntoView({ block: 'start' })
    }
    const toggleSaved = (id: string | number) => setSavedIds((previous) => {
        const next = new Set(previous)
        if (next.has(id)) next.delete(id)
        else next.add(id)
        return next
    })

    return (
        <>
            <section className="sec-top">
                <article className="sec-hero">
                    <ArticleLink article={hero}><Thumb article={hero} className="sec-hero__img" /></ArticleLink>
                    <span className="sec-kicker">Tiêu điểm</span>
                    <h2><ArticleLink article={hero}>{hero.title}</ArticleLink></h2>
                    {hero.sapo && <p>{hero.sapo}</p>}
                </article>

                <aside className="sec-top__side">
                    {topRight.map((a) => (
                        <article key={a.id} className="sec-mini">
                            <ArticleLink article={a}><Thumb article={a} /></ArticleLink>
                            <div>
                                <h3><ArticleLink article={a}>{a.title}</ArticleLink></h3>
                                <span className="sec-time">{a.time}</span>
                            </div>
                        </article>
                    ))}
                    <ol className="sec-ranked">
                        {ranked.map((a, i) => (
                            <li key={a.id}>
                                <span>{pad(i + 1)}</span>
                                <ArticleLink article={a}>{a.title}</ArticleLink>
                            </li>
                        ))}
                    </ol>
                </aside>
            </section>

            {notable.length > 0 && (
                <section className="sec-notable">
                    <div className="sec-sechead">
                        <div>
                            <span className="sec-kicker">Nổi bật</span>
                            <h2>Đáng chú ý</h2>
                        </div>
                        <button type="button" className="sec-more" onClick={showLatest}>Xem tất cả →</button>
                    </div>
                    <div className="sec-cards">
                        {notable.map((a) => (
                            <article key={a.id} className="sec-card">
                                <ArticleLink article={a}><Thumb article={a} /></ArticleLink>
                                <span className="sec-kicker">{a.zone}</span>
                                <h3><ArticleLink article={a}>{a.title}</ArticleLink></h3>
                                <span className="sec-time">{a.time}</span>
                            </article>
                        ))}
                    </div>
                </section>
            )}

            <div className="sec-bottom">
                <section className="sec-latest" id="section-latest">
                    <div className="sec-sechead">
                        <div>
                            <span className="sec-kicker">Cập nhật</span>
                            <h2>Mới nhất</h2>
                        </div>
                        {!showAll && <button type="button" className="sec-more" onClick={showLatest}>Xem tất cả →</button>}
                    </div>
                    {latest.length === 0 && <p>Chưa có thêm bài viết.</p>}
                    {latest.map((a) => (
                        <article key={a.id} className="sec-row">
                            <ArticleLink article={a}><Thumb article={a} /></ArticleLink>
                            <div>
                                <span className="sec-kicker">{a.zone}</span>
                                <h3><ArticleLink article={a}>{a.title}</ArticleLink></h3>
                                {a.sapo && <p>{a.sapo}</p>}
                                <span className="sec-time">{a.time}</span>
                            </div>
                            <button type="button" className="sec-save" aria-label={`${savedIds.has(a.id) ? 'Bỏ lưu' : 'Lưu bài'}: ${a.title}`} aria-pressed={savedIds.has(a.id)} onClick={() => toggleSaved(a.id)}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                    <path d="M6 3h12v18l-6-4-6 4z" />
                                </svg>
                            </button>
                        </article>
                    ))}
                </section>

                <aside className="sec-hot">
                    <div className="sec-hot__head">
                        <h2>Tin nổi bật</h2>
                        <span>24 giờ qua</span>
                    </div>
                    <ol>
                        {hot.map((a, i) => (
                            <li key={a.id}>
                                <span>{pad(i + 1)}</span>
                                <ArticleLink article={a}>{a.title}</ArticleLink>
                            </li>
                        ))}
                    </ol>
                    <p className="sec-time" role="status">{savedIds.size} bài đã lưu tạm trong trang này.</p>
                </aside>
            </div>
        </>
    )
}
