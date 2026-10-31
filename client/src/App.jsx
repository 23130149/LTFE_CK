import { useEffect, useState } from 'react';
import Header from './components/Header';
import HomeFocus from './components/HomeFocus';
import HotTags from './components/HotTags';
import NewsList from './components/NewsList';
import Footer from './components/Footer';

export default function App() {
    const [news, setNews] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('/api/news')
            .then((r) => {
                if (!r.ok) throw new Error('HTTP ' + r.status);
                return r.json();
            })
            .then(setNews)
            .catch((e) => setError('Không tải được tin: ' + e.message + ' (server đã chạy chưa?)'));
    }, []);

    return (
        <>
            <Header />
            <main className="main">
                {error && <div className="container" style={{ color: '#ed1c24', marginBottom: 16 }}>{error}</div>}
                <HomeFocus articles={news.slice(0, 4)} sideList={news.slice(4, 9)} />
                <HotTags />
                <NewsList articles={news.slice(9)} />
            </main>
            <Footer />
        </>
    );
}