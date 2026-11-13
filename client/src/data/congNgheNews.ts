import type { CategoryArticle } from '../types/category.ts';

const img = (seed: string) => ({ src: `https://picsum.photos/seed/${seed}/720/450`, alt: 'Ảnh minh họa tin công nghệ' });

export const congNgheNews: CategoryArticle[] = [
    { id: 'cn-01', title: 'Trí tuệ nhân tạo vào trường học: lợi ích và rủi ro', summary: 'Nhiều trường thử nghiệm công cụ AI hỗ trợ học tập và chấm bài.', section: 'Trí tuệ nhân tạo', publishedAt: '2026-11-01T07:00:00+07:00', image: img('cn01') },
    { id: 'cn-02', title: 'Ứng dụng định danh điện tử được nâng cấp', summary: 'Người dùng có thể xác thực nhanh hơn trên thiết bị di động.', section: 'Chuyển đổi số', publishedAt: '2026-11-02T08:13:00+07:00', image: img('cn02') },
    { id: 'cn-03', title: 'Startup Việt gọi vốn thành công vòng hạt giống', summary: 'Sản phẩm tập trung vào giải pháp thanh toán cho doanh nghiệp nhỏ.', section: 'Sản phẩm mới', publishedAt: '2026-11-03T09:26:00+07:00', image: img('cn03') },
    { id: 'cn-04', title: 'Thiết bị đeo thông minh tăng trưởng mạnh trong quý III', summary: 'Đồng hồ và vòng đeo tay chiếm phần lớn doanh số.', section: 'Sản phẩm mới', publishedAt: '2026-11-04T07:39:00+07:00', image: img('cn04') },
    { id: 'cn-05', title: 'Cảnh báo lừa đảo qua tin nhắn giả mạo ngân hàng', summary: 'Người dân nên kiểm tra kỹ đường dẫn trước khi nhập thông tin.', section: 'An toàn thông tin', publishedAt: '2026-11-05T08:52:00+07:00', image: img('cn05') },
    { id: 'cn-06', title: 'Trung tâm dữ liệu mới được xây dựng tại miền Nam', summary: 'Dự án kỳ vọng hỗ trợ điện toán đám mây cho khu vực.', section: 'Chuyển đổi số', publishedAt: '2026-11-06T09:05:00+07:00', image: img('cn06') },
    { id: 'cn-07', title: 'Xe điện tự lái thử nghiệm trên một số tuyến đường', summary: 'Thử nghiệm diễn ra trong điều kiện kiểm soát và có người giám sát.', section: 'Trí tuệ nhân tạo', publishedAt: '2026-11-01T07:18:00+07:00', image: img('cn07') },
    { id: 'cn-08', title: 'Chuyển đổi số ngành y tế: khám chữa bệnh từ xa', summary: 'Hồ sơ bệnh án điện tử giúp bệnh nhân không phải mang giấy tờ.', section: 'Chuyển đổi số', publishedAt: '2026-11-02T08:31:00+07:00', image: img('cn08') },
];
