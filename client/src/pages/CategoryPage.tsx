import type { CategoryArticle, CategoryConfig } from '../types/category.ts';
import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import CategoryHeader from '../components/category/CategoryHeader.tsx';
import CategoryNavigation from '../components/category/CategoryNavigation.tsx';
import FeaturedArticle from '../components/category/FeaturedArticle.tsx';
import CategoryNewsList from '../components/category/CategoryNewsList.tsx';
import CategoryEmpty from '../components/category/CategoryEmpty.tsx';
import CategorySidebar from '../components/category/CategorySidebar.tsx';
import SectionHeader from '../components/section/SectionHeader.tsx';
import ThoiSuLayout from '../components/section/ThoiSuLayout.tsx';
import MagazineLayout from '../components/section/MagazineLayout.tsx';
import { toSectionArticle } from '../components/section/toSectionArticle.ts';
import { categoryMessages } from '../config/categoryConfig.ts';
import { useAppSelector } from '../store/hooks.ts';
import { selectCategoryArticles, selectCategoryPage } from '../store/categorySelectors.ts';
import '../styles/section.css';

const TODAY = new Date().toLocaleDateString('vi-VN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

type ViewProps = { config: CategoryConfig; articles: CategoryArticle[] };

export default function CategoryPage({ config }: { config: CategoryConfig }) {
    const articles = useAppSelector((state) => selectCategoryArticles(state, config.slug));
    useEffect(() => {
        const previousTitle = document.title;
        document.title = config.pageTitle;
        return () => { document.title = previousTitle; };
    }, [config.pageTitle]);
    return config.layout === 'classic'
        ? <ClassicCategory key={config.slug} config={config} />
        : <SectionCategory key={config.slug} config={config} articles={articles} />;
}

function ClassicCategory({ config }: { config: CategoryConfig }) {
    const [searchParams] = useSearchParams();
    const activeSection = config.filterSections ? searchParams.get('muc') || '' : '';
    return <main id="main-content" className={`category-page${config.filterSections ? ' category-page--filterable' : ''}`}>
        <CategoryHeader config={config} /><CategoryNavigation config={config} activeSection={activeSection} />
        <div className="category-demo"><strong>{categoryMessages.demo}</strong><p>{config.demoDescription || categoryMessages.demoDescription}</p></div>
        <ClassicContent key={activeSection} config={config} activeSection={activeSection} />
    </main>;
}

function ClassicContent({ config, activeSection }: { config: CategoryConfig; activeSection: string }) {
    const pageSize = config.pageSize ?? 6;
    const [visibleCount, setVisibleCount] = useState(pageSize);
    const options = useMemo(() => ({ section: activeSection, featuredCount: config.featuredCount, pageSize, visibleCount }), [activeSection, config.featuredCount, pageSize, visibleCount]);
    const page = useAppSelector((state) => selectCategoryPage(state, config.slug, options));
    return <div className="category-layout">
        <div className="category-layout__main">
            {!activeSection && <FeaturedArticle articles={page.featured} layout={config.featuredLayout} />}
            {activeSection && <p className="category-filter-result" role="status">{page.total} bài viết · {activeSection}</p>}
            {!page.total && <CategoryEmpty />}
            <CategoryNewsList articles={page.visibleArticles} totalCount={page.listTotal} config={activeSection ? { ...config, listTitle: activeSection } : config} visibleCount={visibleCount} onLoadMore={() => setVisibleCount((count) => Math.min(count + pageSize, page.listTotal))} />
        </div>
        <CategorySidebar config={config} articles={config.filterSections ? page.sidebar : undefined} />
    </div>;
}

function SectionCategory({ config, articles }: ViewProps) {
    const [tab, setTab] = useState(0);
    const isThoiSu = config.layout === 'thoi-su';
    const tabs = isThoiSu ? [...config.subcategories] : ['Tất cả', ...config.subcategories];

    const selectedSection = tabs[tab];
    const selectedArticles = tab === 0 ? articles : isThoiSu && selectedSection === 'Nổi bật'
        ? articles.slice(0, 4) : articles.filter((article) => article.section === selectedSection);
    const items = selectedArticles.map((article) => toSectionArticle(article, config.path));
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
        {items.length === 0 ? <CategoryEmpty /> : isThoiSu
            ? <ThoiSuLayout key={tab} articles={items} hot={items.slice(0, 4)} />
            : <MagazineLayout articles={items} />}
    </main>;
}