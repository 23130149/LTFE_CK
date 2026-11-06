import type { CategoryArticle } from '../types/category.ts';
const images = {
    classroom: { src: '/images/education/classroom.jpg', alt: 'Học sinh đọc sách trong lớp học đầy ánh sáng' },
    reading: { src: '/images/education/reading.jpg', alt: 'Nhóm học sinh cùng đọc sách trong thư viện' },
    teamwork: { src: '/images/education/teamwork.jpg', alt: 'Sinh viên trao đổi bài học bên sách và máy tính' },
    library: { src: '/images/education/library.jpg', alt: 'Các bạn trẻ học tập trong không gian thư viện' },
};

export const educationNews: CategoryArticle[] = [
    { id: 'edu-01', title: 'Khi lớp học mở ra những cách học mới', summary: 'Từ một câu hỏi nhỏ đến dự án của cả lớp, việc học trở nên gần gũi hơn khi học sinh được tự khám phá và cùng nhau tìm lời giải.', section: 'Nhịp sống học đường', publishedAt: '2026-11-03T08:30:00+07:00', image: images.classroom },
    { id: 'edu-02', title: 'Chọn ngành học: bắt đầu từ sự hiểu mình', summary: 'Một buổi trò chuyện hướng nghiệp giúp học sinh nhận diện sở thích và tìm hiểu những lựa chọn sau phổ thông.', section: 'Tuyển sinh', publishedAt: '2026-11-03T08:15:00+07:00', image: images.teamwork },
    { id: 'edu-03', title: 'Một góc thư viện, nhiều thế giới để khám phá', summary: 'Những giờ đọc sách cùng bạn bè nuôi dưỡng thói quen đặt câu hỏi và chia sẻ điều vừa học được.', section: 'Nhịp sống học đường', publishedAt: '2026-11-03T08:00:00+07:00', image: images.reading },
    { id: 'edu-04', title: 'Người thầy kiên nhẫn với từng câu hỏi', summary: 'Không chỉ giảng bài, thầy cô còn là người khích lệ học trò thử lại sau mỗi lần chưa thành công.', section: 'Chân dung nhà giáo', publishedAt: '2026-11-03T07:45:00+07:00', image: images.library },
    { id: 'edu-05', title: 'Chuẩn bị hồ sơ học tập: từng bước nhỏ để tự tin hơn', summary: 'Sắp xếp giấy tờ, ghi lại hoạt động và đọc kỹ yêu cầu là những bước đầu cho một kế hoạch học tập có chủ đích.', section: 'Tuyển sinh', publishedAt: '2026-11-02T17:00:00+07:00', image: images.teamwork },
    { id: 'edu-06', title: 'Câu lạc bộ đọc sách kết nối những người bạn mới', summary: 'Một cuốn sách có thể trở thành điểm khởi đầu cho cuộc trò chuyện giữa những học sinh chưa từng quen biết.', section: 'Nhịp sống học đường', publishedAt: '2026-11-02T16:30:00+07:00', image: images.reading },
    { id: 'edu-07', title: 'Hành trang du học không chỉ có ngoại ngữ', summary: 'Kỹ năng tự chăm sóc, quản lý chi tiêu và tìm kiếm hỗ trợ cũng cần được chuẩn bị trước một hành trình xa nhà.', section: 'Du học', publishedAt: '2026-11-02T15:20:00+07:00', image: images.library },
    { id: 'edu-08', title: 'Để mỗi học sinh đều có cơ hội lên tiếng', summary: 'Những hoạt động nhóm nhỏ tạo thêm không gian cho học sinh chia sẻ ý tưởng theo cách riêng của mình.', section: 'Câu chuyện giáo dục', publishedAt: '2026-11-02T14:00:00+07:00', image: images.classroom },
    { id: 'edu-09', title: 'Cô giáo và những buổi học từ khu vườn nhỏ', summary: 'Quan sát một chiếc lá, ghi lại sự thay đổi của cây giúp kiến thức khoa học trở nên sinh động.', section: 'Chân dung nhà giáo', publishedAt: '2026-11-02T11:30:00+07:00', image: images.classroom },
    { id: 'edu-10', title: 'Tìm học bổng với một kế hoạch vừa sức', summary: 'Thay vì gửi hồ sơ vội vàng, người học có thể bắt đầu bằng danh sách tiêu chí và lịch chuẩn bị phù hợp.', section: 'Du học', publishedAt: '2026-11-02T10:15:00+07:00', image: images.teamwork },
    { id: 'edu-11', title: 'Học cách kiểm chứng thông tin ngay từ lớp học', summary: 'So sánh nhiều nguồn và đặt câu hỏi về bằng chứng giúp học sinh xây dựng thói quen tiếp nhận thông tin cẩn trọng.', section: 'Câu chuyện giáo dục', publishedAt: '2026-11-02T09:00:00+07:00', image: images.library },
    { id: 'edu-12', title: 'Ngày hội hướng nghiệp: thử trước khi chọn', summary: 'Trải nghiệm công việc qua dự án nhỏ là một cách để học sinh hiểu rõ hơn điều mình muốn theo đuổi.', section: 'Tuyển sinh', publishedAt: '2026-11-01T16:45:00+07:00', image: images.teamwork },
    { id: 'edu-13', title: 'Bữa trưa ở trường và những câu chuyện sẻ chia', summary: 'Những cuộc trò chuyện giản dị trong giờ nghỉ góp phần tạo nên một môi trường học tập thân thiện.', section: 'Nhịp sống học đường', publishedAt: '2026-11-01T14:30:00+07:00', image: images.reading },
    { id: 'edu-14', title: 'Thầy cô cùng học với công nghệ mới', summary: 'Một nhóm giáo viên chia sẻ cách lựa chọn công cụ số phù hợp, giữ sự tương tác với học sinh ở trung tâm.', section: 'Chân dung nhà giáo', publishedAt: '2026-11-01T10:00:00+07:00', image: images.library },
    { id: 'edu-15', title: 'Làm quen môi trường học tập đa văn hóa', summary: 'Lắng nghe, tôn trọng khác biệt và chủ động hỏi giúp người học kết nối tốt hơn trong một cộng đồng mới.', section: 'Du học', publishedAt: '2026-10-31T15:00:00+07:00', image: images.teamwork },
    { id: 'edu-16', title: 'Một lời động viên có thể thay đổi buổi học', summary: 'Nhìn nhận nỗ lực thay vì chỉ nhìn điểm số giúp học sinh mạnh dạn tiếp tục thử sức với điều mới.', section: 'Câu chuyện giáo dục', publishedAt: '2026-10-31T09:30:00+07:00', image: images.classroom },
];
