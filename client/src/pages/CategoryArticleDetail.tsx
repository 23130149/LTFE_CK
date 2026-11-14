import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import type { CategoryConfig } from '../types/category.ts';
import { useCategoryNews } from '../hooks/useCategoryNews.ts';
import { loadCategoryNews } from '../services/categoryDataService.ts';
import CategoryStates from '../components/category/CategoryStates.tsx';
import CategoryImage from '../components/category/CategoryImage.tsx';
import CategoryArticleCard from '../components/category/CategoryArticleCard.tsx';
import { routes } from '../routing/routes.ts';

const dateFormatter = new Intl.DateTimeFormat('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh', dateStyle: 'long', timeStyle: 'short' });

export default function CategoryArticleDetail({ config }: { config: CategoryConfig }) {
    const { id } = useParams();
    const { status, articles, error, retry } = useCategoryNews(config.slug, loadCategoryNews);
    const article = articles.find((item) => item.id === id);
    const title = article ? `${article.title} | ${config.title} — Demo` : config.pageTitle;
    useEffect(() => { window.scrollTo(0, 0); }, [id]);
    useEffect(() => {
        const previousTitle = document.title;
        document.title = title;
        return () => { document.title = previousTitle; };
    }, [title]);
    const sectionPath = `${config.path}?${new URLSearchParams({ muc: article?.section || '' })}`;
    const related = articles.filter((item) => item.id !== id && item.section === article?.section).slice(0, 3);

    return <main id="main-content" className="category-page category-page--filterable category-detail">
        <nav aria-label="Đường dẫn trang" className="category-breadcrumb"><Link to={routes.home}>Trang chủ</Link><span aria-hidden="true">/</span><Link to={config.path}>{config.title}</Link>{article && <><span aria-hidden="true">/</span><Link to={sectionPath}>{article.section}</Link><span aria-hidden="true">/</span><span aria-current="page">Bài viết</span></>}</nav>
        {status !== 'ready' ? <CategoryStates status={status} error={error} onRetry={retry} /> : !article ? <section className="category-state"><h1>Bài viết không tồn tại</h1><p>Hãy chọn bài khác trong chuyên mục {config.title}.</p><Link to={config.path}>← Về {config.title}</Link></section> : <>
            <article>
                <header><Link className="category-detail__section" to={sectionPath}>{article.section}</Link><h1>{article.title}</h1>{article.publishedAt && <time dateTime={article.publishedAt}>{dateFormatter.format(new Date(article.publishedAt))} · Ngày đăng minh họa</time>}</header>
                <div className="category-demo"><strong>Bản demo học tập</strong><p>{config.demoDescription}</p></div>
                <p className="category-detail__summary">{article.summary}</p>
                <figure><CategoryImage image={article.image} priority /><figcaption>{config.imageCaption || 'Hình minh họa tự tạo cho đồ án, không mô tả bất động sản có thật.'}</figcaption></figure>
                <div className="category-detail__body">{article.content?.length ? article.content.map((paragraph, index) => <p key={`${article.id}-${index}`}>{paragraph}</p>) : <p>Nội dung chi tiết minh họa chưa được bổ sung.</p>}</div>
                <Link className="category-detail__back" to={config.path}>← Về chuyên mục {config.title}</Link>
            </article>
            {related.length > 0 && <section className="category-detail__related" aria-labelledby="related-title"><h2 id="related-title">Cùng chủ đề {article.section}</h2><div>{related.map((item) => <CategoryArticleCard key={item.id} article={item} variant="compact" />)}</div></section>}
        </>}
    </main>;
}
