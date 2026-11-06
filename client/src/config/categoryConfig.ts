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

export const educationConfig = Object.freeze<CategoryConfig>({
    slug: 'giao-duc', path: routes.education, title: 'Giáo dục',
    pageTitle: 'Giáo dục | Tuổi Trẻ — Demo học tập',
    description: 'Góc nhìn về học tập, nhà trường và hành trình trưởng thành.',
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
