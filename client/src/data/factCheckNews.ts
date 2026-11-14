import type { CategoryArticle } from '../types/category.ts';
import { factCheckArticlePath } from '../routing/routes.ts';

const images = {
    email: { src: '/images/fact-check/email.svg', alt: 'Tranh minh họa phong thư, đường dẫn và kính lúp trên bàn' },
    website: { src: '/images/fact-check/website.svg', alt: 'Tranh minh họa cửa sổ trình duyệt và sổ ghi địa chỉ' },
    context: { src: '/images/fact-check/context.svg', alt: 'Tranh minh họa hai khung hình và dòng thời gian để đối chiếu ngữ cảnh' },
    reading: { src: '/images/fact-check/reading.svg', alt: 'Tranh minh họa các trang tài liệu, ghi chú và dấu hỏi' },
};

export const factCheckNews: CategoryArticle[] = [
    {
        id: 'gt-01', path: factCheckArticlePath('gt-01'),
        title: 'Một email thúc giục hành động: dừng lại để đọc kỹ',
        summary: 'Trong tình huống giả định, người nhận chưa mở đường dẫn mà ghi lại những điểm cần đối chiếu trong thư.',
        section: 'Chống tin giả, tin lừa đảo', publishedAt: '2026-11-10T09:00:00+07:00', image: images.email,
        content: [
            'Một hộp thư giả lập nhận lời nhắc phải cập nhật thông tin ngay trong ngày. Người nhận đọc cả tên hiển thị, địa chỉ gửi và phần yêu cầu, rồi đánh dấu chỗ chưa hiểu thay vì làm theo vì bị thúc giục.',
            'Bài tập không xác nhận email cụ thể nào là lừa đảo. Nhân vật chọn mở kênh liên hệ đã biết từ trước để hỏi lại, không dùng số điện thoại hoặc đường dẫn được cung cấp trong chính thư đang nghi vấn.',
        ],
    },
    {
        id: 'gt-02', path: factCheckArticlePath('gt-02'),
        title: 'Ảnh chụp màn hình có kể đủ câu chuyện?',
        summary: 'Một lớp học hư cấu thử đọc cùng một đoạn thông tin ở dạng ảnh cắt và dạng đầy đủ để nhận ra phần ngữ cảnh bị thiếu.',
        section: 'Tin giả', publishedAt: '2026-11-10T08:30:00+07:00', image: images.context,
        content: [
            'Giáo viên trong câu chuyện tự viết một thông báo giả định, sau đó chỉ cho lớp xem phần giữa. Khi mở toàn bộ trang, học sinh thấy còn điều kiện áp dụng và thời điểm mà bức ảnh nhỏ không thể hiện.',
            'Việc thiếu ngữ cảnh chưa tự chứng minh ảnh bị làm giả. Cả lớp ghi câu hỏi về bản gốc, thời gian và phần bị cắt; khi chưa có tài liệu để đối chiếu, bài tập giữ trạng thái chưa đủ thông tin.',
        ],
    },
    {
        id: 'gt-03', path: factCheckArticlePath('gt-03'),
        title: 'Đọc địa chỉ website trước khi điền biểu mẫu',
        summary: 'Bản demo đặt một trang mô phỏng cạnh cuốn sổ địa chỉ để thực hành việc tìm đúng điểm đến.',
        section: 'Chống tin giả, tin lừa đảo', publishedAt: '2026-11-10T08:00:00+07:00', image: images.website,
        content: [
            'Nhân vật trong tình huống giả định gặp một biểu mẫu được chuyển tiếp qua tin nhắn. Trang có hình thức quen mắt nhưng người đọc chưa có thông tin về người vận hành hoặc mục đích thu thập dữ liệu.',
            'Nhân vật không điền thông tin cá nhân và tìm địa chỉ từ nguồn liên hệ độc lập đã biết. Giao diện đẹp hoặc biểu tượng ổ khóa không được dùng làm bằng chứng rằng nội dung hay người vận hành đáng tin cậy.',
        ],
    },
    {
        id: 'gt-04', path: factCheckArticlePath('gt-04'),
        title: 'Một tiêu đề nhiều cảm xúc, một lần đọc trọn bài',
        summary: 'Tình huống đọc tin minh họa gợi ý tách điều tiêu đề nói với dữ kiện thật sự được trình bày trong phần nội dung.',
        section: 'Tin giả', publishedAt: '2026-11-10T07:30:00+07:00', image: images.reading,
        content: [
            'Nhóm đọc trong câu chuyện hư cấu nhận một tiêu đề do người hướng dẫn tự đặt. Mỗi người viết lại điều mình hiểu trước khi đọc đoạn văn đầy đủ, rồi đối chiếu xem ý nào thực sự có trong văn bản.',
            'Bài tập không gắn với tờ báo hoặc sự kiện có thật. Tiêu đề gây cảm xúc không đủ để kết luận một bài là sai; người đọc cần tìm dữ kiện, nguồn và giới hạn của thông tin trước khi chia sẻ nhận định.',
        ],
    },
    {
        id: 'gt-05', path: factCheckArticlePath('gt-05'),
        title: 'Lời mời nhận quà trong nhóm chat giả định',
        summary: 'Một yêu cầu cung cấp dữ liệu để nhận quà được dùng làm bài tập đặt câu hỏi, không mô tả chương trình có thật.',
        section: 'Chống tin giả, tin lừa đảo', publishedAt: '2026-11-09T16:00:00+07:00', image: images.email,
        content: [
            'Trong nhóm chat hư cấu, một tài khoản gửi lời mời nhận quà nhưng không nêu rõ đơn vị tổ chức hoặc điều kiện. Người đọc lưu câu hỏi về người gửi và mục đích sử dụng thông tin thay vì chuyển tiếp ngay.',
            'Nhân vật không gửi giấy tờ hoặc mã xác thực vào biểu mẫu. Câu chuyện chỉ là minh họa cách thận trọng với yêu cầu chưa rõ nguồn, không cáo buộc cá nhân hay chương trình khuyến mại cụ thể.',
        ],
    },
    {
        id: 'gt-06', path: factCheckArticlePath('gt-06'),
        title: 'Bức ảnh cũ trong một lời kể mới',
        summary: 'Bài tập dùng tranh tự tạo ở hai mốc thời gian để thảo luận vì sao cần tìm ngày và bối cảnh của hình ảnh.',
        section: 'Tin giả', publishedAt: '2026-11-09T15:30:00+07:00', image: images.context,
        content: [
            'Người hướng dẫn đặt cùng một tranh minh họa cạnh hai chú thích giả định khác ngày. Người học thử tìm những chi tiết mà hình ảnh có thể cho biết và những điều chỉ xuất hiện trong lời kể đi kèm.',
            'Không có sự kiện thật được xác minh trong bài này. Ngày đăng lại và ngày tạo ảnh có thể khác nhau; khi không tìm được bản gốc, nhóm ghi rõ chưa xác định bối cảnh thay vì tự chọn một lời giải thích.',
        ],
    },
    {
        id: 'gt-07', path: factCheckArticlePath('gt-07'),
        title: 'Mã QR trên tờ rơi: biết điểm đến trước khi tiếp tục',
        summary: 'Một tờ rơi không có thật giúp minh họa cách xem đường dẫn thay vì mặc định mã QR là dấu hiệu bảo đảm.',
        section: 'Chống tin giả, tin lừa đảo', publishedAt: '2026-11-09T15:00:00+07:00', image: images.website,
        content: [
            'Tờ rơi do nhóm học tự thiết kế chứa ô minh họa mã QR, không có mã quét hoạt động. Nhóm bàn về việc xem địa chỉ đích và mục đích của trang trước khi nhập dữ liệu hoặc chấp nhận một yêu cầu.',
            'Mã QR chỉ là cách chuyển thông tin, không tự chứng minh ai đứng sau trang đích. Bài demo không hướng người đọc tới một website thu thập dữ liệu và không kết luận về tờ rơi của tổ chức có thật.',
        ],
    },
    {
        id: 'gt-08', path: factCheckArticlePath('gt-08'),
        title: 'Nhiều nơi đăng lại có phải nhiều nguồn độc lập?',
        summary: 'Sơ đồ đọc tin minh họa theo dấu một đoạn văn hư cấu được chia sẻ qua nhiều trang.',
        section: 'Tin giả', publishedAt: '2026-11-09T14:30:00+07:00', image: images.reading,
        content: [
            'Một đoạn văn do nhóm tự viết xuất hiện ở ba thẻ giấy tượng trưng cho ba lần chia sẻ. Khi lần ngược các mũi tên, người học nhận ra cả ba thẻ đều dựa vào cùng một nội dung ban đầu.',
            'Số lần xuất hiện không thay thế bằng chứng về độ chính xác. Nhóm phân biệt nguồn tự thu thập thông tin với bản đăng lại, đồng thời để trống kết luận khi chưa tìm được tài liệu hỗ trợ độc lập.',
        ],
    },
    {
        id: 'gt-09', path: factCheckArticlePath('gt-09'),
        title: 'Tin nhắn nhờ giúp gấp: xác nhận qua một kênh khác',
        summary: 'Câu chuyện hoàn toàn giả định đặt ra tình huống một tài khoản quen gửi yêu cầu bất thường.',
        section: 'Chống tin giả, tin lừa đảo', publishedAt: '2026-11-09T14:00:00+07:00', image: images.email,
        content: [
            'Nhân vật nhận tin nhắn nhờ thực hiện việc gấp từ một tài khoản quen. Thay vì dựa vào ảnh đại diện và cách xưng hô, nhân vật liên hệ lại bằng kênh đã sử dụng trước đó để hỏi rõ yêu cầu.',
            'Không có tài khoản thật, giao dịch thật hoặc kết luận chiếm đoạt nào trong bài. Mục đích minh họa là tạo khoảng dừng trước một yêu cầu bất thường và tránh chia sẻ mã xác thực qua cuộc trò chuyện chưa được xác nhận.',
        ],
    },
    {
        id: 'gt-10', path: factCheckArticlePath('gt-10'),
        title: 'Hình ảnh AI: ghi rõ cách tạo và điều chưa biết',
        summary: 'Một buổi thảo luận hư cấu tách câu hỏi về nguồn gốc hình ảnh khỏi suy đoán chỉ dựa trên vài chi tiết thị giác.',
        section: 'Tin giả', publishedAt: '2026-11-09T13:30:00+07:00', image: images.context,
        content: [
            'Người học thảo luận cách ghi nhãn cho một hình minh họa tổng hợp trong tài liệu giả định. Họ đề xuất lưu thông tin người cung cấp, cách tạo được công bố và mục đích sử dụng thay vì trình bày hình như ảnh hiện trường.',
            'Bài viết không cung cấp công cụ phát hiện AI và không kết luận nguồn gốc một ảnh thật. Chi tiết trông lạ chỉ tạo câu hỏi để tìm hiểu thêm; tranh SVG trên trang này được tự vẽ bằng mã cho đồ án.',
        ],
    },
    {
        id: 'gt-11', path: factCheckArticlePath('gt-11'),
        title: 'Biểu mẫu xin quá nhiều thông tin trong bài tập mô phỏng',
        summary: 'Một form chỉ tồn tại trong câu chuyện đặt ra câu hỏi: dữ liệu được xin có phù hợp với mục đích đã nêu?',
        section: 'Chống tin giả, tin lừa đảo', publishedAt: '2026-11-08T16:00:00+07:00', image: images.website,
        content: [
            'Nhóm thiết kế một biểu mẫu trên giấy cho hoạt động đọc sách hư cấu. Các ô hỏi được rà lại để nhận ra thông tin nào phục vụ hoạt động, ô nào chưa có lý do rõ ràng và ai có thể xem dữ liệu.',
            'Không có biểu mẫu thu thập dữ liệu hoạt động trên trang demo. Khi chưa rõ người nhận và cách sử dụng thông tin, nhân vật dừng điền và hỏi qua kênh độc lập; bài không đánh giá một dịch vụ có thật.',
        ],
    },
    {
        id: 'gt-12', path: factCheckArticlePath('gt-12'),
        title: 'Con số thiếu đơn vị trong một biểu đồ giả định',
        summary: 'Những cột màu tự vẽ giúp lớp học đặt câu hỏi về đơn vị, mẫu và khoảng thời gian trước khi diễn giải.',
        section: 'Tin giả', publishedAt: '2026-11-08T15:30:00+07:00', image: images.reading,
        content: [
            'Trong bài tập, các cột chỉ được đặt tên A, B và C, không đại diện dữ liệu đời thật. Khi thiếu đơn vị và thời gian, nhóm không thể xác định biểu đồ đang so sánh điều gì hoặc có thể rút ra kết luận đến đâu.',
            'Người học viết danh sách thông tin cần bổ sung: nguồn dữ liệu, phạm vi, cách thu thập và cách tính. Một biểu đồ thiếu thông tin được ghi là chưa đủ để diễn giải, không tự động bị gắn nhãn giả mạo.',
        ],
    },
    {
        id: 'gt-13', path: factCheckArticlePath('gt-13'),
        title: 'Lời mời cài ứng dụng từ một tin nhắn lạ',
        summary: 'Tình huống mô phỏng về một yêu cầu cài phần mềm chưa rõ nguồn, không kèm tệp hoặc đường dẫn tải.',
        section: 'Chống tin giả, tin lừa đảo', publishedAt: '2026-11-08T15:00:00+07:00', image: images.email,
        content: [
            'Nhân vật nhận lời mời cài một ứng dụng không có tên thật để hoàn tất thủ tục giả định. Người nhận chưa biết nhà phát hành hoặc lý do cần những quyền truy cập được mô tả trong tin nhắn.',
            'Trong câu chuyện, nhân vật không cài từ tin nhắn mà tìm lại kênh hướng dẫn đã biết. Bài không phát tán tệp, hướng dẫn phân tích mã độc hoặc cáo buộc một ứng dụng đang hoạt động.',
        ],
    },
    {
        id: 'gt-14', path: factCheckArticlePath('gt-14'),
        title: 'Một câu trích dẫn cần cả phần trước và sau',
        summary: 'Đoạn hội thoại tự biên soạn được dùng để tập đọc câu trích trong toàn bộ bối cảnh.',
        section: 'Tin giả', publishedAt: '2026-11-08T14:30:00+07:00', image: images.reading,
        content: [
            'Hai nhân vật hư cấu nói chuyện về kế hoạch cho thư viện tưởng tượng. Nhóm đọc thử một câu được tách riêng, rồi mở đoạn hội thoại để tìm điều kiện và chủ đề mà câu đó đang đề cập.',
            'Câu chuyện không trích lời chuyên gia hoặc người nổi tiếng. Khi đối chiếu phát ngôn, nhóm đề nghị tìm bản đầy đủ và người công bố; nếu chưa có, họ ghi giới hạn thay vì gán ý định cho người nói.',
        ],
    },
    {
        id: 'gt-15', path: factCheckArticlePath('gt-15'),
        title: 'Trang có giao diện quen mắt vẫn cần đọc nguồn',
        summary: 'Hai khung trình duyệt minh họa cùng màu sắc cho thấy thiết kế không đủ để xác định người vận hành.',
        section: 'Chống tin giả, tin lừa đảo', publishedAt: '2026-11-08T14:00:00+07:00', image: images.website,
        content: [
            'Người hướng dẫn tự dựng hai tấm thẻ website không dùng thương hiệu thật. Các tấm thẻ có cùng bố cục nhưng phần mô tả người quản lý và mục đích lại khác nhau, giúp lớp tách hình thức khỏi nguồn gốc.',
            'Bài demo không mô phỏng trang đăng nhập của doanh nghiệp thật. Người học chỉ ghi các điểm cần đối chiếu qua địa chỉ đã biết, không lấy logo hay màu sắc làm bảo đảm cho một yêu cầu cung cấp thông tin.',
        ],
    },
    {
        id: 'gt-16', path: factCheckArticlePath('gt-16'),
        title: 'Thông tin chưa kiểm chứng: nói rõ phần chưa biết',
        summary: 'Một nhóm đọc giả định thử viết lại lời chia sẻ sao cho không biến câu hỏi thành khẳng định.',
        section: 'Tin giả', publishedAt: '2026-11-08T13:30:00+07:00', image: images.context,
        content: [
            'Nhóm nhận một mẩu thông tin do người hướng dẫn tự soạn, chưa có nguồn hỗ trợ. Họ phân biệt điều đã có trong tài liệu với suy đoán của mình, đồng thời bỏ lời kêu gọi lan truyền khi chưa rõ bối cảnh.',
            'Chưa đủ thông tin không đồng nghĩa với thật hoặc giả. Bài tập giữ câu hỏi ở dạng trung lập, tránh đặt tên người thật hoặc đưa chi tiết khiến tình huống giả định bị hiểu nhầm thành sự kiện đang diễn ra.',
        ],
    },
    {
        id: 'gt-17', path: factCheckArticlePath('gt-17'),
        title: 'Lời hứa hoàn tiền trong cuộc trò chuyện mô phỏng',
        summary: 'Một yêu cầu trả trước để được hoàn lại được dùng làm tình huống thảo luận, không phải mô tả vụ việc thật.',
        section: 'Chống tin giả, tin lừa đảo', publishedAt: '2026-11-07T16:00:00+07:00', image: images.email,
        content: [
            'Cuộc trò chuyện hư cấu đưa ra lời hứa hoàn lại một khoản không nêu số tiền và yêu cầu thực hiện bước khác trước. Nhân vật chưa có tài liệu độc lập để xác định ai đang liên hệ hoặc điều kiện của lời hứa.',
            'Câu chuyện dừng trước mọi giao dịch. Nhân vật tìm kênh hỗ trợ đã biết để hỏi lại, không coi một tin nhắn xác nhận là bằng chứng tiền đã được hoàn và không chuyển thêm chỉ để làm theo lời thúc giục.',
        ],
    },
    {
        id: 'gt-18', path: factCheckArticlePath('gt-18'),
        title: 'Video cắt ngắn và phần diễn biến còn thiếu',
        summary: 'Một chuỗi tranh do nhóm tự vẽ thay cho video thật để thực hành đọc thứ tự sự việc.',
        section: 'Tin giả', publishedAt: '2026-11-07T15:30:00+07:00', image: images.context,
        content: [
            'Ba khung tranh mô tả việc sắp xếp sách trong căn phòng tưởng tượng. Khi chỉ thấy khung giữa, người đọc có nhiều cách đoán phần trước và sau nhưng không cách nào được xem là đã có bằng chứng.',
            'Bài tập không phân tích người hoặc sự kiện thật. Nhóm tìm chuỗi đầy đủ và nguồn đăng ban đầu trước khi kể lại diễn biến; nếu chưa tìm thấy, họ giữ phần còn thiếu như một giới hạn rõ ràng.',
        ],
    },
    {
        id: 'gt-19', path: factCheckArticlePath('gt-19'),
        title: 'Yêu cầu gửi mã xác thực trong tình huống giả định',
        summary: 'Nhân vật trong bài tập dừng cuộc trao đổi khi người gửi chưa rõ danh tính yêu cầu một mã riêng tư.',
        section: 'Chống tin giả, tin lừa đảo', publishedAt: '2026-11-07T15:00:00+07:00', image: images.website,
        content: [
            'Một cuộc hội thoại trên giấy dùng ký hiệu thay cho mã thật. Nhân vật nhận yêu cầu gửi lại ký hiệu đó nhưng chưa xác định được người liên hệ hoặc mục đích của yêu cầu, nên không tiếp tục chia sẻ.',
            'Trang demo không có ô nhập mã hay chức năng xác thực. Câu chuyện minh họa việc giữ mã riêng tư và kiểm tra qua kênh đã biết, không tái hiện quy trình của một ngân hàng hoặc dịch vụ cụ thể.',
        ],
    },
    {
        id: 'gt-20', path: factCheckArticlePath('gt-20'),
        title: 'Đính chính trong nhóm đọc: sửa cả lời chia sẻ cũ',
        summary: 'Sau khi đọc đủ tài liệu giả định, nhóm học tập thực hành cập nhật một ghi chú từng thiếu ngữ cảnh.',
        section: 'Tin giả', publishedAt: '2026-11-07T14:30:00+07:00', image: images.reading,
        content: [
            'Nhóm học từng ghi nhầm thời gian của một hoạt động tưởng tượng vì chỉ đọc tờ giấy rút gọn. Khi có bản đầy đủ do người hướng dẫn cung cấp, họ sửa ghi chú và nói rõ thông tin nào đã thay đổi cùng lý do.',
            'Đây là diễn biến do tác giả tự xây dựng, không phải bản đính chính của tòa soạn có thật. Bài nhấn mạnh trách nhiệm cập nhật lời đã chia sẻ trong phạm vi tài liệu của bài tập, không cấp nhãn đã xác minh cho nội dung bên ngoài.',
        ],
    },
];
