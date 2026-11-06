import { Link } from 'react-router-dom';
import { routes } from '../routing/routes.ts';

export default function NotFoundPage({ embedded = false }: { embedded?: boolean }) {
    const Container = embedded ? 'div' : 'main';
    return <Container id={embedded ? undefined : 'main-content'} className="category-page route-not-found">
        <span className="route-not-found__code">404</span><h1>Trang chưa có trong bản demo</h1>
        <p>Đường dẫn này chưa được triển khai hoặc không tồn tại.</p>
        <div><Link to={routes.home}>Về trang chủ</Link><Link to={routes.education}>Xem chuyên mục Giáo dục</Link></div>
    </Container>;
}
