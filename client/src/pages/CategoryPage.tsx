import type { CategoryConfig, CategoryLoader } from '../types/category.ts';
import { useEffect, useState } from 'react';
import CategoryHeader from '../components/category/CategoryHeader.tsx';
import CategoryNavigation from '../components/category/CategoryNavigation.tsx';
import FeaturedArticle from '../components/category/FeaturedArticle.tsx';
import CategoryNewsList from '../components/category/CategoryNewsList.tsx';
import CategoryStates from '../components/category/CategoryStates.tsx';
import CategorySidebar from '../components/category/CategorySidebar.tsx';
import { categoryMessages } from '../config/categoryConfig.ts';
import { useCategoryNews } from '../hooks/useCategoryNews.ts';
import { loadCategoryNews } from '../services/categoryDataService.ts';

export default function CategoryPage({ config, loader = loadCategoryNews }: { config: CategoryConfig; loader?: CategoryLoader }) {
    const { status, articles, error, retry } = useCategoryNews(config.slug, loader);
    const [visibleCount, setVisibleCount] = useState(config.pageSize);
    useEffect(() => {
        const previousTitle = document.title;
        document.title = config.pageTitle;
        return () => { document.title = previousTitle; };
    }, [config.pageTitle]);
    return <main id="main-content" className="category-page">
        <CategoryHeader config={config} /><CategoryNavigation config={config} />
        <div className="category-demo"><strong>{categoryMessages.demo}</strong><p>{categoryMessages.demoDescription}</p></div>
        {status !== 'ready' || articles.length === 0 ? <CategoryStates status={status === 'ready' ? 'empty' : status} error={error} onRetry={retry} /> : <div className="category-layout">
            <div className="category-layout__main">
                <FeaturedArticle articles={articles.slice(0, config.featuredCount)} />
                <CategoryNewsList articles={articles.slice(config.featuredCount)} config={config} visibleCount={visibleCount} onLoadMore={() => setVisibleCount((count) => count + config.pageSize)} />
            </div>
            <CategorySidebar config={config} />
        </div>}
    </main>;
}
