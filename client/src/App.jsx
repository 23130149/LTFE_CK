import Header from './components/Header';
import HomeFocus from './components/HomeFocus';
import HotTags from './components/HotTags';
import NewsList from './components/NewsList';
import Footer from './components/Footer';
import { mockNews } from './data/mock';

export default function App() {
    const news = mockNews;

    return (
        <>
            <Header />
            <main className="main">
                <HomeFocus articles={news.slice(0, 4)} sideList={news.slice(4, 9)} />
                <HotTags />
                <NewsList articles={news.slice(9)} />
            </main>
            <Footer />
        </>
    );
}
