import type { CategoryConfig } from '../../types/category.ts';
import { Link } from 'react-router-dom';
import { routes } from '../../routing/routes.ts';

export default function CategoryHeader({ config }: { config: CategoryConfig }) {
    return <header className="category-heading">
        <nav aria-label="Đường dẫn trang" className="category-breadcrumb"><Link to={routes.home}>Trang chủ</Link><span aria-hidden="true">/</span><span aria-current="page">{config.title}</span></nav>
        <div className="category-heading__line"><h1>{config.title}</h1><p>{config.description}</p></div>
    </header>;
}
