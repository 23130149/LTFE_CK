import { useEffect, useState } from 'react';
import HomeFocus from '../components/HomeFocus';
import HotTags from '../components/HotTags';
import NewsList from '../components/NewsList';

export default function HomePage() {
    const [news, setNews] = useState([]), [error, setError] = useState('');
    useEffect(() => {
        const controller = new AbortController();
        async function loadNews() {
            try {
                const response = await fetch('/api/news', { signal: controller.signal });
                if (!response.ok) throw new Error('HTTP ' + response.status);
                const data = await response.json();
                if (!Array.isArray(data)) throw new Error('Dữ liệu tin không hợp lệ');
                if (!controller.signal.aborted) setNews(data);
            } catch (error) {
                if (!controller.signal.aborted) setError('Không tải được tin: ' + error.message + ' (server đã chạy chưa?)');
            }
        }
        loadNews();
        return () => controller.abort();
    }, []);
    return <main id="main-content" className="main">
        {error && <div className="container" role="alert" style={{ color: '#ed1c24', marginBottom: 16 }}>{error}</div>}
        <HomeFocus articles={news.slice(0, 4)} sideList={news.slice(4, 9)} /><HotTags /><NewsList articles={news.slice(9)} />
    </main>;
}
