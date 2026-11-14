import type { CategoryConfig } from '../../types/category.ts';
import { Link } from 'react-router-dom';

export default function CategoryNavigation({ config, activeSection = '' }: { config: CategoryConfig; activeSection?: string }) {
    return <div className="category-navigation">
        {config.filterSections ? <nav aria-label={config.navigationLabel}><ul>
            <li><Link to={config.path} aria-current={!activeSection ? 'page' : undefined}>Tất cả</Link></li>
            {config.subcategories.map((label) => <li key={label}><Link to={`${config.path}?${new URLSearchParams({ muc: label })}`} aria-current={activeSection === label ? 'page' : undefined}>{label}</Link></li>)}
        </ul></nav> : <ul aria-label={config.navigationLabel}>{config.subcategories.map((label) => <li key={label}><span>{label}</span></li>)}</ul>}
        <p>{config.navigationNote}</p>
    </div>;
}
