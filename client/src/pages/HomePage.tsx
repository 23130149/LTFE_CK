import type { Article } from '../types/Article.ts';
import { normalizeArticles } from '../services/articleDataService.ts';
import { useEffect, useState } from 'react';
import HomeFocus from '../components/HomeFocus.tsx';
import HotTags from '../components/HotTags.tsx';
import NewsList from '../components/NewsList.tsx';

export default function HomePage() {
    const [news, setNews] = useState<Article[]>([]), [error, setError] = useState('');
    useEffect(() => {
        const controller = new AbortController();
        async function loadNews() {
            try {
                const response = await fetch('/api/news', { signal: controller.signal });
                if (!response.ok) throw new Error('HTTP ' + response.status);
                const data: unknown = await response.json();
                const articles = normalizeArticles(data);
                if (!controller.signal.aborted) setNews(articles);
            } catch (error) {
                if (!controller.signal.aborted) setError('Không tải được tin: ' + (error instanceof Error ? error.message : 'Có lỗi khi tải dữ liệu') + ' (server đã chạy chưa?)');
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
