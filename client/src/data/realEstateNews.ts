import type { CategoryArticle, CategoryImageData } from '../types/category.ts';
import { realEstateArticlePath } from '../routing/routes.ts';

const images = {
    city: { src: '/images/real-estate/city.svg', alt: 'Minh họa các tòa nhà bên tuyến đường và dải cây xanh đô thị' },
    home: { src: '/images/real-estate/home.svg', alt: 'Minh họa ngôi nhà có sân vườn và ban công đón ánh sáng' },
    apartments: { src: '/images/real-estate/apartments.svg', alt: 'Minh họa khu căn hộ với ban công và không gian chung' },
    planning: { src: '/images/real-estate/planning.svg', alt: 'Minh họa bản vẽ mặt bằng nhà ở và dụng cụ đo đạc' },
} satisfies Record<string, CategoryImageData>;

type DemoStory = Pick<CategoryArticle, 'title' | 'summary' | 'section'> & {
    illustration: keyof typeof images;
    detail: string;
};

const stories: DemoStory[] = [
    { title: 'Tìm chốn an cư: nhìn xa hơn diện tích một căn nhà', section: 'Thị trường', illustration: 'city',
        summary: 'Kết nối giao thông, tiện ích và khoảng xanh là những góc nhìn trong câu chuyện lựa chọn nơi ở của bản demo.',
        detail: 'Trong tình huống minh họa, một gia đình so sánh hai khu ở bằng lịch sinh hoạt mỗi ngày: đường đi làm, thời gian đưa trẻ đến trường và khoảng cách đến công viên. Bảng so sánh giúp họ mô tả nhu cầu trước khi xem từng căn nhà.' },
    { title: 'Mua căn hộ lần đầu: lập bảng chi phí trước khi quyết định', section: 'Hỏi đáp', illustration: 'apartments',
        summary: 'Không chỉ có giá mua, kế hoạch an cư còn cần tính đến chi phí hoàn thiện, quản lý và khoản dự phòng.',
        detail: 'Ví dụ học tập chia ngân sách thành các nhóm: khoản mua nhà, nội thất, chi phí sinh hoạt và tiền dự phòng. Không có giá bán, lãi suất hay lời mời giao dịch nào được đưa ra trong tình huống này.' },
    { title: 'Đọc thông tin quy hoạch: cần phân biệt bản đồ và lời giới thiệu', section: 'Chính sách', illustration: 'planning',
        summary: 'Một bản vẽ quảng bá chưa đủ để xác định thông tin quy hoạch của khu đất mà người mua đang tìm hiểu.',
        detail: 'Bài minh họa đặt hai tài liệu cạnh nhau để người đọc nhận ra sự khác biệt về đơn vị phát hành, ngày cập nhật và phạm vi thông tin. Khi có nhu cầu thực tế, người đọc cần đối chiếu tại cơ quan có thẩm quyền.' },
    { title: 'Khoảng xanh trong khu ở: từ bản vẽ đến trải nghiệm hằng ngày', section: 'Dự án', illustration: 'home',
        summary: 'Mô hình khu ở giả định đặt lối đi bộ, bóng mát và sân sinh hoạt ở trung tâm thiết kế.',
        detail: 'Đồ án minh họa một khu ở không có địa chỉ thương mại hay chủ đầu tư thật. Các ý tưởng được dùng để thảo luận cách bố trí đường đi, ghế nghỉ và khoảng cách giữa nhà ở với không gian công cộng.' },
    { title: 'Đi xem nhà thuê: ghi lại những gì ngoài mức giá', section: 'Thị trường', illustration: 'home',
        summary: 'Ánh sáng, thông gió, tiếng ồn và đường đi là các tiêu chí để so sánh những lựa chọn thuê nhà.',
        detail: 'Nhân vật giả định trong bài thử đi từ căn nhà đến nơi làm việc vào nhiều khung giờ. Họ ghi nhận hiện trạng phòng và các khoản chi được trao đổi, thay vì chỉ lưu mức thuê trên tin giới thiệu.' },
    { title: 'Đọc bản vẽ mặt bằng căn hộ từ đâu?', section: 'Hỏi đáp', illustration: 'planning',
        summary: 'Bắt đầu từ cửa vào, hướng mở cửa và cách kết nối các phòng để hình dung một ngày sinh hoạt.',
        detail: 'Với mặt bằng giả định, người đọc có thể đánh dấu lối di chuyển từ bếp đến bàn ăn và từ phòng ngủ đến ban công. Đây là bài tập đọc không gian, không phải bản vẽ thi công hay hồ sơ pháp lý.' },
    { title: 'Thông tin nhà ở xã hội: kiểm tra nguồn trước khi chia sẻ', section: 'Chính sách', illustration: 'apartments',
        summary: 'Tình huống demo nhắc người đọc tìm thông báo chính thức thay vì chuyển tiếp thông tin chưa rõ nguồn.',
        detail: 'Ví dụ không đưa ra điều kiện hưởng chính sách, thời hạn nộp hay danh sách dự án. Với hồ sơ thực tế, người đọc cần xem thông báo đang có hiệu lực của cơ quan phụ trách và đơn vị tiếp nhận.' },
    { title: 'Một khu căn hộ giả định ưu tiên đường đi bộ', section: 'Dự án', illustration: 'apartments',
        summary: 'Lối đi liên tục và điểm nghỉ có mái che giúp phác họa một không gian chung dễ tiếp cận.',
        detail: 'Mô hình học tập tách đường đi bộ khỏi vị trí xe ra vào và nối sân chơi với sảnh căn hộ. Bài viết chỉ giới thiệu ý tưởng thiết kế, không mô tả một dự án đang mở bán.' },
    { title: 'So sánh nơi ở bằng thời gian di chuyển', section: 'Thị trường', illustration: 'city',
        summary: 'Khoảng cách trên bản đồ chỉ là bước đầu; trải nghiệm đi lại giúp bổ sung bức tranh sinh hoạt.',
        detail: 'Bảng so sánh của hộ gia đình giả định có thêm cột thời gian di chuyển, phương tiện và khả năng tiếp cận dịch vụ. Không có số liệu thị trường hay dự báo giá nào được suy ra từ ví dụ.' },
    { title: 'Bàn giao căn hộ: chuẩn bị danh sách ghi nhận hiện trạng', section: 'Hỏi đáp', illustration: 'apartments',
        summary: 'Ghi chép theo từng phòng giúp buổi kiểm tra hiện trạng có trình tự và dễ đối chiếu hơn.',
        detail: 'Trong bài tập, người xem lần lượt ghi nhận bề mặt tường, cửa, thiết bị và tài liệu được cung cấp. Nếu phát sinh vấn đề thực tế, nội dung cần được đối chiếu với thỏa thuận và hướng dẫn chuyên môn phù hợp.' },
    { title: 'Phân biệt thông tin dự thảo và quy định đã ban hành', section: 'Chính sách', illustration: 'planning',
        summary: 'Ngày công bố, cơ quan ban hành và tình trạng hiệu lực là những chi tiết cần đọc trong tài liệu.',
        detail: 'Hai văn bản hư cấu được dùng trong ví dụ: một bản lấy ý kiến và một tài liệu hướng dẫn đã công bố. Bài không trích dẫn hay khẳng định hiệu lực của bất kỳ quy định nhà đất cụ thể nào.' },
    { title: 'Cải tạo khu ở cũ: lắng nghe nhu cầu của cư dân', section: 'Dự án', illustration: 'city',
        summary: 'Tình huống thiết kế tập trung vào chiếu sáng, sân chung và các lối tiếp cận trong khu dân cư.',
        detail: 'Nhóm thiết kế giả định thu thập mong muốn về chỗ nghỉ chân và lối đi thông thoáng trước khi phác thảo phương án. Ví dụ không liên quan đến quyết định cải tạo hay di dời tại địa phương cụ thể.' },
    { title: 'Nhà nhỏ và bài toán dành chỗ cho ánh sáng', section: 'Thị trường', illustration: 'home',
        summary: 'Một không gian vừa đủ có thể được nhìn từ cách tổ chức sinh hoạt và khả năng thông gió.',
        detail: 'Căn nhà trong hình chỉ là minh họa. Câu chuyện gợi mở việc xem xét vị trí đồ dùng, khoảng mở và nhu cầu riêng của từng người khi lập danh sách tiêu chí về nơi ở.' },
    { title: 'Thuê nhà chung: trao đổi trước về không gian và chi phí', section: 'Hỏi đáp', illustration: 'home',
        summary: 'Thống nhất cách dùng khu vực chung và ghi rõ các khoản chi giúp việc trao đổi dễ theo dõi.',
        detail: 'Nhóm bạn giả định lập một danh sách câu hỏi về giờ sinh hoạt, thiết bị dùng chung và cách ghi nhận thanh toán. Ví dụ không thay thế hợp đồng hoặc ý kiến tư vấn cho một giao dịch thật.' },
    { title: 'Hồ sơ đất đai: sắp xếp bản sao và ghi chú để dễ đối chiếu', section: 'Chính sách', illustration: 'planning',
        summary: 'Phân loại tài liệu theo nguồn và ngày nhận là cách tổ chức thông tin trong tình huống học tập.',
        detail: 'Bài demo không xác định bộ hồ sơ bắt buộc cho một thủ tục cụ thể. Người đọc có thể dùng ví dụ để hình dung cách lưu thông tin, sau đó tra cứu yêu cầu thực tế ở cơ quan tiếp nhận.' },
    { title: 'Thiết kế khu ở gắn với điểm dừng giao thông công cộng', section: 'Dự án', illustration: 'city',
        summary: 'Đồ án giả định kết nối sảnh nhà, vỉa hè và điểm dừng bằng một tuyến đi bộ ngắn, dễ nhận biết.',
        detail: 'Sơ đồ được xây dựng để thảo luận cách tiếp cận giao thông trong khu ở. Không có tuyến đường, mốc tiến độ, quyết định đầu tư hay thông tin quy hoạch thực tế được công bố trong bài.' },
    { title: 'Khi nhu cầu ở thay đổi theo từng giai đoạn cuộc sống', section: 'Thị trường', illustration: 'apartments',
        summary: 'Nơi ở cho một người, gia đình có trẻ nhỏ hay người lớn tuổi có thể cần những tiêu chí khác nhau.',
        detail: 'Ba nhân vật hư cấu cùng xem một căn hộ nhưng sắp xếp mức ưu tiên khác nhau. Câu chuyện nhấn mạnh việc mô tả nhu cầu cá nhân, không xếp hạng hay quảng bá một sản phẩm bất động sản.' },
    { title: 'Xem ảnh nhà trực tuyến: nên hỏi thêm điều gì?', section: 'Hỏi đáp', illustration: 'home',
        summary: 'Ảnh giúp hình dung ban đầu, còn hiện trạng và thông tin đầy đủ cần được kiểm tra qua trao đổi cụ thể.',
        detail: 'Tình huống học tập gợi ý ghi lại câu hỏi về thời điểm chụp, góc chụp và phần không gian chưa xuất hiện. Hình ảnh trên website này là minh họa tự tạo, không phải ảnh của một căn nhà có thật.' },
    { title: 'Tra cứu thủ tục nhà đất: lưu cả ngày cập nhật thông tin', section: 'Chính sách', illustration: 'planning',
        summary: 'Một đường dẫn đi kèm tên cơ quan và ngày tra cứu giúp người đọc quay lại kiểm chứng khi cần.',
        detail: 'Ví dụ dùng phiếu ghi chú trống, không đưa mức phí, thời hạn giải quyết hay điều kiện pháp lý. Thông tin thủ tục thật cần được xác nhận trên kênh chính thức vào thời điểm thực hiện.' },
    { title: 'Sân chung đa thế hệ trong mô hình khu dân cư', section: 'Dự án', illustration: 'apartments',
        summary: 'Một khoảng sân có thể gợi mở nhiều cách sử dụng khi thiết kế quan tâm đến các nhóm cư dân.',
        detail: 'Phương án minh họa bố trí chỗ ngồi có bóng mát gần lối đi và khoảng sinh hoạt mở. Đây là ý tưởng trong đồ án, không phải tiện ích đã xây dựng hay cam kết của chủ đầu tư.' },
];

export const realEstateNews: CategoryArticle[] = stories.map((story, index) => {
    const id = `nd-${String(index + 1).padStart(2, '0')}`;
    return {
        id, path: realEstateArticlePath(id), title: story.title,
        summary: story.summary, section: story.section, image: images[story.illustration],
        publishedAt: `2026-11-06T08:${String(59 - index).padStart(2, '0')}:00+07:00`,
        content: [story.detail, 'Nội dung được biên soạn riêng cho bản demo học tập. Nhân vật, mô hình và thời gian đăng là minh họa; bài viết không phải bản tin, tư vấn pháp lý hoặc thông tin giao dịch bất động sản.'],
    };
});
