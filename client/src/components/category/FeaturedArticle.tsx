import type { CategoryArticle } from '../../types/category.ts';
import CategoryArticleCard from './CategoryArticleCard.tsx';

export default function FeaturedArticle({ articles }: { articles: CategoryArticle[] }) {
    const [lead, ...supporting] = articles;
    if (!lead) return null;
    return <section className="category-featured" aria-label="Tiêu điểm chuyên mục">
        <CategoryArticleCard article={lead} variant="lead" headingLevel={2} />
        {supporting.length > 0 && <div className="category-featured__supporting">{supporting.map((article) => <CategoryArticleCard key={article.id} article={article} variant="compact" headingLevel={2} />)}</div>}
    </section>;
}
