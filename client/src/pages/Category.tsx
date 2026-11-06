import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useAppSelector } from '../store/hooks.ts'
import { menu } from '../data/menu.ts'
import NotFoundPage from './NotFoundPage.tsx'
import NewsList from '../components/NewsList.tsx'
import SectionHeader from '../components/section/SectionHeader.tsx'
import ThoiSuLayout from '../components/section/ThoiSuLayout.tsx'
import MagazineLayout from '../components/section/MagazineLayout.tsx'
import '../styles/section.css'

// Các mục menu không phải chuyên mục thật thì hiện tất cả bài
const ALL_SLUGS = ['tin-moi-nhat', 'tin-xem-nhieu']

// Chỉ 3 chuyên mục có bố cục mới. Các mục khác giữ giao diện danh sách cũ ('classic').
type Layout = 'thoi-su' | 'magazine'
const PAGE_CONFIG: Record<string, { layout: Layout; tabs: string[] }> = {
    'thoi-su': { layout: 'thoi-su', tabs: ['Mới nhất', 'Nổi bật', 'Xã hội', 'Phóng sự'] },
    'the-gioi': { layout: 'magazine', tabs: ['Bình luận', 'Kiều bào', 'Muôn màu', 'Hồ sơ'] },
    'phap-luat': { layout: 'magazine', tabs: ['Chuyện pháp đình', 'Tư vấn', 'Pháp lý'] },
}

// Tính một lần khi tải module, tránh gọi hàm không thuần trong lúc render
const TODAY = new Date().toLocaleDateString('vi-VN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })

export default function Category() {
    const { zone = '' } = useParams()
    const news = useAppSelector((state) => state.news)
    const [tab, setTab] = useState(0)

    const item = menu.find((m) => m.href === `/${zone}`)
    if (!item) return <NotFoundPage embedded />

    const isAll = ALL_SLUGS.includes(zone)
    const config = PAGE_CONFIG[zone]

    // Giao diện cũ: danh sách tin đơn giản, không đổi
    if (!config) {
        const articles = isAll ? news : news.filter((a) => a.zone === item.title)
        return (
            <div className="container">
                <h2 style={{ color: '#ed1c24', textTransform: 'uppercase' }}>{item.title}</h2>
                {articles.length === 0
                    ? <p>Chưa có bài viết nào trong chuyên mục này.</p>
                    : <NewsList articles={articles} />}
            </div>
        )
    }

    // Tin của chuyên mục đứng trước; nếu chưa đủ thì bổ sung tin khác để trang không trống
    const inZone = news.filter((a) => a.zone === item.title)
    const pool = [...inZone, ...news.filter((a) => a.zone !== item.title)]
    if (pool.length === 0) return <div className="container"><p>Chưa có bài viết nào.</p></div>

    const isThoiSu = config.layout === 'thoi-su'

    return (
        <div className="container sec-page">
            {isThoiSu && (
                <nav className="sec-crumb" aria-label="Đường dẫn trang">
                    <Link to="/">Trang chủ</Link><span>/</span><span>{item.title}</span>
                </nav>
            )}

            {isThoiSu ? (
                <SectionHeader
                    title={item.title}
                    desc={`Dòng chảy tin tức ${item.title.toLowerCase()}, cập nhật liên tục.`}
                    date={TODAY}
                    tabs={config.tabs}
                    active={tab}
                    onTab={setTab}
                />
            ) : (
                <SectionHeader title={item.title} tabs={config.tabs} active={tab} onTab={setTab} />
            )}

            {isThoiSu && <ThoiSuLayout articles={pool} hot={news.slice(0, 4)} />}
            {!isThoiSu && <MagazineLayout articles={pool} />}
        </div>
    )
}
