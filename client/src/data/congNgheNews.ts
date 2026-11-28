import type { CategoryArticle } from '../types/category.ts';

const img = (seed: string) => ({ src: `https://picsum.photos/seed/${seed}/720/450`, alt: 'Ảnh minh họa tin công nghệ' });

export const congNgheNews: CategoryArticle[] = [
    {
        id: 'cn-01',
        title: 'Trí tuệ nhân tạo vào trường học: lợi ích và rủi ro',
        summary: 'Nhiều trường thử nghiệm công cụ AI hỗ trợ học tập và chấm bài.',
        section: 'Trí tuệ nhân tạo',
        publishedAt: '2026-11-01T07:00:00+07:00',
        image: img('cn01'),
        content: [
            'Nhiều trường học trên cả nước đang thử nghiệm các công cụ trí tuệ nhân tạo hỗ trợ việc học tập và chấm bài. Các công cụ này có thể gợi ý bài tập theo năng lực từng học sinh, giải thích lại kiến thức khi các em chưa hiểu và giúp giáo viên tiết kiệm thời gian chấm bài tự luận.',
            'Giáo viên tham gia thử nghiệm cho rằng AI giúp họ nắm bắt nhanh hơn những khó khăn chung của lớp học, từ đó điều chỉnh bài giảng kịp thời. Tuy nhiên, nhiều người cũng nhấn mạnh rằng công nghệ chỉ là công cụ hỗ trợ, không thể thay thế vai trò định hướng và chăm sóc của thầy cô.',
            'Về rủi ro, các chuyên gia giáo dục lo ngại học sinh lạm dụng AI để làm bài thay vì tự suy nghĩ, khiến kỹ năng tư duy và viết bị suy giảm. Dữ liệu cá nhân của học sinh khi sử dụng nền tảng AI cũng cần được bảo vệ chặt chẽ.',
            'Để khắc phục, nhiều trường đề xuất xây dựng quy định rõ ràng về việc sử dụng AI trong bài tập, đồng thời thiết kế bài kiểm tra chú trọng quá trình suy luận thay vì chỉ đánh giá kết quả cuối cùng. Phụ huynh cũng được khuyến khích trao đổi cùng con về cách dùng công cụ một cách có trách nhiệm.',
            'Các chuyên gia kết luận rằng việc đưa AI vào trường học cần đi kèm đào tạo cho giáo viên và đánh giá hiệu quả thường xuyên, thay vì chạy theo xu hướng công nghệ một cách ồ ạt.',
        ],
    },
    {
        id: 'cn-02',
        title: 'Ứng dụng định danh điện tử được nâng cấp',
        summary: 'Người dùng có thể xác thực nhanh hơn trên thiết bị di động.',
        section: 'Chuyển đổi số',
        publishedAt: '2026-11-02T08:13:00+07:00',
        image: img('cn02'),
        content: [
            'Ứng dụng định danh điện tử vừa được nâng cấp với nhiều tính năng mới, giúp người dùng xác thực danh tính nhanh hơn trên thiết bị di động. Thay vì phải mang theo giấy tờ hoặc đến cơ quan chức năng, người dùng có thể hoàn tất nhiều thao tác ngay trên điện thoại.',
            'Điểm mới nổi bật là quy trình xác thực sinh trắc học được tối ưu, cho phép đăng nhập và ký xác nhận chỉ trong vài thao tác. Hệ thống cũng bổ sung khả năng cập nhật thông tin cá nhân và kiểm tra trạng thái giấy tờ điện tử ngay trong ứng dụng.',
            'Các chuyên gia an ninh mạng khuyến nghị người dùng bật xác thực hai lớp, không chia sẻ mã xác nhận cho bất kỳ ai và chỉ cài đặt ứng dụng từ kho chính thức. Khi điện thoại bị mất, cần khóa tài khoản kịp thời qua kênh hỗ trợ được cung cấp.',
            'Theo đánh giá từ một số người dùng thử nghiệm, thao tác mới giúp tiết kiệm đáng kể thời gian khi làm thủ tục trực tuyến, đặc biệt đối với người thường xuyên giao dịch với ngân hàng và cơ quan nhà nước.',
            'Việc mở rộng định danh điện tử được xem là bước quan trọng trong tiến trình chuyển đổi số, khi mà các dịch vụ công và thương mại ngày càng dựa trên xác thực số.',
        ],
    },
    {
        id: 'cn-03',
        title: 'Startup Việt gọi vốn thành công vòng hạt giống',
        summary: 'Sản phẩm tập trung vào giải pháp thanh toán cho doanh nghiệp nhỏ.',
        section: 'Sản phẩm mới',
        publishedAt: '2026-11-03T09:26:00+07:00',
        image: img('cn03'),
        content: [
            'Một startup công nghệ do người Việt sáng lập vừa hoàn tất vòng gọi vốn hạt giống, thu hút sự quan tâm của một số quỹ đầu tư trong và ngoài nước. Số vốn huy động sẽ được dùng để hoàn thiện sản phẩm và mở rộng đội ngũ kỹ thuật.',
            'Sản phẩm của công ty tập trung vào giải pháp thanh toán và quản lý dòng tiền cho doanh nghiệp nhỏ, nơi việc đối soát giao dịch thường còn thủ công. Nền tảng cho phép chủ cửa hàng theo dõi thu chi, nhận thanh toán qua nhiều kênh và xuất báo cáo tự động.',
            'Nhà sáng lập chia sẻ, ý tưởng xuất phát từ việc quan sát nhiều chủ hộ kinh doanh phải ghi sổ bằng tay, dẫn đến sai sót và khó kiểm soát dòng tiền. Đội ngũ đã thử nghiệm sản phẩm với một nhóm khách hàng nhỏ trước khi mở rộng.',
            'Các nhà đầu tư đánh giá cao tiềm năng thị trường thanh toán số cho doanh nghiệp nhỏ tại Việt Nam, nhưng cũng nhắc nhở rằng cạnh tranh trong lĩnh vực này khá gay gắt. Khả năng giữ chân khách hàng và tuân thủ quy định về an toàn tài chính sẽ là thước đo quan trọng trong giai đoạn tới.',
            'Công ty dự kiến ra mắt phiên bản mở rộng trong vòng một năm, đồng thời tìm kiếm đối tác để kết nối với các ngân hàng và nền tảng thương mại điện tử.',
        ],
    },
    {
        id: 'cn-04',
        title: 'Thiết bị đeo thông minh tăng trưởng mạnh trong quý III',
        summary: 'Đồng hồ và vòng đeo tay chiếm phần lớn doanh số.',
        section: 'Sản phẩm mới',
        publishedAt: '2026-11-04T07:39:00+07:00',
        image: img('cn04'),
        content: [
            'Thị trường thiết bị đeo thông minh ghi nhận mức tăng trưởng mạnh trong quý III, với đồng hồ thông minh và vòng đeo tay theo dõi sức khỏe chiếm phần lớn doanh số. Người tiêu dùng ngày càng quan tâm đến các chỉ số như nhịp tim, giấc ngủ và số bước chân hằng ngày.',
            'Các hãng bán lẻ cho biết nhóm sản phẩm có giá dễ tiếp cận và tích hợp nhiều tính năng theo dõi sức khỏe đang bán chạy nhất. Ngoài ra, việc các thiết bị kết nối tốt hơn với ứng dụng điện thoại cũng góp phần thúc đẩy nhu cầu.',
            'Tuy nhiên, các chuyên gia khuyến cáo người dùng không nên xem dữ liệu từ thiết bị đeo là chẩn đoán y tế. Những chỉ số này mang tính tham khảo, và khi có dấu hiệu bất thường cần đi khám bác sĩ.',
            'Vấn đề bảo mật dữ liệu sức khỏe cũng được đặt ra. Người dùng nên xem kỹ chính sách quyền riêng tư của nhà sản xuất, cách dữ liệu được lưu trữ và có thể chia sẻ với bên thứ ba hay không.',
            'Dự báo cho thấy nhu cầu sẽ tiếp tục duy trì trong những tháng cuối năm, đặc biệt khi các chương trình khuyến mại mua sắm cuối năm diễn ra sôi động.',
        ],
    },
    {
        id: 'cn-05',
        title: 'Cảnh báo lừa đảo qua tin nhắn giả mạo ngân hàng',
        summary: 'Người dân nên kiểm tra kỹ đường dẫn trước khi nhập thông tin.',
        section: 'An toàn thông tin',
        publishedAt: '2026-11-05T08:52:00+07:00',
        image: img('cn05'),
        content: [
            'Cơ quan chức năng cảnh báo về sự gia tăng của các tin nhắn giả mạo thông báo từ ngân hàng, thường yêu cầu người nhận bấm vào đường dẫn để xác nhận tài khoản hoặc nhận ưu đãi. Đường dẫn này dẫn đến trang web giả giống hệt giao diện ngân hàng thật.',
            'Theo mô tả của nạn nhân, các trang giả thường yêu cầu nhập tên đăng nhập, mật khẩu, mã OTP và số thẻ. Sau khi người dùng nhập thông tin, đối tượng nhanh chóng chiếm quyền truy cập tài khoản và chuyển tiền đi.',
            'Người dân được khuyến cáo không bấm vào đường dẫn lạ trong tin nhắn, kể cả khi tin nhắn có vẻ đến từ tên ngân hàng quen thuộc. Thay vào đó, nên gọi trực tiếp đến số hotline in trên thẻ hoặc đăng nhập bằng ứng dụng chính thức đã cài sẵn.',
            'Khi nghi ngờ bị lừa, cần liên hệ ngay ngân hàng để khóa tài khoản, đổi mật khẩu và báo cơ quan công an gần nhất. Lưu lại tin nhắn và thông tin giao dịch cũng giúp quá trình xử lý thuận lợi hơn.',
            'Các chuyên gia an toàn thông tin nhấn mạnh rằng ngân hàng sẽ không yêu cầu khách hàng cung cấp mật khẩu hay mã OTP qua tin nhắn hay điện thoại. Ghi nhớ nguyên tắc này là cách phòng tránh đơn giản nhưng hiệu quả nhất.',
        ],
    },
    { id: 'cn-06', title: 'Trung tâm dữ liệu mới được xây dựng tại miền Nam', summary: 'Dự án kỳ vọng hỗ trợ điện toán đám mây cho khu vực.', section: 'Chuyển đổi số', publishedAt: '2026-11-06T09:05:00+07:00', image: img('cn06') },
    { id: 'cn-07', title: 'Xe điện tự lái thử nghiệm trên một số tuyến đường', summary: 'Thử nghiệm diễn ra trong điều kiện kiểm soát và có người giám sát.', section: 'Trí tuệ nhân tạo', publishedAt: '2026-11-01T07:18:00+07:00', image: img('cn07') },
    { id: 'cn-08', title: 'Chuyển đổi số ngành y tế: khám chữa bệnh từ xa', summary: 'Hồ sơ bệnh án điện tử giúp bệnh nhân không phải mang giấy tờ.', section: 'Chuyển đổi số', publishedAt: '2026-11-02T08:31:00+07:00', image: img('cn08') },
];