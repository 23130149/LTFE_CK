import { Link } from 'react-router-dom'

// Prop embedded giữ để tương thích với Router.tsx và Category.tsx
export default function NotFoundPage(_props: { embedded?: boolean }) {
    return (
        <div className="container" style={{ textAlign: 'center', padding: '50px 0' }}>
            <h2>Không tìm thấy trang</h2>
            <p>Đường dẫn bạn truy cập không tồn tại.</p>
            <Link to="/">Quay về trang chủ</Link>
        </div>
    )
}
