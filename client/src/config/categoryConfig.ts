import type { CategoryConfig } from '../types/category.ts';
import { routes } from '../routing/routes.ts';

export const categoryMessages = Object.freeze({
    loading: 'Đang tải tin chuyên mục…',
    emptyTitle: 'Chưa có tin trong chuyên mục',
    emptyDescription: 'Bạn có thể thử tải lại danh sách sau.',
    errorTitle: 'Chưa thể hiển thị tin',
    errorDescription: 'Có lỗi khi tải dữ liệu chuyên mục. Vui lòng thử lại.',
    invalidData: 'Dữ liệu chuyên mục chưa đúng định dạng. Vui lòng thử lại.',
    cancelled: 'Việc tải tin đã bị hủy. Bạn có thể thử lại.',
    retry: 'Thử lại', missingSummary: 'Nội dung minh họa cho chuyên mục.',
    missingImage: 'Ảnh minh họa chưa sẵn sàng', demo: 'Bản demo học tập',
    demoDescription: 'Tin và thời gian dưới đây là dữ liệu minh họa, không phải tin mới từ Tuổi Trẻ. Bản demo chưa mở nội dung bài viết.',
    more: 'Xem thêm tin minh họa', end: 'Bạn đã xem hết tin minh họa trong chuyên mục.',
});

export const realEstateConfig = Object.freeze<CategoryConfig>({
    slug: 'nha-dat', path: routes.realEstate, title: 'Nhà đất',
    pageTitle: 'Nhà đất | Tuổi Trẻ — Demo học tập',
    description: 'Thị trường, chính sách và những câu chuyện về chốn an cư.',
    layout: 'classic',
    navigationLabel: 'Các nhóm nội dung Nhà đất',
    navigationNote: 'Chọn một mục để xem các bài viết cùng chủ đề.',
    subcategories: ['Hỏi đáp', 'Thị trường', 'Chính sách', 'Dự án'],
    filterSections: true, featuredLayout: 'editorial',
    featuredCount: 4, pageSize: 6, listTitle: 'Tin nhà đất',
    demoDescription: 'Nội dung, ngày đăng và hình minh họa được biên soạn cho đồ án; không phải tin thời sự, tư vấn pháp lý hay thông tin chào bán dự án.',
    sidebarEyebrow: 'ĐỌC CÙNG CHỦ ĐỀ',
    sidebarTitle: 'Nhà đất đáng chú ý',
    sidebarDescription: 'Thêm góc nhìn về nhà ở, quy hoạch và không gian sống.',
    guides: [],
    sidebarNote: 'Bài viết và hình minh họa thuộc bản demo học tập.',
});

export const healthConfig = Object.freeze<CategoryConfig>({
    slug: 'suc-khoe', path: routes.health, title: 'Sức khỏe',
    pageTitle: 'Sức khỏe | Tuổi Trẻ — Demo học tập',
    description: 'Những câu chuyện về bữa ăn, gia đình và sự quan tâm mỗi ngày.',
    layout: 'classic',
    navigationLabel: 'Các nhóm nội dung Sức khỏe',
    navigationNote: 'Chọn chủ đề để đọc nội dung minh họa cùng chuyên mục.',
    subcategories: ['Dinh dưỡng', 'Mẹ & Bé', 'Giới tính', 'Phòng mạch', 'Biết để khỏe'],
    filterSections: true, featuredLayout: 'editorial',
    featuredCount: 4, pageSize: 6, listTitle: 'Tin sức khỏe',
    demoDescription: 'Bài viết, ngày đăng và hình ảnh là dữ liệu minh họa tự biên soạn cho đồ án; không phải tin y tế thực tế, chẩn đoán hoặc hướng dẫn điều trị.',
    sidebarEyebrow: 'CÙNG BẠN ĐỌC',
    sidebarTitle: 'Sức khỏe đáng chú ý',
    sidebarDescription: 'Đọc thêm những câu chuyện cùng chủ đề trong bản demo.',
    sidebarNote: 'Danh sách biên tập minh họa, không dựa trên số liệu lượt xem. Nội dung không thay thế tư vấn y tế.',
    imageCaption: 'Tranh minh họa tự tạo cho đồ án, không mô tả người bệnh hoặc cơ sở y tế có thật.',
});

export const educationConfig = Object.freeze<CategoryConfig>({
    slug: 'giao-duc', path: routes.education, title: 'Giáo dục',
    pageTitle: 'Giáo dục | Tuổi Trẻ — Demo học tập',
    description: 'Góc nhìn về học tập, nhà trường và hành trình trưởng thành.',
    layout: 'classic',
    navigationLabel: 'Các nhóm nội dung Giáo dục',
    navigationNote: 'Chuyên mục con đang ở chế độ giới thiệu.',
    subcategories: ['Tuyển sinh', 'Nhịp sống học đường', 'Chân dung nhà giáo', 'Du học', 'Câu chuyện giáo dục'],
    featuredCount: 4, pageSize: 6, listTitle: 'Tin giáo dục',
    sidebarTitle: 'Cùng bạn đến trường',
    sidebarDescription: 'Một vài gợi ý nhỏ cho hành trình học tập mỗi ngày.',
    guides: [
        { title: 'Chọn ngành từ điều bạn yêu thích', description: 'Tìm hiểu bản thân, trải nghiệm nghề và trò chuyện cùng người đi trước.' },
        { title: 'Học chủ động, nghỉ ngơi đúng lúc', description: 'Một kế hoạch vừa sức giúp việc học trở nên bền vững hơn.' },
        { title: 'Kiểm chứng thông tin tuyển sinh', description: 'Luôn đối chiếu với thông báo chính thức của cơ sở đào tạo.' },
    ],
    sidebarNote: 'Gợi ý minh họa, không phải thông báo tuyển sinh chính thức.',
});

export const thoiSuConfig = Object.freeze<CategoryConfig>({
    slug: 'thoi-su', path: routes.thoiSu, title: 'Thời sự',
    pageTitle: 'Thời sự | Tuổi Trẻ — Demo học tập',
    description: 'Dòng chảy tin tức thời sự, cập nhật liên tục.',
    layout: 'thoi-su',
    subcategories: ['Mới nhất', 'Nổi bật', 'Xã hội', 'Phóng sự'],
});

export const theGioiConfig = Object.freeze<CategoryConfig>({
    slug: 'the-gioi', path: routes.theGioi, title: 'Thế giới',
    pageTitle: 'Thế giới | Tuổi Trẻ — Demo học tập',
    description: 'Tin tức quốc tế, bình luận và góc nhìn từ nhiều khu vực.',
    layout: 'magazine',
    subcategories: ['Bình luận', 'Kiều bào', 'Muôn màu', 'Hồ sơ'],
});

export const phapLuatConfig = Object.freeze<CategoryConfig>({
    slug: 'phap-luat', path: routes.phapLuat, title: 'Pháp luật',
    pageTitle: 'Pháp luật | Tuổi Trẻ — Demo học tập',
    description: 'Tin pháp luật, chuyện pháp đình và giải đáp thắc mắc thường gặp.',
    layout: 'magazine',
    subcategories: ['Chuyện pháp đình', 'Tư vấn', 'Pháp lý'],
});
