import type { CategoryArticle, CategoryConfig } from '../../types/category.ts';
import { Link } from 'react-router-dom';
import CategoryArticleCard from './CategoryArticleCard.tsx';

export default function CategorySidebar({ config, articles = [] }: { config: CategoryConfig; articles?: CategoryArticle[] }) {
    return <aside className="category-sidebar" aria-labelledby="category-sidebar-title">
        <div className="category-sidebar__intro"><span className="category-sidebar__eyebrow">{config.sidebarEyebrow || 'GÓC HỌC TẬP'}</span><h2 id="category-sidebar-title">{config.sidebarTitle}</h2><p>{config.sidebarDescription}</p></div>
        {articles.length > 0 ? <ol>{articles.map((article) => <li key={article.id}><CategoryArticleCard article={article} variant="compact" /></li>)}</ol> : <ol>{config.guides?.map((guide) => <li key={guide.title}><h3>{guide.title}</h3><p>{guide.description}</p></li>)}</ol>}
        {config.filterSections && <nav className="category-sidebar__sections" aria-label={`Khám phá ${config.title}`}><h3>Khám phá chuyên mục</h3>{config.subcategories.map((label) => <Link key={label} to={`${config.path}?${new URLSearchParams({ muc: label })}`}>{label}<span aria-hidden="true"> →</span></Link>)}</nav>}
        <p className="category-sidebar__note">{config.sidebarNote}</p>
    </aside>;
}
