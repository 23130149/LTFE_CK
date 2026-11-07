import type { CategoryArticle, CategoryConfig, CategoryLoader } from '../types/category.ts';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
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
    const [searchParams] = useSearchParams();
    const requestedSection = searchParams.get('muc') || '';
    const activeSection = config.filterSections ? requestedSection : '';
    const filteredArticles = activeSection ? articles.filter((article) => article.section === activeSection) : articles;
    useEffect(() => {
        if (config.filterSections) window.scrollTo(0, 0);
    }, [config.filterSections, activeSection]);
    useEffect(() => {
        const previousTitle = document.title;
        document.title = config.pageTitle;
        return () => { document.title = previousTitle; };
    }, [config.pageTitle]);
    return <main id="main-content" className={`category-page${config.filterSections ? ' category-page--real-estate' : ''}`}>
        <CategoryHeader config={config} /><CategoryNavigation config={config} activeSection={activeSection} />
        <div className="category-demo"><strong>{categoryMessages.demo}</strong><p>{config.demoDescription || categoryMessages.demoDescription}</p></div>
        {status !== 'ready' || filteredArticles.length === 0 ? <CategoryStates status={status === 'ready' ? 'empty' : status} error={error} onRetry={retry} /> : <CategoryContent key={`${config.slug}:${activeSection}`} config={config} articles={filteredArticles} activeSection={activeSection} />}
    </main>;
}

function CategoryContent({ config, articles, activeSection }: { config: CategoryConfig; articles: CategoryArticle[]; activeSection: string }) {
    const [visibleCount, setVisibleCount] = useState(config.pageSize);
    const featuredCount = activeSection ? 0 : config.featuredCount;
    const listConfig = activeSection ? { ...config, listTitle: activeSection } : config;
    const sidebarArticles = articles.slice(featuredCount + config.pageSize, featuredCount + config.pageSize + 3);
    const recommendedArticles = sidebarArticles.length ? sidebarArticles : articles.slice(0, 3);
    return <div className="category-layout">
            <div className="category-layout__main">
                {!activeSection && <FeaturedArticle articles={articles.slice(0, featuredCount)} layout={config.featuredLayout} />}
                {activeSection && <p className="category-filter-result" role="status">{articles.length} bài viết · {activeSection}</p>}
                <CategoryNewsList articles={articles.slice(featuredCount)} config={listConfig} visibleCount={visibleCount} onLoadMore={() => setVisibleCount((count) => count + config.pageSize)} />
            </div>
            <CategorySidebar config={config} articles={config.filterSections ? recommendedArticles : undefined} />
        </div>;
}
