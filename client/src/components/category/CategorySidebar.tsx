import type { CategoryConfig } from '../../types/category.ts';
export default function CategorySidebar({ config }: { config: CategoryConfig }) {
    return <aside className="category-sidebar" aria-labelledby="category-sidebar-title">
        <div className="category-sidebar__intro"><span className="category-sidebar__eyebrow">GÓC HỌC TẬP</span><h2 id="category-sidebar-title">{config.sidebarTitle}</h2><p>{config.sidebarDescription}</p></div>
        <ol>{config.guides.map((guide) => <li key={guide.title}><h3>{guide.title}</h3><p>{guide.description}</p></li>)}</ol>
        <p className="category-sidebar__note">{config.sidebarNote}</p>
    </aside>;
}
