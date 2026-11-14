import type { CategoryArticle } from '../types/category.ts';

const img = (seed: string) => ({ src: `https://picsum.photos/seed/${seed}/720/450`, alt: 'Ảnh minh họa tin kinh doanh' });

export const kinhDoanhNews: CategoryArticle[] = [
    { id: 'kd-01', title: 'Giá cả đầu ngày: Bưởi da xanh, cá tra đồng loạt tăng giá', summary: 'Giá bưởi da xanh xuất khẩu đạt 45.000 đồng/kg, cá tra tăng theo.', section: 'Thị trường', publishedAt: '2026-11-01T07:00:00+07:00', image: img('kd01') },
    { id: 'kd-02', title: 'Chính thức giảm 30% thuế cho doanh nghiệp, hộ kinh doanh', summary: 'Chính sách mới áp dụng cho kỳ tính thuế tiếp theo.', section: 'Chính sách', publishedAt: '2026-11-02T08:13:00+07:00', image: img('kd02') },
    { id: 'kd-03', title: 'Tăng lương tối thiểu vùng từ 1-1-2027, cao nhất tăng tới 390.000 đồng', summary: 'Mức tăng cao nhất áp dụng cho vùng I, từ ngày 1-1-2027.', section: 'Chính sách', publishedAt: '2026-11-03T09:26:00+07:00', image: img('kd03') },
    { id: 'kd-04', title: 'Thành phố mở thêm không gian công cộng ven sông', summary: 'Các tuyến đường đi bộ và công viên mới được quy hoạch dọc bờ sông.', section: 'Thị trường', publishedAt: '2026-11-04T07:39:00+07:00', image: img('kd04') },
    { id: 'kd-05', title: 'Đề xuất những giải pháp mới để giảm ùn tắc vào giờ cao điểm', summary: 'Đề xuất tập trung vào phân luồng và mở rộng vận tải công cộng.', section: 'Chính sách', publishedAt: '2026-11-05T08:52:00+07:00', image: img('kd05') },
    { id: 'kd-06', title: 'Cổ phiếu ngân hàng dẫn dắt thị trường phiên đầu tuần', summary: 'Thanh khoản tăng và nhiều mã vốn hóa lớn đồng loạt đi lên.', section: 'Tài chính', publishedAt: '2026-11-06T09:05:00+07:00', image: img('kd06') },
    { id: 'kd-07', title: 'Doanh nghiệp xuất khẩu tìm hướng đi mới sau biến động thương mại', summary: 'Nhiều công ty đa dạng hóa thị trường để giảm rủi ro.', section: 'Doanh nghiệp', publishedAt: '2026-11-01T07:18:00+07:00', image: img('kd07') },
    { id: 'kd-08', title: 'Đầu tư hạ tầng logistics: cơ hội cho doanh nghiệp địa phương', summary: 'Các cụm kho bãi mới được kỳ vọng kéo chi phí vận chuyển xuống.', section: 'Doanh nghiệp', publishedAt: '2026-11-02T08:31:00+07:00', image: img('kd08') },
];
