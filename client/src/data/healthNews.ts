import type { CategoryArticle } from '../types/category.ts';
import { healthArticlePath } from '../routing/routes.ts';

const images = {
    nutrition: { src: '/images/health/nutrition.svg', alt: 'Tranh minh họa bàn ăn với rau củ và sổ ghi chép' },
    family: { src: '/images/health/family.svg', alt: 'Tranh minh họa người lớn và em bé cùng đọc sách' },
    conversation: { src: '/images/health/conversation.svg', alt: 'Tranh minh họa hai người trò chuyện trong không gian riêng tư' },
    clinic: { src: '/images/health/clinic.svg', alt: 'Tranh minh họa sổ hẹn và góc tiếp đón phòng khám' },
    balance: { src: '/images/health/balance.svg', alt: 'Tranh minh họa góc nghỉ với cây xanh và ánh sáng tự nhiên' },
};

export const healthNews: CategoryArticle[] = [
    {
        id: 'sk-01', path: healthArticlePath('sk-01'),
        title: 'Bữa cơm gia đình: dành thời gian cho những điều giản dị',
        summary: 'Từ việc cùng lên thực đơn đến dọn bàn ăn, một gia đình giả định tìm lại khoảng thời gian trò chuyện trong ngày.',
        section: 'Dinh dưỡng', publishedAt: '2026-11-09T08:30:00+07:00', image: images.nutrition,
        content: [
            'Trong câu chuyện minh họa này, các thành viên cùng viết ra những món mình thích và chia nhau việc chuẩn bị. Cuốn sổ trên bàn bếp lưu lại sở thích, lịch sinh hoạt và những nguyên liệu còn sẵn trong nhà.',
            'Bữa ăn được kể như một sinh hoạt gia đình, không phải thực đơn có tác dụng chữa bệnh. Bài demo không đưa ra khẩu phần, chế độ ăn riêng hay lời khuyên dinh dưỡng cho tình trạng sức khỏe cụ thể.',
        ],
    },
    {
        id: 'sk-02', path: healthArticlePath('sk-02'),
        title: 'Một cuốn sổ nhỏ lưu những câu hỏi của cha mẹ',
        summary: 'Những băn khoăn về sinh hoạt của con được ghi lại để cuộc trao đổi trong buổi hẹn trở nên rõ ràng hơn.',
        section: 'Mẹ & Bé', publishedAt: '2026-11-09T08:00:00+07:00', image: images.family,
        content: [
            'Gia đình trong tình huống giả định dành một trang sổ cho lịch hẹn và một trang cho những điều muốn hỏi. Mỗi người ghi bằng lời của mình, để không bỏ quên câu hỏi khi trò chuyện với nhân viên y tế.',
            'Đây là mô tả cách sắp xếp thông tin trong bản demo. Không có biểu đồ phát triển, đánh giá triệu chứng hay hướng dẫn dùng thuốc cho trẻ trong bài viết.',
        ],
    },
    {
        id: 'sk-03', path: healthArticlePath('sk-03'),
        title: 'Một cuộc trò chuyện bắt đầu từ sự tôn trọng',
        summary: 'Góc nhìn minh họa về lắng nghe, quyền riêng tư và cách đặt câu hỏi khi trao đổi chủ đề sức khỏe giới tính.',
        section: 'Giới tính', publishedAt: '2026-11-09T07:30:00+07:00', image: images.conversation,
        content: [
            'Hai nhân vật giả định thống nhất dành thời gian cho một cuộc trò chuyện riêng. Họ hỏi xem người kia có sẵn sàng chia sẻ, thay vì tự suy đoán hoặc kể lại câu chuyện cho người khác.',
            'Nội dung minh họa tập trung vào cách giao tiếp tôn trọng. Bài viết không đánh giá tình trạng sinh sản, đưa ra chẩn đoán hoặc mô tả một cuộc tư vấn chuyên môn có thật.',
        ],
    },
    {
        id: 'sk-04', path: healthArticlePath('sk-04'),
        title: 'Trước một buổi hẹn: sắp xếp thông tin cần trao đổi',
        summary: 'Một tình huống phòng mạch giả định với giấy hẹn, danh sách câu hỏi và những ghi chép cá nhân.',
        section: 'Phòng mạch', publishedAt: '2026-11-08T16:00:00+07:00', image: images.clinic,
        content: [
            'Nhân vật trong bài đặt giấy hẹn và những tài liệu sẵn có vào cùng một túi hồ sơ. Trên tờ giấy riêng là các câu hỏi muốn được giải thích trong cuộc hẹn, được viết bằng ngôn ngữ dễ hiểu với chính mình.',
            'Phòng khám và nhân vật đều là minh họa. Bài viết không giới thiệu dịch vụ, cam kết kết quả khám hay đưa ra quy trình áp dụng cho mọi cơ sở y tế.',
        ],
    },
    {
        id: 'sk-05', path: healthArticlePath('sk-05'),
        title: 'Đọc một tin sức khỏe: nhìn lại nguồn trước khi chia sẻ',
        summary: 'Góc đọc tin trong bản demo đặt cạnh nhau tên nguồn, ngày đăng và ngữ cảnh của một thông tin.',
        section: 'Biết để khỏe', publishedAt: '2026-11-08T14:30:00+07:00', image: images.balance,
        content: [
            'Trong bài tập minh họa, một nhóm bạn nhận được ảnh chụp tiêu đề nhưng không có đường dẫn. Họ tìm lại nơi xuất bản và đọc nội dung đầy đủ trước khi quyết định có chuyển tiếp hay không.',
            'Không có phát hiện y khoa hay số liệu điều trị được khẳng định trong tình huống này. Mục đích của câu chuyện là làm rõ sự khác nhau giữa một tiêu đề, một nội dung quảng cáo và một bản tin có nguồn.',
        ],
    },
    {
        id: 'sk-06', path: healthArticlePath('sk-06'),
        title: 'Góc bếp gọn hơn từ một danh sách mua sắm',
        summary: 'Một tuần sinh hoạt được kể qua việc xem lại nguyên liệu, ghi nhu cầu và thống nhất việc đi chợ.',
        section: 'Dinh dưỡng', publishedAt: '2026-11-08T10:00:00+07:00', image: images.nutrition,
        content: [
            'Các nhân vật giả định chia danh sách thành những thứ đang có và những thứ dự định mua. Mỗi người bổ sung nhu cầu cho bữa ăn chung, rồi xem lại lịch để tránh chuẩn bị quá nhiều.',
            'Danh sách trong câu chuyện là công cụ sắp xếp sinh hoạt. Nó không phải chế độ ăn được thiết kế cho bệnh lý, độ tuổi hay nhu cầu dinh dưỡng của một người cụ thể.',
        ],
    },
    {
        id: 'sk-07', path: healthArticlePath('sk-07'),
        title: 'Cùng con kể lại một ngày bằng những bức tranh',
        summary: 'Một buổi tối gia đình trong bản demo dành chỗ cho những câu chuyện nhỏ qua màu sắc và nét vẽ.',
        section: 'Mẹ & Bé', publishedAt: '2026-11-08T09:00:00+07:00', image: images.family,
        content: [
            'Em bé trong câu chuyện chọn vẽ chiếc bàn ăn, còn người lớn vẽ góc đọc sách. Mỗi bức tranh trở thành một lời mời kể chuyện, không có chấm điểm hay so sánh với bạn khác.',
            'Hoạt động này được viết như một cảnh sinh hoạt gia đình giả định. Bản demo không dùng tranh vẽ để đánh giá tâm lý, khả năng phát triển hoặc tình trạng sức khỏe của trẻ.',
        ],
    },
    {
        id: 'sk-08', path: healthArticlePath('sk-08'),
        title: 'Không gian riêng tư trong những câu chuyện cá nhân',
        summary: 'Một tình huống minh họa về việc hỏi ý kiến trước khi chia sẻ thông tin nhạy cảm của người khác.',
        section: 'Giới tính', publishedAt: '2026-11-07T16:30:00+07:00', image: images.conversation,
        content: [
            'Nhóm bạn trong bài cân nhắc trước khi đưa một cuộc trò chuyện riêng lên nhóm chung. Họ thống nhất rằng sự thuận tiện của người kể không thay thế cho ý kiến của người có thông tin được nhắc tới.',
            'Bài viết không sử dụng hồ sơ, hình ảnh hay trải nghiệm sức khỏe của người thật. Các nhân vật được tạo cho giao diện đọc tin của đồ án.',
        ],
    },
    {
        id: 'sk-09', path: healthArticlePath('sk-09'),
        title: 'Ghi lại điều chưa rõ sau một cuộc trao đổi',
        summary: 'Cuốn sổ hẹn trong câu chuyện giả định có thêm một cột dành cho những từ ngữ người đọc muốn được giải thích.',
        section: 'Phòng mạch', publishedAt: '2026-11-07T14:00:00+07:00', image: images.clinic,
        content: [
            'Nhân vật ghi lại những từ chưa hiểu bằng đúng cách mình nghe được, rồi để trống phần diễn giải. Thay vì tự điền một kết luận, họ giữ chúng như câu hỏi cần làm rõ trong lần trao đổi tiếp theo.',
            'Tình huống không kèm lời dặn điều trị hay hướng dẫn thay đổi đơn thuốc. Tất cả tài liệu xuất hiện trong tranh và câu chuyện đều là dữ liệu minh họa.',
        ],
    },
    {
        id: 'sk-10', path: healthArticlePath('sk-10'),
        title: 'Một khoảng nghỉ giữa ngày làm việc',
        summary: 'Góc sinh hoạt giả định với cửa sổ, cây xanh và vài phút tạm rời lịch công việc dày đặc.',
        section: 'Biết để khỏe', publishedAt: '2026-11-07T10:30:00+07:00', image: images.balance,
        content: [
            'Trong câu chuyện, một nhóm đồng nghiệp để trống một khoảng thời gian giữa các cuộc họp. Người đọc sách, người ngồi bên cửa sổ; không ai cần biến khoảng nghỉ thành một nhiệm vụ phải hoàn thành.',
            'Đây là một cảnh sinh hoạt tự biên soạn. Bài demo không khẳng định thời lượng nghỉ có tác dụng phòng hoặc điều trị một vấn đề sức khỏe.',
        ],
    },
    {
        id: 'sk-11', path: healthArticlePath('sk-11'),
        title: 'Đằng sau một tấm nhãn thực phẩm',
        summary: 'Bài tập đọc nhãn bao bì giả định giúp phân biệt thông tin sản phẩm với câu chữ quảng cáo.',
        section: 'Dinh dưỡng', publishedAt: '2026-11-07T08:00:00+07:00', image: images.nutrition,
        content: [
            'Một nhóm học tập tự vẽ bao bì không có thương hiệu rồi chia các dòng chữ thành tên sản phẩm, thành phần và thông điệp giới thiệu. Họ nhận ra mỗi phần cung cấp một loại thông tin khác nhau.',
            'Bao bì không đại diện cho hàng hóa thật và không có số liệu dinh dưỡng. Nội dung không xếp hạng thực phẩm hay khẳng định công dụng đối với sức khỏe.',
        ],
    },
    {
        id: 'sk-12', path: healthArticlePath('sk-12'),
        title: 'Chia sẻ việc nhà khi gia đình có thêm thành viên',
        summary: 'Một lịch sinh hoạt minh họa dành chỗ cho người chăm sóc được nói về thời gian và nhu cầu của mình.',
        section: 'Mẹ & Bé', publishedAt: '2026-11-06T17:00:00+07:00', image: images.family,
        content: [
            'Gia đình giả định ghi việc nhà lên các tấm thẻ rồi cùng bàn xem ai có thể đảm nhận. Những việc nhỏ như chuẩn bị đồ dùng và dọn góc đọc sách được nhìn nhận như phần đóng góp cho sinh hoạt chung.',
            'Lịch minh họa không đưa ra thời gian biểu chăm sóc trẻ hoặc hướng dẫn cho giai đoạn sau sinh. Mỗi gia đình thật có hoàn cảnh và nhu cầu khác nhau.',
        ],
    },
    {
        id: 'sk-13', path: healthArticlePath('sk-13'),
        title: 'Đặt câu hỏi mà không gán nhãn người đối diện',
        summary: 'Một tình huống trò chuyện về cơ thể và sự khác biệt được kể bằng ngôn ngữ tôn trọng.',
        section: 'Giới tính', publishedAt: '2026-11-06T15:00:00+07:00', image: images.conversation,
        content: [
            'Trong buổi trao đổi giả định, các nhân vật thử viết lại câu hỏi sao cho không chứa kết luận sẵn về người khác. Người được hỏi có thể lựa chọn trả lời, để dịp khác hoặc giữ riêng câu chuyện của mình.',
            'Nội dung mô phỏng một cách giao tiếp, không phải lời khuyên tâm lý cá nhân hay tiêu chí đánh giá cơ thể. Không có phát ngôn của bác sĩ hoặc chuyên gia được dựng lên trong bài.',
        ],
    },
    {
        id: 'sk-14', path: healthArticlePath('sk-14'),
        title: 'Một tờ giấy hẹn dễ tìm trong túi hồ sơ',
        summary: 'Câu chuyện nhỏ về việc sắp xếp lịch hẹn và tài liệu cá nhân trong bản demo phòng mạch.',
        section: 'Phòng mạch', publishedAt: '2026-11-06T11:00:00+07:00', image: images.clinic,
        content: [
            'Nhân vật chia túi hồ sơ thành phần lịch hẹn và phần giấy tờ đã nhận. Tên, số liên hệ và thông tin cá nhân trong bản phác thảo đều để trống để tranh không chứa dữ liệu của người thật.',
            'Bài viết chỉ mô tả một cách tổ chức vật dụng. Không có yêu cầu thủ tục, mức phí hoặc thông tin đặt khám tại một cơ sở y tế cụ thể.',
        ],
    },
    {
        id: 'sk-15', path: healthArticlePath('sk-15'),
        title: 'Ảnh chụp màn hình chưa kể hết một câu chuyện',
        summary: 'Một bài tập đọc tin minh họa đặt lại câu hỏi về phần nội dung đã bị cắt khỏi bức ảnh.',
        section: 'Biết để khỏe', publishedAt: '2026-11-06T09:00:00+07:00', image: images.balance,
        content: [
            'Tấm ảnh được dùng trong bài tập chỉ còn tiêu đề và một dòng chữ. Nhóm đọc tin đánh dấu những điều chưa biết: thời điểm xuất bản, nguồn ban đầu và phần giải thích ở bên dưới.',
            'Câu chuyện không kiểm chứng một tin y khoa cụ thể và không tạo ra kết luận chuyên môn. Nó minh họa lý do một đoạn trích ngắn có thể chưa đủ ngữ cảnh để chia sẻ.',
        ],
    },
    {
        id: 'sk-16', path: healthArticlePath('sk-16'),
        title: 'Cùng chuẩn bị một bữa ăn, mỗi người một phần việc',
        summary: 'Bàn bếp của gia đình giả định trở thành nơi chia sẻ sở thích và trách nhiệm trong sinh hoạt.',
        section: 'Dinh dưỡng', publishedAt: '2026-11-05T16:00:00+07:00', image: images.nutrition,
        content: [
            'Người lên danh sách, người chuẩn bị bàn và người dọn sau bữa ăn cùng tham gia vào câu chuyện. Gia đình thử phân chia lại công việc để một người không phải đảm nhận toàn bộ.',
            'Bản demo kể về sự phối hợp trong sinh hoạt, không hướng dẫn chế biến hay bảo quản thực phẩm theo tiêu chuẩn y tế. Tranh không quảng bá sản phẩm hoặc thực phẩm bổ sung.',
        ],
    },
    {
        id: 'sk-17', path: healthArticlePath('sk-17'),
        title: 'Góc đọc sách có cả tiếng nói của con',
        summary: 'Một gia đình minh họa cùng chọn sách và dành chỗ cho những câu hỏi ngây ngô trong giờ đọc.',
        section: 'Mẹ & Bé', publishedAt: '2026-11-05T14:00:00+07:00', image: images.family,
        content: [
            'Em bé trong bài chọn cuốn có bức tranh mình thích rồi kể một câu chuyện khác với dòng chữ. Người lớn lắng nghe và cùng đặt tên cho các nhân vật do con tưởng tượng ra.',
            'Đây là cảnh sinh hoạt sáng tác cho đồ án. Bài không đặt mốc phát triển, đo khả năng đọc hoặc hứa hẹn tác dụng đối với sức khỏe trẻ em.',
        ],
    },
    {
        id: 'sk-18', path: healthArticlePath('sk-18'),
        title: 'Khi một câu hỏi được giữ lại cho cuộc trao đổi riêng',
        summary: 'Một nhân vật giả định chọn cách ghi câu hỏi thay vì chia sẻ điều khó nói trước đám đông.',
        section: 'Giới tính', publishedAt: '2026-11-05T11:00:00+07:00', image: images.conversation,
        content: [
            'Nhân vật có một câu hỏi cá nhân nhưng chưa muốn kể trong nhóm. Việc ghi lại giúp họ tự chọn thời điểm và người mình muốn trao đổi, thay vì bị thúc ép phải nói ngay.',
            'Bài viết giữ chủ đề ở mức giao tiếp và quyền riêng tư. Không có chẩn đoán, nội dung điều trị hay lời kể được gán cho một bệnh nhân thật.',
        ],
    },
    {
        id: 'sk-19', path: healthArticlePath('sk-19'),
        title: 'Góc tiếp đón được kể qua một sơ đồ minh họa',
        summary: 'Bản vẽ giả định về nơi nhận thông tin, chỗ ngồi và bảng hướng dẫn trong một không gian phòng mạch.',
        section: 'Phòng mạch', publishedAt: '2026-11-05T09:00:00+07:00', image: images.clinic,
        content: [
            'Bản phác thảo của nhóm thiết kế đặt quầy tiếp đón cạnh bảng hướng dẫn và một hàng ghế. Các vị trí chỉ giúp kể câu chuyện về trải nghiệm tìm đường trong một không gian giả định.',
            'Không có địa chỉ, số điện thoại hoặc dịch vụ khám thật gắn với sơ đồ. Bài demo không phải hướng dẫn vận hành hay thiết kế cơ sở khám chữa bệnh.',
        ],
    },
    {
        id: 'sk-20', path: healthArticlePath('sk-20'),
        title: 'Tách nội dung quảng cáo khỏi câu chuyện sức khỏe',
        summary: 'Một trang đọc tin giả định dành nhãn rõ ràng cho nội dung giới thiệu sản phẩm và nội dung biên tập.',
        section: 'Biết để khỏe', publishedAt: '2026-11-04T16:00:00+07:00', image: images.balance,
        content: [
            'Trong bài tập thiết kế trang tin, nhóm đặt nhãn cho một khối quảng cáo giả định rồi so sánh với khối bài viết. Các dòng chữ được sáng tác để xem người đọc có nhận ra mục đích của từng vùng hay không.',
            'Không có sản phẩm, công dụng điều trị hay lời chứng thực nào được giới thiệu. Toàn bộ ví dụ nhằm thể hiện cách trình bày nội dung minh bạch trong giao diện của đồ án.',
        ],
    },
];
