import { useEffect, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import CategoryImage from '../components/category/CategoryImage.tsx';
import type { EditorialArticle, EditorialSection } from '../data/editorialSections.ts';
import { useAppDispatch, useAppSelector } from '../store/hooks.ts';
import { loadEditorialArticles } from '../store/slice/EditorialSlice.ts';

const dateFormatter = new Intl.DateTimeFormat('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh', day: '2-digit', month: '2-digit', year: 'numeric' });

function articlePath(section: EditorialSection, article: EditorialArticle) {
    return `${section.path}/bai/${article.id}`;
}

function ArticleCard({ article, section, lead = false }: { article: EditorialArticle; section: EditorialSection; lead?: boolean }) {
    return <article className={`editorial-card${lead ? ' editorial-card--lead' : ''}`}>
        <Link to={articlePath(section, article)} className="editorial-card__image" aria-label={`Đọc: ${article.title}`}><CategoryImage image={article.image} priority={lead} /></Link>
        <div className="editorial-card__body"><div className="editorial-card__meta"><span>{article.section}</span><time dateTime={article.publishedAt}>{dateFormatter.format(new Date(article.publishedAt))}</time></div>
            {lead ? <h2><Link to={articlePath(section, article)}>{article.title}</Link></h2> : <h3><Link to={articlePath(section, article)}>{article.title}</Link></h3>}
            <p>{article.summary}</p></div>
    </article>;
}

export default function EditorialSectionPage({ section }: { section: EditorialSection }) {
    const dispatch = useAppDispatch();
    const { articles: allArticles, status, error } = useAppSelector(state => state.editorial);
    const articles = allArticles.filter(article => article.slug === section.slug);
    const [params, setParams] = useSearchParams();
    const topic = params.get('muc') ?? '';
    const [visibleCount, setVisibleCount] = useState(3);
    const filtered = topic ? articles.filter(article => article.section === topic) : articles;
    const [lead, ...rest] = filtered;

    useEffect(() => {
        if (status === 'idle') void dispatch(loadEditorialArticles());
    }, [dispatch, status]);

    useEffect(() => {
        const previous = document.title;
        document.title = `${section.title} | Bản demo học tập`;
        return () => { document.title = previous; };
    }, [section.title]);

    function selectTopic(next: string) {
        setVisibleCount(3);
        setParams(next ? { muc: next } : {});
    }

    return <main className="category-page editorial-page" id="main-content">
        <nav className="category-breadcrumb" aria-label="Đường dẫn trang"><Link to="/">Trang chủ</Link><span aria-hidden="true">/</span><span aria-current="page">{section.title}</span></nav>
        <header className="category-heading"><div className="category-heading__line"><h1>{section.title}</h1><p>{section.description}</p></div></header>
        <nav className="editorial-topics" aria-label={`Chủ đề ${section.title}`}>
            <button type="button" aria-pressed={!topic} onClick={() => selectTopic('')}>Tất cả</button>
            {section.topics.map(item => <button key={item} type="button" aria-pressed={topic === item} onClick={() => selectTopic(item)}>{item}</button>)}
        </nav>
        {(status === 'idle' || status === 'loading') && <div className="category-state" role="status">Đang tải bài viết…</div>}
        {status === 'error' && <div className="category-state" role="alert"><p>{error}</p><button type="button" onClick={() => void dispatch(loadEditorialArticles())}>Thử lại</button></div>}
        {status === 'ready' && <>
        <p className="editorial-count" role="status">{filtered.length} bài viết{topic ? ` trong mục ${topic}` : ''}</p>
        {lead ? <div className="editorial-layout"><div className="editorial-layout__main">
            <ArticleCard article={lead} section={section} lead />
            {rest.length > 0 && <section className="editorial-list" aria-label={`Các bài khác về ${section.title}`}>
                {rest.slice(0, visibleCount).map(article => <ArticleCard key={article.id} article={article} section={section} />)}
                {visibleCount < rest.length && <button type="button" onClick={() => setVisibleCount(count => count + 3)}>Xem thêm bài viết</button>}
            </section>}
        </div><aside className="editorial-side"><h2>Khám phá chủ đề</h2><p>Chọn một chủ đề để xem bài viết minh họa cùng chuyên mục.</p>
            <ul>{section.topics.map(item => <li key={item}><button type="button" onClick={() => selectTopic(item)}>{item}<span>{articles.filter(article => article.section === item).length} bài</span></button></li>)}</ul>
        </aside></div> : <div className="category-state"><h2>Chưa có bài viết</h2><p>Thử chọn một chủ đề khác.</p><button type="button" onClick={() => selectTopic('')}>Xem tất cả</button></div>}
        </>}
    </main>;
}

export function EditorialArticleDetail({ section }: { section: EditorialSection }) {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const { articles, status, error } = useAppSelector(state => state.editorial);
    const article = articles.find(item => item.slug === section.slug && item.id === id);
    useEffect(() => { if (status === 'idle') void dispatch(loadEditorialArticles()); }, [dispatch, status]);
    useEffect(() => {
        const previous = document.title;
        document.title = article ? `${article.title} | ${section.title}` : `Không tìm thấy bài | ${section.title}`;
        return () => { document.title = previous; };
    }, [article, section.title]);

    return <main className="category-page editorial-detail" id="main-content">
        <nav className="category-breadcrumb" aria-label="Đường dẫn trang"><Link to="/">Trang chủ</Link><span aria-hidden="true">/</span><Link to={section.path}>{section.title}</Link><span aria-hidden="true">/</span><span aria-current="page">Bài viết</span></nav>
        {(status === 'idle' || status === 'loading') ? <div className="category-state" role="status">Đang tải bài viết…</div> : status === 'error' ? <div className="category-state" role="alert"><p>{error}</p><button type="button" onClick={() => void dispatch(loadEditorialArticles())}>Thử lại</button></div> : article ? <article><p className="editorial-detail__topic">{article.section}</p><h1>{article.title}</h1><time dateTime={article.publishedAt}>{dateFormatter.format(new Date(article.publishedAt))}</time>
            <p className="editorial-detail__summary">{article.summary}</p><figure><CategoryImage image={article.image} priority /><figcaption>Tranh minh họa cho bản demo học tập.</figcaption></figure>
            {article.content.map((paragraph, index) => <p key={index}>{paragraph}</p>)}<Link className="editorial-detail__back" to={section.path}>← Về chuyên mục {section.title}</Link>
        </article> : <div className="category-state"><h1>Không tìm thấy bài viết</h1><Link to={section.path}>Về chuyên mục {section.title}</Link></div>}
    </main>;
}
