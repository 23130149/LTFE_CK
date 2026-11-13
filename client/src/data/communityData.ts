import type { CommunityComment, CommunityPoll, CommunityPost, CommunityTopic } from '../types/community.ts';

export const communityTopics: readonly CommunityTopic[] = [
    { id: 'noi-di-roi-tinh', name: 'Nói đi rồi tính', symbol: '↗', description: 'Một câu chuyện nhỏ, nhiều góc nhìn để lắng nghe.' },
    { id: 'giao-thong', name: 'Giao thông 24/7', symbol: '⇄', description: 'Chia sẻ cách đi lại và ứng xử trên đường.' },
    { id: 'phu-huynh', name: 'Phụ huynh', symbol: '♡', description: 'Cùng con học hỏi, cùng nhau trưởng thành.' },
    { id: 'cong-so', name: 'Tâm sự công sở', symbol: '☕', description: 'Chuyện đồng nghiệp, công việc và cân bằng.' },
    { id: 'sinh-vien', name: 'Sinh viên', symbol: '✎', description: 'Góc học tập và những trải nghiệm đầu đời.' },
    { id: 'cong-nghe', name: 'Công nghệ', symbol: '⌘', description: 'Sống chủ động hơn trong thế giới số.' },
    { id: 'khoi-nghiep', name: 'Khởi nghiệp', symbol: '✦', description: 'Bắt đầu từ những ý tưởng vừa sức.' },
];

export const communityPosts: readonly CommunityPost[] = [
    {
        id: 'cd-01', topicId: 'sinh-vien', title: 'Học nhóm thế nào để ai cũng có phần việc của mình?', author: 'Minh An · nhân vật demo', publishedAt: '2026-11-12T08:30:00+07:00', demoLikes: 24,
        image: { src: '/images/education/teamwork.jpg', alt: 'Ảnh minh họa hoạt động học nhóm' },
        content: 'Nhóm học của tôi từng dành cả buổi để phân chia công việc, rồi sát hạn mới nhận ra có phần bị bỏ quên. Trong tình huống minh họa này, cả nhóm thử ghi một mục tiêu nhỏ cho từng buổi và thống nhất người tổng hợp.\n\nKhi một bạn chưa hiểu bài, chúng tôi dành thời gian giải thích thay vì chỉ gửi đáp án. Việc đổi vai người trình bày cũng giúp mỗi thành viên được thử sức.\n\nBạn thường phân chia công việc như thế nào để việc học nhóm bớt áp lực? Mời bạn kể một cách làm phù hợp với mình trong phần bình luận demo.',
    },
    {
        id: 'cd-02', topicId: 'giao-thong', title: 'Nhường nhau một chút ở lối vào bãi xe', author: 'Bạn đọc ẩn danh · demo', publishedAt: '2026-11-11T17:10:00+07:00', demoLikes: 57,
        content: 'Lối vào bãi xe trong câu chuyện giả định khá hẹp. Khi hai dòng xe cùng muốn đi trước, mọi người mất nhiều thời gian hơn cả việc chờ một nhịp.\n\nMột bạn đề nghị từng bên đi lần lượt và để trống đường cho người đi bộ. Cách trao đổi nhẹ nhàng khiến buổi chiều dễ chịu hơn.\n\nBạn có ý tưởng nào để việc ra vào bãi xe ở trường gọn gàng hơn?',
    },
    {
        id: 'cd-03', topicId: 'cong-so', title: 'Tin nhắn công việc sau giờ làm: trả lời ngay hay để sáng mai?', author: 'Hà Linh · nhân vật demo', publishedAt: '2026-11-11T12:00:00+07:00', demoLikes: 82,
        image: { src: '/images/health/conversation.svg', alt: 'Tranh minh họa một cuộc trò chuyện' },
        content: 'Trong nhóm làm việc giả định, mỗi người hiểu chữ “gấp” theo một cách khác nhau. Có người trả lời mọi tin nhắn vào buổi tối, có người chỉ đọc vào sáng hôm sau.\n\nNhóm thử thống nhất giờ trao đổi và cách đánh dấu những việc cần xử lý ngay. Người gửi cũng ghi rõ thời hạn để người nhận chủ động sắp xếp.\n\nTheo bạn, một thỏa thuận nhỏ nào có thể giúp cả nhóm tôn trọng thời gian nghỉ của nhau?',
    },
    {
        id: 'cd-04', topicId: 'phu-huynh', title: 'Để con tự chuẩn bị cặp sách, cha mẹ bắt đầu từ đâu?', author: 'An Nhiên · nhân vật demo', publishedAt: '2026-11-10T19:20:00+07:00', demoLikes: 39,
        content: 'Một gia đình trong dữ liệu demo thử để con tự chuẩn bị đồ dùng cho ngày mai. Ban đầu, cha mẹ chỉ cùng con lập một danh sách ngắn thay vì làm hộ.\n\nCó hôm con quên một cuốn vở, cả nhà xem lại bước nào cần thay đổi. Câu chuyện tập trung vào việc lắng nghe và luyện thói quen, không đưa ra quy tắc chung cho mọi trẻ.\n\nBạn muốn chia sẻ trải nghiệm đồng hành cùng con trong một việc nhỏ hằng ngày?',
    },
    {
        id: 'cd-05', topicId: 'cong-nghe', title: 'Một buổi tối tắt thông báo, bạn sẽ dành thời gian cho điều gì?', author: 'Quang · nhân vật demo', publishedAt: '2026-11-10T08:00:00+07:00', demoLikes: 63,
        content: 'Nhân vật trong câu chuyện minh họa thử tắt các thông báo không cần thiết trong một buổi tối. Thay vì liên tục mở điện thoại, bạn ấy đọc nốt một chương sách.\n\nViệc này không phải lời khuyên phải rời bỏ công nghệ. Bạn ấy vẫn giữ những kênh liên lạc cần thiết và chọn thời gian phù hợp.\n\nNếu có thêm một khoảng yên tĩnh, bạn muốn làm điều gì?',
    },
    {
        id: 'cd-06', topicId: 'noi-di-roi-tinh', title: 'Một kệ sách chung ở hành lang có thể bắt đầu từ vài cuốn cũ', author: 'Khánh Vy · nhân vật demo', publishedAt: '2026-11-09T16:30:00+07:00', demoLikes: 46,
        image: { src: '/images/education/library.jpg', alt: 'Ảnh thư viện minh họa cho câu chuyện chia sẻ sách' },
        content: 'Trong khu trọ giả định, vài người muốn chia sẻ sách nhưng chưa biết đặt ở đâu. Họ hỏi ý kiến người cùng sống trước khi tận dụng một góc hành lang.\n\nKệ nhỏ có giấy ghi cách mượn và trả, đồng thời chừa lối đi thông thoáng. Mọi người bắt đầu với số sách vừa đủ để dễ chăm sóc.\n\nBạn nghĩ một không gian chung cần thỏa thuận điều gì trước khi đặt kệ sách?',
    },
    {
        id: 'cd-07', topicId: 'khoi-nghiep', title: 'Thử một ý tưởng nhỏ trước khi đặt tên cho cửa hàng', author: 'Gia Bảo · nhân vật demo', publishedAt: '2026-11-09T09:10:00+07:00', demoLikes: 31,
        content: 'Hai người bạn trong tình huống demo muốn làm sổ tay thủ công. Thay vì chuẩn bị thật nhiều mẫu, họ thử một số ít để hỏi ý kiến về cách sử dụng.\n\nNhững góp ý về kích thước và giấy viết giúp cả hai hiểu rõ hơn điều mình cần học. Đây là câu chuyện trao đổi ý tưởng, không phải tư vấn đầu tư hay cam kết thu nhập.\n\nBạn từng thay đổi ý tưởng sau khi lắng nghe người sử dụng chưa?',
    },
    {
        id: 'cd-08', topicId: 'sinh-vien', title: 'Tuần đầu ở trọ: cùng bạn cùng phòng thống nhất những gì?', author: 'Bình Minh · nhân vật demo', publishedAt: '2026-11-08T14:00:00+07:00', demoLikes: 71,
        content: 'Trong một phòng trọ giả định, ba người có lịch học khác nhau. Họ dành một buổi trao đổi về giờ yên tĩnh, việc dọn dẹp và cách dùng đồ chung.\n\nThay vì một bảng nội quy dài, mỗi người nêu điều mình cần và thống nhất thử trong một tuần. Những điểm chưa hợp lý được điều chỉnh sau đó.\n\nTheo bạn, cuộc trò chuyện đầu tiên với bạn cùng phòng nên bắt đầu như thế nào?',
    },
    {
        id: 'cd-09', topicId: 'giao-thong', title: 'Đi xe buýt cùng bạn mới: hành trình bớt bỡ ngỡ', author: 'Mai Anh · nhân vật demo', publishedAt: '2026-11-08T07:30:00+07:00', demoLikes: 28,
        content: 'Một sinh viên trong câu chuyện tự biên soạn đi cùng bạn lần đầu sử dụng xe buýt. Cả hai kiểm tra hành trình và dành thêm thời gian cho việc tìm điểm dừng.\n\nĐiều đáng nhớ là có người giải thích từng bước và nhắc giữ gìn không gian chung. Câu chuyện không cung cấp tuyến hay lịch chạy thực tế.\n\nBạn còn nhớ điều khiến mình bỡ ngỡ trong chuyến xe đầu tiên?',
    },
    {
        id: 'cd-10', topicId: 'phu-huynh', title: 'Bữa cơm gia đình có cần một khoảng thời gian không màn hình?', author: 'Thu An · nhân vật demo', publishedAt: '2026-11-07T18:15:00+07:00', demoLikes: 52,
        image: { src: '/images/health/family.svg', alt: 'Tranh gia đình minh họa cho đồ án' },
        content: 'Gia đình giả định trong bài thử cất điện thoại trong một phần bữa tối. Người lớn cũng thực hiện thỏa thuận như các thành viên nhỏ tuổi.\n\nMọi người kể một chuyện vui hoặc một điều chưa thuận lợi trong ngày. Nếu có việc cần liên lạc, cả nhà trao đổi trước thay vì áp dụng cứng nhắc.\n\nBạn thích bắt đầu câu chuyện ở bàn ăn bằng câu hỏi nào?',
    },
    {
        id: 'cd-11', topicId: 'cong-so', title: 'Người mới cần được hỏi, không chỉ cần một tập tài liệu', author: 'Hải Đăng · nhân vật demo', publishedAt: '2026-11-07T09:00:00+07:00', demoLikes: 90,
        content: 'Trong nhóm công việc minh họa, nhân viên mới được giao tài liệu nhưng ngại đặt câu hỏi. Một đồng nghiệp đề nghị có khoảng trao đổi ngắn mỗi ngày trong tuần đầu.\n\nNhững câu hỏi nhỏ về quy trình được giải thích kịp thời. Người hướng dẫn cũng nhận ra một số tài liệu cần viết rõ hơn.\n\nBạn mong được hỗ trợ điều gì trong những ngày đầu ở một môi trường mới?',
    },
    {
        id: 'cd-12', topicId: 'cong-nghe', title: 'Dọn thư mục ảnh: giữ kỷ niệm mà vẫn tìm lại được', author: 'Lan Chi · nhân vật demo', publishedAt: '2026-11-06T20:00:00+07:00', demoLikes: 18,
        content: 'Một bạn trong dữ liệu demo có nhiều ảnh trùng và khó tìm lại ảnh chuyến đi cũ. Bạn ấy bắt đầu đặt tên thư mục theo năm và sự kiện.\n\nTrước khi xóa, bạn kiểm tra bản sao và chỉ xử lý những tệp mình hiểu rõ. Bài viết là lời gợi chuyện về cách tổ chức, không yêu cầu chia sẻ ảnh cá nhân.\n\nBạn thường sắp xếp kỷ niệm số bằng cách nào?',
    },
    {
        id: 'cd-13', topicId: 'noi-di-roi-tinh', title: 'Một lời cảm ơn viết tay trong khu phố', author: 'Bạn đọc ẩn danh · demo', publishedAt: '2026-11-06T10:00:00+07:00', demoLikes: 34,
        content: 'Câu chuyện giả định bắt đầu từ một mẩu giấy cảm ơn người đã giúp tưới cây. Sau đó, vài người hàng xóm thử ghi lại những việc tử tế nhỏ trong tuần.\n\nKhông ai cần ghi tên hay đăng hình của người khác. Tấm bảng chung chỉ là một cách nhắc nhau trân trọng sự quan tâm gần gũi.\n\nBạn muốn nói lời cảm ơn cho điều nhỏ bé nào hôm nay?',
    },
    {
        id: 'cd-14', topicId: 'khoi-nghiep', title: 'Cùng làm dự án: nói rõ kỳ vọng trước khi bắt đầu', author: 'Tuệ Minh · nhân vật demo', publishedAt: '2026-11-05T15:45:00+07:00', demoLikes: 42,
        content: 'Nhóm bạn trong bài demo muốn làm một sản phẩm học tập. Một người coi đây là bài tập cuối tuần, người khác lại muốn dành cả tháng phát triển.\n\nKhi nói rõ thời gian và mục tiêu, họ chọn một phiên bản nhỏ có thể hoàn thành cùng nhau. Phần việc của từng người được ghi lại để tiện trao đổi.\n\nBạn thường thống nhất kỳ vọng với cộng sự bằng cách nào?',
    },
];

export const communityComments: readonly CommunityComment[] = [
    { id: 'seed-comment-1', postId: 'cd-01', author: 'Bạn học · demo', content: 'Nhóm mình thử đổi người tổng hợp mỗi buổi để ai cũng được tham gia.', createdAt: '2026-11-12T09:00:00+07:00' },
    { id: 'seed-comment-2', postId: 'cd-03', author: 'Đồng nghiệp · demo', content: 'Ghi rõ thời hạn trong tin nhắn giúp mình sắp xếp công việc dễ hơn.', createdAt: '2026-11-11T13:00:00+07:00' },
    { id: 'seed-comment-3', postId: 'cd-11', author: 'Người đọc · demo', content: 'Một người hướng dẫn sẵn sàng lắng nghe sẽ giúp người mới tự tin hơn.', createdAt: '2026-11-07T11:00:00+07:00' },
];

export const communityPolls: readonly CommunityPoll[] = [
    { id: 'hoc-tap', question: 'Bạn thích học theo cách nào?', options: [
        { id: 'nhom', label: 'Học nhóm, cùng nhau trao đổi', demoVotes: 18 },
        { id: 'tu-hoc', label: 'Tự học trong không gian yên tĩnh', demoVotes: 22 },
        { id: 'ket-hop', label: 'Kết hợp tùy nội dung', demoVotes: 10 },
    ] },
    { id: 'di-lai', question: 'Trong tình huống demo, bạn chọn cách nào đến trường?', options: [
        { id: 'xe-buyt', label: 'Xe buýt hoặc phương tiện công cộng', demoVotes: 12 },
        { id: 'xe-dap', label: 'Đi bộ hoặc xe đạp', demoVotes: 8 },
        { id: 'ca-nhan', label: 'Phương tiện cá nhân', demoVotes: 10 },
    ] },
    { id: 'lam-viec', question: 'Bạn thích không gian làm việc nào?', options: [
        { id: 'tai-nha', label: 'Tại nhà', demoVotes: 0 },
        { id: 'van-phong', label: 'Văn phòng', demoVotes: 0 },
        { id: 'linh-hoat', label: 'Linh hoạt cả hai', demoVotes: 0 },
    ] },
];
