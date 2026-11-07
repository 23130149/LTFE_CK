import type { CategoryArticle, CategoryConfig } from '../../types/category.ts';
import CategoryArticleCard from './CategoryArticleCard.tsx';
import { categoryMessages } from '../../config/categoryConfig.ts';

export default function CategoryNewsList({ articles, config, visibleCount, onLoadMore }: { articles: CategoryArticle[]; config: CategoryConfig; visibleCount: number; onLoadMore: () => void }) {
    if (!articles.length) return null;
    return <section className="category-news" aria-labelledby="category-news-title">
        <h2 id="category-news-title">{config.listTitle}</h2>
        <div className="category-news__items">{articles.slice(0, visibleCount).map((article) => <CategoryArticleCard key={article.id} article={article} />)}</div>
        <div className="category-news__more">{config.filterSections && <p className="category-news__count" role="status">Đang hiển thị {Math.min(visibleCount, articles.length)} / {articles.length} bài trong danh sách</p>}{visibleCount < articles.length ? <button type="button" onClick={onLoadMore}>{categoryMessages.more}<span aria-hidden="true"> ↓</span></button> : <p role="status">{categoryMessages.end}</p>}</div>
    </section>;
}
