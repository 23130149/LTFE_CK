import { useAppSelector } from '../store/hooks'
import HomeFocus from '../components/HomeFocus'
import HotTags from '../components/HotTags'
import NewsList from '../components/NewsList'

export default function Home() {
    const news = useAppSelector((state) => state.news)

    return (
        <>
            <HomeFocus articles={news.slice(0, 4)} sideList={news.slice(4, 9)} />
            <HotTags />
            <NewsList articles={news.slice(9)} />
        </>
    )
}
