import CategoryImage from './CategoryImage';

const dateFormatter = new Intl.DateTimeFormat('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh', day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false });

export default function CategoryArticleCard({ article, variant = 'row', headingLevel = 3 }) {
    const Heading = `h${headingLevel}`;
    return <article className={`category-card category-card--${variant}`}>
        <CategoryImage image={article.image} priority={variant === 'lead'} />
        <div className="category-card__content">
            <div className="category-card__meta">
                {article.section && <span>{article.section}</span>}
                {article.publishedAt && <time dateTime={article.publishedAt}>{dateFormatter.format(new Date(article.publishedAt))}</time>}
            </div>
            <Heading>{article.title}</Heading><p>{article.summary}</p>
        </div>
    </article>;
}
