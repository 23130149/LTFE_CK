import { useAppSelector } from '../store/hooks.ts'
import HomeFocus from '../components/HomeFocus.tsx'
import HotTags from '../components/HotTags.tsx'
import NewsList from '../components/NewsList.tsx'

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
