import type { CategoryArticle } from '../../types/category.ts';
import CategoryImage from './CategoryImage.tsx';
import { Link, useSearchParams } from 'react-router-dom';
import { categoryTopicPath } from '../../routing/routes.ts';

const dateFormatter = new Intl.DateTimeFormat('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh', day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false });

export default function CategoryArticleCard({ article, variant = 'row', headingLevel = 3 }: { article: CategoryArticle; variant?: 'row' | 'lead' | 'compact'; headingLevel?: 2 | 3 }) {
    const Heading = headingLevel === 2 ? 'h2' : 'h3';
    const [params] = useSearchParams();
    const topic = params.get('muc');
    const path = article.path && categoryTopicPath(article.path, topic === article.section ? topic : '');
    return <article className={`category-card category-card--${variant}`}>
        {path ? <Link to={path} tabIndex={-1} aria-hidden="true"><CategoryImage image={article.image} priority={variant === 'lead'} /></Link> : <CategoryImage image={article.image} priority={variant === 'lead'} />}
        <div className="category-card__content">
            <div className="category-card__meta">
                {article.section && <span>{article.section}</span>}
                {article.publishedAt && <time dateTime={article.publishedAt}>{dateFormatter.format(new Date(article.publishedAt))}</time>}
            </div>
            <Heading>{path ? <Link to={path}>{article.title}</Link> : article.title}</Heading><p>{article.summary}</p>
        </div>
    </article>;
}
