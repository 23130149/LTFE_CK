import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

const img = (seed, w = 456, h = 285) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

// 4 tin lớn khu "focus"
const focus = [
    { id: 1, title: 'Công viên tưởng niệm Lê Thị Riêng: Quá đúng thời điểm!',
        sapo: 'Rất nhiều nghệ sĩ đồng tình với việc TP.HCM sẽ thực hiện công trình cải tạo, chỉnh trang công viên văn hóa Lê Thị Riêng thành công viên tưởng niệm.',
        zone: 'Văn hóa', time: '08:28 31/10/2026', image: img('tt1') },
    { id: 2, title: 'Từ nghị quyết đến lô trái phiếu đầu tiên: TP.HCM mở cửa đón vốn dài hạn cho hạ tầng',
        sapo: 'TP.HCM đang mở thêm hướng huy động vốn dài hạn cho phát triển hạ tầng, thay vì chủ yếu dựa vào ngân sách.',
        zone: 'Kinh doanh', time: '09:28 31/10/2026', image: img('tt2', 217, 136) },
    { id: 3, title: 'Đại biểu Trịnh Xuân An: Cần nghiên cứu, đánh giá lại việc tổ chức kỳ thi tốt nghiệp THPT hiện nay',
        sapo: 'Không thể để mỗi mùa thi đến, học sinh, phụ huynh lại thấp thỏm chờ quy định mới.',
        zone: 'Thời sự', time: '08:58 31/10/2026', image: img('tt3', 217, 136) },
    { id: 4, title: 'Lý do khiến Tổng giám đốc Tổng công ty Khoáng sản TKV bị khởi tố',
        sapo: 'Tổng công ty Khoáng sản TKV công bố thông tin về việc Tổng giám đốc bị khởi tố.',
        zone: 'Doanh nghiệp niêm yết', time: '08:18 31/10/2026', image: img('tt4', 217, 136) },
];

// 5 tin tiêu đề ở cột trái
const side = [
    'Chính thức giảm 30% thuế cho doanh nghiệp, hộ kinh doanh',
    'Bắt ốc bươu vàng bán tiền triệu: Có được mua bán sinh vật ngoại lai xâm hại?',
    'Đại học Quốc gia Hà Nội: 3 trường thu học phí vượt quy định, 8 trường trích thiếu 94 tỉ quỹ học bổng',
    'Cầu đi bộ qua sông Sài Gòn: Những điều cần biết',
    'TP.HCM miễn phí xe buýt: Người dân cần lưu ý gì?',
].map((title, i) => ({ id: 5 + i, title, sapo: '', zone: 'Thời sự', time: '08:00 31/10/2026', image: '' }));

// Danh sách tin phía dưới
const zones = ['Thời sự', 'Kinh doanh', 'Giáo dục', 'Thể thao', 'Pháp luật', 'Văn hóa', 'Công nghệ', 'Du lịch'];
const more = Array.from({ length: 8 }, (_, i) => ({
    id: 10 + i,
    title: `Tiêu đề bài viết mẫu số ${i + 1}`,
    sapo: 'Đoạn sapo mô tả ngắn cho bài viết, bạn thay bằng dữ liệu của mình.',
    zone: zones[i % zones.length],
    time: '07:30 31/10/2026',
    image: img(`more${i}`, 240, 150),
}));

const news = [...focus, ...side, ...more];

app.get('/api/news', (req, res) => res.json(news));
app.listen(4000, () => console.log('API http://localhost:4000'));