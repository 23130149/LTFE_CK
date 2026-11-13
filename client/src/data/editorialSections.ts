import { routes } from '../routing/routes.ts';

export type EditorialSlug = 'xe' | 'du-lich' | 'van-hoa' | 'giai-tri' | 'the-thao';

export interface EditorialArticle {
    id: string;
    slug: EditorialSlug;
    title: string;
    summary: string;
    section: string;
    publishedAt: string;
    image: { src: string; alt: string };
    content: string[];
}

export interface EditorialSection {
    slug: EditorialSlug;
    path: string;
    title: string;
    description: string;
    topics: readonly string[];
    image: string;
}

export const editorialSections: readonly EditorialSection[] = [
    { slug: 'xe', path: routes.vehicles, title: 'Xe', description: 'Chuyện đi lại, chăm sóc phương tiện và trải nghiệm trên đường.', topics: ['Ô tô', 'Xe máy', 'Giao thông'], image: '/images/sections/xe.svg' },
    { slug: 'du-lich', path: routes.travel, title: 'Du lịch', description: 'Hành trình, điểm đến và những cách khám phá có trách nhiệm.', topics: ['Điểm đến', 'Kinh nghiệm', 'Ẩm thực'], image: '/images/sections/du-lich.svg' },
    { slug: 'van-hoa', path: routes.culture, title: 'Văn hóa', description: 'Di sản, sách và những câu chuyện làm nên đời sống văn hóa.', topics: ['Di sản', 'Sách', 'Đời sống'], image: '/images/sections/van-hoa.svg' },
    { slug: 'giai-tri', path: routes.entertainment, title: 'Giải trí', description: 'Góc nhìn về phim ảnh, âm nhạc và sân khấu.', topics: ['Phim', 'Âm nhạc', 'Sân khấu'], image: '/images/sections/giai-tri.svg' },
];

