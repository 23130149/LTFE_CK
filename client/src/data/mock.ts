import type { Article } from '../types/Article.ts';
import { newsTopics } from './menu.ts';

type NewsFixture = Omit<Article, 'time'> & Required<Pick<Article, 'publishedAt' | 'content' | 'demoViews'>>;

const dateFormat = new Intl.DateTimeFormat('vi-VN', {
    timeZone: 'Asia/Ho_Chi_Minh',
    hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit', year: 'numeric',
});

const fixtures: NewsFixture[] = [
    {
        id: 1, title: 'Công viên tưởng niệm Lê Thị Riêng: Quá đúng thời điểm!',
        sapo: 'Nhìn lại vai trò của công viên Lê Thị Riêng trong sinh hoạt hằng ngày của người dân TP.HCM.',
        zone: 'Văn hóa', publishedAt: '2026-10-31T08:28:00+07:00', demoViews: 12,
        image: '/images/sections/van-hoa.svg',
        content: [
            'Vào buổi sáng, công viên là nơi người dân đi bộ và tập thể dục. Cuối tuần, không gian chung còn là điểm hẹn của nhiều gia đình. Việc chỉnh trang mở ra dịp xem lại cách các lối đi, khoảng cây xanh và khu sinh hoạt phục vụ những nhu cầu khác nhau.',
            'Một không gian tưởng niệm cũng cần giúp khách hiểu câu chuyện gắn với tên gọi. Bảng giới thiệu ngắn, vị trí dễ tiếp cận và chỗ nghỉ chân có thể giúp người đến công viên dừng lại tìm hiểu trong chuyến đi thường ngày.',
        ],
    },
    {
        id: 2, title: 'Từ nghị quyết đến lô trái phiếu đầu tiên: TP.HCM mở cửa đón vốn dài hạn cho hạ tầng',
        sapo: 'Trái phiếu là một trong các kênh được bàn tới khi thành phố tìm nguồn vốn dài hạn.',
        zone: 'Kinh doanh', publishedAt: '2026-10-31T09:28:00+07:00', demoViews: 6,
        image: '/images/real-estate/city.svg', topics: [newsTopics.economy],
        content: [
            'Một dự án hạ tầng thường kéo dài qua nhiều năm, từ chuẩn bị mặt bằng đến thi công và vận hành. Kế hoạch vốn phải tính được nhu cầu theo từng giai đoạn để việc huy động tiền đi cùng tiến độ làm việc.',
            'Trái phiếu là hình thức vay có kỳ hạn. Khi đọc tin về một đợt phát hành, bạn đọc có thể đối chiếu ba thông tin: vốn dành cho hạng mục nào, khi nào đến hạn và cơ quan nào công bố kết quả sử dụng vốn.',
        ],
    },
    {
        id: 3, title: 'Đại biểu Trịnh Xuân An: Cần nghiên cứu, đánh giá lại việc tổ chức kỳ thi tốt nghiệp THPT',
        sapo: 'Một thay đổi về kỳ thi ảnh hưởng trực tiếp đến kế hoạch ôn tập của học sinh và nhà trường.',
        zone: 'Thời sự', publishedAt: '2026-10-31T08:58:00+07:00', demoViews: 9,
        image: '/images/education/classroom.jpg', topics: [newsTopics.assembly],
        content: [
            'Khi thảo luận về kỳ thi tốt nghiệp THPT, một câu hỏi được đặt ra là kỳ thi phục vụ những mục tiêu nào. Với học sinh, lịch thi, cấu trúc đề và quy định xét tốt nghiệp là các thông tin cần có trước khi lập kế hoạch ôn tập.',
            'Việc đánh giá cách tổ chức có thể xem xét khối lượng chuẩn bị của trường, thời gian di chuyển của thí sinh và mức độ rõ ràng của hướng dẫn. Học sinh nên dựa vào thông báo mà nhà trường xác nhận khi điều chỉnh kế hoạch cá nhân.',
        ],
    },
    {
        id: 4, title: 'Lý do khiến Tổng giám đốc Tổng công ty Khoáng sản TKV bị khởi tố',
        sapo: 'Các mốc thông tin cần phân biệt khi đọc bản tin về một vụ việc đang được xử lý.',
        zone: 'Pháp luật', publishedAt: '2026-10-31T08:18:00+07:00', demoViews: 4,
        image: '/images/fact-check/context.svg',
        content: [
            'Khi theo dõi vụ việc, người đọc nên phân biệt thông tin do doanh nghiệp công bố với nội dung trong thông báo của cơ quan có thẩm quyền. Hai nguồn có thể đề cập đến các mốc thời gian và phạm vi khác nhau.',
            'Trình tự theo dõi gồm thời điểm công bố, quyết định tố tụng được nêu và thông tin bổ sung sau đó. Bản tin minh họa này dừng ở cách đọc các mốc công khai của vụ việc.',
        ],
    },
    {
        id: 5, title: 'Chính thức giảm 30% thuế cho doanh nghiệp, hộ kinh doanh',
        sapo: 'Những mục cần đối chiếu trong văn bản trước khi áp dụng một chính sách thuế.',
        zone: 'Kinh doanh', publishedAt: '2026-10-31T08:05:00+07:00', demoViews: 8,
        image: '/images/fact-check/reading.svg', guide: true,
        content: [
            'Mức giảm xuất hiện trong tiêu đề chỉ là một phần của chính sách. Khi đọc văn bản áp dụng, hãy kiểm tra nhóm đối tượng, loại thuế, kỳ tính thuế và thời điểm có hiệu lực.',
            'Phần điều khoản chuyển tiếp và hồ sơ thường nằm ở cuối hướng dẫn. Ghi lại số hiệu văn bản và ngày ban hành để đối chiếu khi có bản cập nhật, hoặc hỏi cơ quan thuế quản lý trực tiếp về trường hợp cụ thể.',
        ],
    },
    {
        id: 6, title: 'Bắt ốc bươu vàng bán tiền triệu: Có được mua bán sinh vật ngoại lai xâm hại?',
        sapo: 'Cách tìm thông tin chính thức khi gặp rao bán một loài sinh vật ngoại lai.',
        zone: 'Thời sự', publishedAt: '2026-10-31T08:04:00+07:00', demoViews: 3,
        image: '/images/fact-check/context.svg',
        content: [
            'Tiêu đề rao bán thường chỉ nêu tên gọi dân gian và giá. Trước khi dựa vào thông tin đó, cần xác định đúng loài và kiểm tra danh mục do cơ quan quản lý công bố.',
            'Nếu gặp sinh vật nghi là loài ngoại lai xâm hại, hãy ghi nhận vị trí và hỏi cơ quan chuyên môn địa phương về cách xử lý. Việc đem sang một ao hoặc kênh khác có thể làm loài phát tán thêm.',
        ],
    },
    {
        id: 7, title: 'Đại học Quốc gia Hà Nội: 3 trường thu học phí vượt quy định',
        sapo: 'Sinh viên có thể kiểm tra các khoản thu bằng thông báo học phí và chứng từ của từng học kỳ.',
        zone: 'Giáo dục', publishedAt: '2026-10-31T08:03:00+07:00', demoViews: 7,
        image: '/images/education/library.jpg', guide: true,
        content: [
            'Khi kiểm tra học phí, sinh viên nên đọc thông báo dành đúng cho chương trình, khóa tuyển và học kỳ của mình. Phiếu thu hoặc biên lai điện tử cho biết số tiền đã nộp và thời điểm giao dịch.',
            'Nếu hai thông tin chênh lệch, gửi câu hỏi kèm mã học kỳ và chứng từ đến bộ phận phụ trách của trường. Giữ lại câu trả lời để có cơ sở đối chiếu nếu trường cập nhật thông báo.',
        ],
    },
    {
        id: 8, title: 'Cầu đi bộ qua sông Sài Gòn: Những điều cần biết',
        sapo: 'Các thông tin người đi bộ cần để lên kế hoạch đến khu vực hai đầu cầu.',
        zone: 'Thời sự', publishedAt: '2026-10-31T08:02:00+07:00', demoViews: 14,
        image: '/images/real-estate/city.svg', guide: true, topics: [newsTopics.walkingBridge],
        content: [
            'Khi xem sơ đồ một cây cầu đi bộ, hãy tìm vị trí lối lên xuống, vỉa hè nối vào cầu và các điểm qua đường gần nhất. Khoảng cách trên bản đồ có thể khác đáng kể so với đoạn đường thực tế phải đi bộ.',
            'Trước chuyến đi, nên kiểm tra tình trạng mở cửa và thông báo thi công hoặc phân luồng. Người đi cùng trẻ nhỏ có thể chọn điểm hẹn dễ nhận biết và dự trù thời gian di chuyển ở cả hai đầu cầu.',
        ],
    },
    {
        id: 9, title: 'TP.HCM miễn phí xe buýt: Người dân cần lưu ý gì?',
        sapo: 'Kiểm tra tuyến, thời gian và phạm vi áp dụng trước khi lên xe.',
        zone: 'Thời sự', publishedAt: '2026-10-31T08:01:00+07:00', demoViews: 13,
        image: '/images/sections/xe.svg', guide: true, topics: [newsTopics.cityBus],
        content: [
            'Một đợt miễn phí xe buýt có thể áp dụng cho các tuyến hoặc khung giờ được nêu trong thông báo. Kiểm tra số tuyến, chiều đi và trạm dừng trước khi rời nhà.',
            'Nếu phải đổi tuyến, hãy kiểm tra điều kiện của từng chặng và giờ chuyến cuối. Nên chuẩn bị phương án thanh toán cho phần hành trình nằm ngoài phạm vi chương trình.',
        ],
    },
    {
        id: 10, title: 'Đọc bản tin El Nino để chuẩn bị cho những ngày nắng nóng',
        sapo: 'Tách dự báo theo mùa khỏi thông tin thời tiết theo ngày khi lên kế hoạch.',
        zone: 'Thời sự', publishedAt: '2026-11-01T07:30:00+07:00', demoViews: 5,
        image: '/images/fact-check/context.svg', guide: true, topics: [newsTopics.weather],
        content: [
            'Bản tin theo mùa mô tả xu hướng trên một vùng rộng trong nhiều tuần hoặc nhiều tháng. Để quyết định có đổi lịch sinh hoạt ngoài trời hôm nay hay không, hãy đọc dự báo theo ngày tại khu vực mình sẽ đến.',
            'Khi có cảnh báo nắng nóng, có thể dời việc ngoài trời sang đầu buổi sáng, chọn đoạn đường có bóng râm và kiểm tra bản tin cập nhật trước khi đi.',
        ],
    },
    {
        id: 11, title: 'Doanh nghiệp chuẩn bị gì cho phiên kết nối tại diễn đàn kinh tế?',
        sapo: 'Một danh sách ngắn giúp cuộc trao đổi với đối tác đi thẳng vào nhu cầu.',
        zone: 'Kinh doanh', publishedAt: '2026-11-02T07:30:00+07:00', demoViews: 2,
        image: '/images/real-estate/planning.svg', topics: [newsTopics.economy],
        content: [
            'Trước một phiên kết nối, doanh nghiệp có thể chuẩn bị phần giới thiệu một trang: sản phẩm hoặc dịch vụ, nhóm khách hàng và loại đối tác đang tìm. Tài liệu ngắn giúp hai bên nhanh chóng quyết định có nên hẹn trao đổi tiếp.',
            'Sau buổi gặp, hãy ghi lại đầu việc, người liên hệ và thời hạn phản hồi. Một tin nhắn theo dõi có câu hỏi cụ thể thường hiệu quả hơn việc gửi lại toàn bộ tài liệu giới thiệu.',
        ],
    },
    {
        id: 12, title: 'Tiếp sức đến trường 2026: Tân sinh viên chuẩn bị hồ sơ hỗ trợ ra sao?',
        sapo: 'Kiểm tra điều kiện, mốc nộp và đầu mối xác nhận ngay khi chương trình mở tiếp nhận.',
        zone: 'Giáo dục', publishedAt: '2026-11-03T07:30:00+07:00', demoViews: 10,
        image: '/images/education/teamwork.jpg', guide: true, topics: [newsTopics.education],
        content: [
            'Tân sinh viên cần đọc thông báo của chương trình để biết đối tượng, thời hạn và cách nộp. Các giấy tờ có thể gồm xác nhận nhập học và tài liệu chứng minh hoàn cảnh theo quy định từng đợt.',
            'Nên lưu bản sao giấy tờ và biên nhận nộp hồ sơ. Nếu thiếu một xác nhận, hỏi đầu mối tiếp nhận xem có thể bổ sung sau hay cần hoàn thành trước hạn.',
        ],
    },
    {
        id: 13, title: 'Một buổi tập bóng đá cho người mới nên bắt đầu từ đâu?',
        sapo: 'Chọn bài tập ngắn, dễ làm lại để làm quen với bóng và nhịp phối hợp.',
        zone: 'Thể thao', publishedAt: '2026-11-04T07:30:00+07:00', demoViews: 4,
        image: '/images/sections/the-thao.svg',
        content: [
            'Buổi đầu có thể bắt đầu với chuyền bóng cự ly ngắn theo cặp và đỡ bóng bằng lòng bàn chân. Chọn khoảng cách mà hai người có thể chuyền đều, rồi tăng dần khi cả hai đã kiểm soát được bóng.',
            'Cuối buổi, thử một bài phối hợp ba người ở tốc độ vừa phải. Người mới nên tập quan sát bạn chơi trước khi nhận bóng để có thêm thời gian chọn hướng chuyền.',
        ],
    },
    {
        id: 14, title: 'Cách theo dõi nội dung thảo luận tại một kỳ họp Quốc hội',
        sapo: 'Dùng lịch làm việc và tài liệu công bố để tra lại diễn biến theo từng phiên.',
        zone: 'Thời sự', publishedAt: '2026-11-05T07:30:00+07:00', demoViews: 6,
        image: '/images/fact-check/reading.svg', topics: [newsTopics.assembly],
        content: [
            'Lịch làm việc giúp xác định vấn đề đang được thảo luận vào phiên nào. Khi đọc bản tóm tắt, chú ý phân biệt ý kiến tại phiên họp, nội dung biểu quyết và văn bản được công bố sau đó.',
            'Với một dự thảo đang được góp ý, nên lưu cả ngày công bố và tên tài liệu. Các bản dự thảo có thể thay đổi giữa các kỳ họp nên mốc thời gian giúp tránh nhầm phiên bản.',
        ],
    },
    {
        id: 15, title: 'Một buổi cuối tuần ở thư viện khu phố',
        sapo: 'Không gian đọc nhỏ giúp người dân gặp nhau qua những cuốn sách quen thuộc.',
        zone: 'Văn hóa', publishedAt: '2026-11-06T07:30:00+07:00', demoViews: 3,
        image: '/images/education/reading.jpg',
        content: [
            'Một góc đọc có thể bắt đầu từ một kệ sách, vài chỗ ngồi và lịch mở cửa cố định. Để người mới dễ tìm, sách có thể chia theo nhóm tuổi hoặc chủ đề thường được hỏi.',
            'Câu lạc bộ đọc sách có thể chọn một truyện ngắn cho buổi gặp đầu tiên. Mỗi người ghi lại một đoạn mình muốn trao đổi để cuộc trò chuyện có điểm bắt đầu chung.',
        ],
    },
    {
        id: 16, title: 'Kiểm tra tin nhắn lạ trước khi bấm vào liên kết',
        sapo: 'Đọc kỹ người gửi, địa chỉ đích và yêu cầu trong tin nhắn.',
        zone: 'Công nghệ', publishedAt: '2026-11-07T07:30:00+07:00', demoViews: 9,
        image: '/images/fact-check/email.svg', guide: true,
        content: [
            'Tin nhắn thúc giục cung cấp mật khẩu hoặc mã xác nhận cần được kiểm tra qua kênh liên hệ chính thức. Người dùng có thể mở ứng dụng mình thường dùng để kiểm tra thông báo.',
            'Nếu đã nhận một tin nhắn đáng ngờ, lưu lại nội dung cần báo cáo và tránh chuyển tiếp liên kết có thể bấm. Nhắc người thân kiểm tra trực tiếp trong ứng dụng hoặc gọi số hỗ trợ đã biết.',
        ],
    },
    {
        id: 17, title: 'Chọn một chuyến đi ngắn cuối tuần bằng phương tiện công cộng',
        sapo: 'Bắt đầu từ điểm đến gần trạm và tính đường về trước khi khởi hành.',
        zone: 'Du lịch', publishedAt: '2026-11-08T07:30:00+07:00', demoViews: 7,
        image: '/images/sections/du-lich.svg',
        content: [
            'Để lên lịch một chuyến đi ngắn, hãy chọn một điểm đến chính và tìm tuyến công cộng đi gần nhất. Ghi lại phần phải đi bộ giữa trạm dừng và điểm đến để tính tổng thời gian.',
            'Kiểm tra lịch chuyến về trước khi chọn giờ khởi hành. Nếu có nhiều người đi cùng, thống nhất điểm gặp và thời gian rời điểm tham quan để mọi người dễ chủ động.',
        ],
    },
];

export const mockNews: Article[] = fixtures.map(article => ({
    ...article,
    time: dateFormat.format(new Date(article.publishedAt)),
}));
