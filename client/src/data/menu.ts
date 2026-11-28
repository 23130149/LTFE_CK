import type { NavigationItem } from '../types/navigation.ts';
import { routes } from '../routing/routes.ts';

export const quickNewsLinks: NavigationItem[] = [
    { title: 'Mới nhất', href: routes.latest },
    { title: 'Xem nhiều', href: routes.popular },
    { title: 'Video', href: routes.video },
];

export const sectionLinks: NavigationItem[] = [
    { title: 'Thời sự', href: '/thoi-su' },
    { title: 'Thế giới', href: '/the-gioi' },
    { title: 'Pháp luật', href: '/phap-luat' },
    { title: 'Kinh doanh', href: '/kinh-doanh' },
    { title: 'Công nghệ', href: '/cong-nghe' },
    { title: 'Xe', href: '/xe' },
    { title: 'Du lịch', href: '/du-lich' },
    { title: 'Văn hóa', href: '/van-hoa' },
    { title: 'Giải trí', href: '/giai-tri' },
    { title: 'Thể thao', href: '/the-thao' },
    { title: 'Giáo dục', href: '/giao-duc' },
    { title: 'Nhà đất', href: '/nha-dat' },
    { title: 'Sức khỏe', href: '/suc-khoe' },
    { title: 'Giả thật', href: '/gia-that' },
    { title: 'Cộng đồng', href: '/cong-dong' },
];

export const menu: NavigationItem[] = [...quickNewsLinks, ...sectionLinks];

export const newsTopics = {
    economy: 'Diễn đàn Kinh tế mùa Thu',
    weather: 'El Nino trở lại',
    walkingBridge: 'Cầu đi bộ qua sông Sài Gòn',
    assembly: 'Kỳ họp thứ 2 Quốc hội khóa XVI',
    education: 'Tiếp sức đến trường 2026',
    cityBus: 'TP.HCM miễn phí xe buýt',
};

export const hotTags: string[] = Object.values(newsTopics);

export const headerLinks = [
    { title: 'Podcast', href: 'https://podcast.tuoitre.vn/', external: true },
    { title: 'YouTube', href: 'https://www.youtube.com/@baotuoitre', external: true },
    { title: 'Cần biết', href: routes.guides, external: false },
];
