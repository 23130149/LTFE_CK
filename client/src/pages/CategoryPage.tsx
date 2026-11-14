import type { CategoryArticle, CategoryConfig, CategoryLoader } from '../types/category.ts';
import type { ReactNode } from 'react';
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
import { useAppSelector } from '../store/hooks.ts';
import { loadCategoryNews } from '../services/categoryDataService.ts';
import '../styles/section.css';

const TODAY = new Date().toLocaleDateString('vi-VN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
const NO_ARTICLES: CategoryArticle[] = [];

type CategorySource = 'service' | 'store';
type ViewProps = { config: CategoryConfig; articles: CategoryArticle[]; empty: ReactNode };

export default function CategoryPage({ config, loader = loadCategoryNews, source = 'service' }: { config: CategoryConfig; loader?: CategoryLoader; source?: CategorySource }) {
    if (source === 'store') return <StoreCategoryPage config={config} />;
    return <ServiceCategoryPage config={config} loader={loader} />;
}

function ServiceCategoryPage({ config, loader }: { config: CategoryConfig; loader: CategoryLoader }) {
    const { status, articles, error, retry } = useCategoryNews(config.slug, loader);
    return <CategoryView config={config} articles={articles} empty={<CategoryStates status={status === 'ready' ? 'empty' : status} error={error} onRetry={retry} />} />;
}

function StoreCategoryPage({ config }: { config: CategoryConfig }) {
    const articles = useAppSelector((state) => state.categoryNews[config.slug] ?? NO_ARTICLES);
    return <CategoryView config={config} articles={articles} empty={<CategoryStates status="empty" />} />;
}

function CategoryView({ config, articles, empty }: ViewProps) {
    useEffect(() => {
        const previousTitle = document.title;
        document.title = config.pageTitle;
        return () => { document.title = previousTitle; };
    }, [config.pageTitle]);
    return config.layout === 'classic'
        ? <ClassicCategory config={config} articles={articles} empty={empty} />
        : <SectionCategory config={config} articles={articles} empty={empty} />;
}

function ClassicCategory({ config, articles, empty }: ViewProps) {
    const featuredCount = config.featuredCount ?? 4;
    const pageSize = config.pageSize ?? 6;
    const [visibleCount, setVisibleCount] = useState(pageSize);
    return <main id="main-content" className="category-page">
        <CategoryHeader config={config} /><CategoryNavigation config={config} />
        <div className="category-demo"><strong>{categoryMessages.demo}</strong><p>{categoryMessages.demoDescription}</p></div>
        {articles.length === 0 ? empty : <div className="category-layout">
            <div className="category-layout__main">
                <FeaturedArticle articles={articles.slice(0, featuredCount)} />
                <CategoryNewsList articles={articles.slice(featuredCount)} config={config} visibleCount={visibleCount} onLoadMore={() => setVisibleCount((count) => count + pageSize)} />
            </div>
            <CategorySidebar config={config} />
        </div>}
    </main>;
}

function SectionCategory({ config, articles, empty }: ViewProps) {
    const [tab, setTab] = useState(0);
    const isThoiSu = config.layout === 'thoi-su';
    const tabs = [...config.subcategories];

    if (articles.length === 0) {
        return <main id="main-content" className="container sec-page">
            {empty}
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
