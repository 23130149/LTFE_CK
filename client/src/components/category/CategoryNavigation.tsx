import type { CategoryConfig } from '../../types/category.ts';
export default function CategoryNavigation({ config }: { config: CategoryConfig }) {
    return <div className="category-navigation">
        <ul aria-label={config.navigationLabel}>{config.subcategories.map((label) => <li key={label}><span>{label}</span></li>)}</ul>
        <p>{config.navigationNote}</p>
    </div>;
}
