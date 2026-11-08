import type { CategoryConfig, CategoryLoader, CategoryLoadState } from '../types/category.ts';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryHeader from '../components/category/CategoryHeader.tsx';
import CategoryNavigation from '../components/category/CategoryNavigation.tsx';
import FeaturedArticle from '../components/category/FeaturedArticle.tsx';
import CategoryNewsList from '../components/category/CategoryNewsList.tsx';
import CategoryStates from '../components/category/CategoryStates.tsx';
import CategorySidebar from '../components/category/CategorySidebar.tsx';
import SectionHeader from '../components/section/SectionHeader.tsx';
import ThoiSuLayout from '../components/section/ThoiSuLayout.tsx';
import MagazineLayout from '../components/section/MagazineLayout.tsx';
import { toSectionArticle } from '../components/section/toSectionArticle.ts';
import { categoryMessages } from '../config/categoryConfig.ts';
import { useCategoryNews } from '../hooks/useCategoryNews.ts';
import { loadCategoryNews } from '../services/categoryDataService.ts';
import '../styles/section.css';

const TODAY = new Date().toLocaleDateString('vi-VN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

type ViewProps = { config: CategoryConfig; status: CategoryLoadState['status']; articles: CategoryLoadState['articles']; error: string; onRetry: () => void };

export default function CategoryPage({ config, loader = loadCategoryNews }: { config: CategoryConfig; loader?: CategoryLoader }) {
    const { status, articles, error, retry } = useCategoryNews(config.slug, loader);
    useEffect(() => {
        const previousTitle = document.title;
        document.title = config.pageTitle;
        return () => { document.title = previousTitle; };
    }, [config.pageTitle]);
    const view = { config, status, articles, error, onRetry: retry };
    return config.layout === 'classic' ? <ClassicCategory {...view} /> : <SectionCategory {...view} />;
}

function ClassicCategory({ config, status, articles, error, onRetry }: ViewProps) {
    const featuredCount = config.featuredCount ?? 4;
    const pageSize = config.pageSize ?? 6;
    const [visibleCount, setVisibleCount] = useState(pageSize);
    return <main id="main-content" className="category-page">
        <CategoryHeader config={config} /><CategoryNavigation config={config} />
        <div className="category-demo"><strong>{categoryMessages.demo}</strong><p>{categoryMessages.demoDescription}</p></div>
        {status !== 'ready' || articles.length === 0 ? <CategoryStates status={status === 'ready' ? 'empty' : status} error={error} onRetry={onRetry} /> : <div className="category-layout">
            <div className="category-layout__main">
                <FeaturedArticle articles={articles.slice(0, featuredCount)} />
                <CategoryNewsList articles={articles.slice(featuredCount)} config={config} visibleCount={visibleCount} onLoadMore={() => setVisibleCount((count) => count + pageSize)} />
            </div>
            <CategorySidebar config={config} />
        </div>}
    </main>;
}

function SectionCategory({ config, status, articles, error, onRetry }: ViewProps) {
    const [tab, setTab] = useState(0);
    const isThoiSu = config.layout === 'thoi-su';
    const tabs = [...config.subcategories];

    if (status !== 'ready' || articles.length === 0) {
        return <main id="main-content" className="container sec-page">
            <CategoryStates status={status === 'ready' ? 'empty' : status} error={error} onRetry={onRetry} />
        </main>;
    }

    const items = articles.map(toSectionArticle);
    return <main id="main-content" className="container sec-page">
        {isThoiSu && (
            <nav className="sec-crumb" aria-label="Đường dẫn trang">
                <Link to="/">Trang chủ</Link><span>/</span><span>{config.title}</span>
            </nav>
        )}
        {isThoiSu ? (
            <SectionHeader title={config.title} desc={config.description} date={TODAY} tabs={tabs} active={tab} onTab={setTab} />
        ) : (
            <SectionHeader title={config.title} tabs={tabs} active={tab} onTab={setTab} />
        )}
        <div className="category-demo"><strong>{categoryMessages.demo}</strong><p>{categoryMessages.demoDescription}</p></div>
        {isThoiSu
            ? <ThoiSuLayout articles={items} hot={items.slice(0, 4)} />
            : <MagazineLayout articles={items} />}
    </main>;
}
