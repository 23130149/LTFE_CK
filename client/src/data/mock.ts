import type { Article } from '../types/Article.ts';
const img = (seed: string, w = 456, h = 285) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

const focus: Article[] = [
    { id: 1, title: 'Công viên tưởng niệm Lê Thị Riêng: Quá đúng thời điểm!',
      sapo: 'Rất nhiều nghệ sĩ đồng tình với việc TP.HCM sẽ thực hiện công trình cải tạo, chỉnh trang công viên văn hóa Lê Thị Riêng thành công viên tưởng niệm.',
      zone: 'Văn hóa', time: '08:28 31/10/2026', image: img('tt1') },
    { id: 2, title: 'Từ nghị quyết đến lô trái phiếu đầu tiên: TP.HCM mở cửa đón vốn dài hạn cho hạ tầng',
      sapo: 'TP.HCM đang mở thêm hướng huy động vốn dài hạn cho phát triển hạ tầng.',
      zone: 'Kinh doanh', time: '09:28 31/10/2026', image: img('tt2', 217, 136) },
    { id: 3, title: 'Đại biểu Trịnh Xuân An: Cần nghiên cứu, đánh giá lại việc tổ chức kỳ thi tốt nghiệp THPT',
      sapo: 'Không thể để mỗi mùa thi đến, học sinh, phụ huynh lại thấp thỏm chờ quy định mới.',
      zone: 'Thời sự', time: '08:58 31/10/2026', image: img('tt3', 217, 136) },
    { id: 4, title: 'Lý do khiến Tổng giám đốc Tổng công ty Khoáng sản TKV bị khởi tố',
      sapo: 'Tổng công ty Khoáng sản TKV công bố thông tin về việc Tổng giám đốc bị khởi tố.',
      zone: 'Doanh nghiệp niêm yết', time: '08:18 31/10/2026', image: img('tt4', 217, 136) },
];

const side = [
    'Chính thức giảm 30% thuế cho doanh nghiệp, hộ kinh doanh',
    'Bắt ốc bươu vàng bán tiền triệu: Có được mua bán sinh vật ngoại lai xâm hại?',
    'Đại học Quốc gia Hà Nội: 3 trường thu học phí vượt quy định',
    'Cầu đi bộ qua sông Sài Gòn: Những điều cần biết',
    'TP.HCM miễn phí xe buýt: Người dân cần lưu ý gì?',
].map((title, i): Article => ({ id: 5 + i, title, sapo: '', zone: 'Thời sự', time: '08:00 31/10/2026', image: img(`side${i}`, 240, 150) }));

const zones = ['Thời sự', 'Kinh doanh', 'Giáo dục', 'Thể thao', 'Pháp luật', 'Văn hóa', 'Công nghệ', 'Du lịch'];
const more = Array.from({ length: 8 }, (_, i): Article => ({
    id: 10 + i,
    title: `Tiêu đề bài viết mẫu số ${i + 1}`,
    sapo: 'Đoạn sapo mô tả ngắn cho bài viết.',
    zone: zones[i % zones.length],
    time: '07:30 31/10/2026',
    image: img(`more${i}`, 240, 150),
}));

export const mockNews: Article[] = [...focus, ...side, ...more];
