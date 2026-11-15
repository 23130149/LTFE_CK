import type { CategoryArticle, CategoryConfig, CategoryLoader, CategoryLoadState } from '../types/category.ts';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
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
type ViewProps = { config: CategoryConfig; status: CategoryLoadState['status']; articles: CategoryArticle[]; error: string; onRetry?: () => void };

export default function CategoryPage({ config, loader = loadCategoryNews, source = 'service' }: { config: CategoryConfig; loader?: CategoryLoader; source?: CategorySource }) {
    if (source === 'store') return <StoreCategoryPage config={config} />;
    return <ServiceCategoryPage config={config} loader={loader} />;
}

function ServiceCategoryPage({ config, loader }: { config: CategoryConfig; loader: CategoryLoader }) {
    const { status, articles, error, retry } = useCategoryNews(config.slug, loader);
    return <CategoryView config={config} status={status} articles={articles} error={error} onRetry={retry} />;
}

function StoreCategoryPage({ config }: { config: CategoryConfig }) {
    const articles = useAppSelector((state) => state.categoryNews[config.slug] ?? NO_ARTICLES);
    return <CategoryView config={config} status="ready" articles={articles} error="" />;
}

function CategoryView({ config, status, articles, error, onRetry }: ViewProps) {
    useEffect(() => {
        const previousTitle = document.title;
        document.title = config.pageTitle;
        return () => { document.title = previousTitle; };
    }, [config.pageTitle]);
    const view = { config, status, articles, error, onRetry };
    return config.layout === 'classic' ? <ClassicCategory key={config.slug} {...view} /> : <SectionCategory key={config.slug} {...view} />;
}

function ClassicCategory({ config, status, articles, error, onRetry }: ViewProps) {
    const [searchParams] = useSearchParams();
    const activeSection = config.filterSections ? searchParams.get('muc') || '' : '';
    const filteredArticles = activeSection ? articles.filter((article) => article.section === activeSection) : articles;
    return <main id="main-content" className={`category-page${config.filterSections ? ' category-page--filterable' : ''}`}>
        <CategoryHeader config={config} /><CategoryNavigation config={config} activeSection={activeSection} />
        <div className="category-demo"><strong>{categoryMessages.demo}</strong><p>{config.demoDescription || categoryMessages.demoDescription}</p></div>
        {status !== 'ready' || filteredArticles.length === 0 ? <CategoryStates status={status === 'ready' ? 'empty' : status} error={error} onRetry={onRetry} /> : <ClassicContent key={activeSection} config={config} articles={filteredArticles} activeSection={activeSection} />}
    </main>;
}

function ClassicContent({ config, articles, activeSection }: { config: CategoryConfig; articles: CategoryLoadState['articles']; activeSection: string }) {
    const featuredCount = activeSection ? 0 : config.featuredCount ?? 4;
    const pageSize = config.pageSize ?? 6;
    const [visibleCount, setVisibleCount] = useState(pageSize);
    const sidebarArticles = articles.slice(featuredCount + pageSize, featuredCount + pageSize + 3);
    return <div className="category-layout">
        <div className="category-layout__main">
            {!activeSection && <FeaturedArticle articles={articles.slice(0, featuredCount)} layout={config.featuredLayout} />}
            {activeSection && <p className="category-filter-result" role="status">{articles.length} bài viết · {activeSection}</p>}
            <CategoryNewsList articles={articles.slice(featuredCount)} config={activeSection ? { ...config, listTitle: activeSection } : config} visibleCount={visibleCount} onLoadMore={() => setVisibleCount((count) => Math.min(count + pageSize, articles.length - featuredCount))} />
        </div>
        <CategorySidebar config={config} articles={config.filterSections ? sidebarArticles.length ? sidebarArticles : articles.slice(0, 3) : undefined} />
    </div>;
}

function SectionCategory({ config, status, articles, error, onRetry }: ViewProps) {
    const [tab, setTab] = useState(0);
    const isThoiSu = config.layout === 'thoi-su';
    const tabs = isThoiSu ? [...config.subcategories] : ['Tất cả', ...config.subcategories];

    if (status !== 'ready' || articles.length === 0) {
        return <main id="main-content" className="container sec-page">
            <CategoryStates status={status === 'ready' ? 'empty' : status} error={error} onRetry={onRetry} />
        </main>;
    }

    const selectedSection = tabs[tab];
    const selectedArticles = tab === 0 ? articles : isThoiSu && selectedSection === 'Nổi bật'
        ? articles.slice(0, 4) : articles.filter((article) => article.section === selectedSection);
    const items = selectedArticles.map(toSectionArticle);
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
        {items.length === 0 ? <CategoryStates status="empty" onRetry={onRetry} /> : isThoiSu
            ? <ThoiSuLayout key={tab} articles={items} hot={items.slice(0, 4)} />
            : <MagazineLayout articles={items} />}
    </main>;
}