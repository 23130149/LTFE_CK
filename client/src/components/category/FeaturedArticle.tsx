import type { CategoryArticle } from '../../types/category.ts'
import CategoryArticleCard from './CategoryArticleCard.tsx'

export default function FeaturedArticle({ articles }: { articles: CategoryArticle[] }) {
    if (articles.length === 0) return null
    const [lead, ...supporting] = articles
    return (
        <section className="category-featured" aria-label="Tin nổi bật">
            <CategoryArticleCard article={lead} variant="lead" headingLevel={2} />
            {supporting.length > 0 && (
                <div className="category-featured__supporting">
                    {supporting.map((article) => (
                        <CategoryArticleCard key={article.id} article={article} variant="compact" />
                    ))}
                </div>
            )}
        </section>
    )
}
