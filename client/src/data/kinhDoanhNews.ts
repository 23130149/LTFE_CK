import type { CategoryArticle } from '../types/category.ts';

const img = (seed: string) => ({ src: `https://picsum.photos/seed/${seed}/720/450`, alt: 'Ảnh minh họa tin kinh doanh' });

export const kinhDoanhNews: CategoryArticle[] = [
    {
        id: 'kd-01',
        title: 'Giá cả đầu ngày: Bưởi da xanh, cá tra đồng loạt tăng giá',
        summary: 'Giá bưởi da xanh xuất khẩu đạt 45.000 đồng/kg, cá tra tăng theo.',
        section: 'Thị trường',
        publishedAt: '2026-11-01T07:00:00+07:00',
        image: img('kd01'),
        content: [
            'Ngay từ đầu ngày giao dịch, giá một số mặt hàng nông, thủy sản chủ lực tại các vùng sản xuất trọng điểm đồng loạt đi lên. Bưởi da xanh phục vụ xuất khẩu ghi nhận mức giá khoảng 45.000 đồng mỗi kilôgam, trong khi cá tra nguyên liệu cũng nhích lên theo nhu cầu thu mua của các nhà máy chế biến.',
            'Thương lái tại vùng trồng bưởi cho biết nguồn hàng đang khan hiếm do thời tiết đầu mùa ảnh hưởng đến năng suất, trong khi đơn đặt hàng từ thị trường nước ngoài vẫn duy trì ở mức cao. Nhiều vườn bưởi đã được ký hợp đồng bao tiêu trước vụ, giúp người trồng yên tâm hơn về đầu ra.',
            'Với cá tra, các doanh nghiệp chế biến cho rằng giá tăng chủ yếu đến từ việc đẩy nhanh tiến độ đơn hàng cuối năm. Một số hộ nuôi có ao đến kỳ thu hoạch đã bán ra sớm để tránh rủi ro biến động giá trong thời gian tới.',
            'Các chuyên gia thị trường nhận định, đà tăng giá có thể chưa bền vững nếu nguồn cung sớm phục hồi hoặc nhu cầu nhập khẩu chững lại. Người sản xuất được khuyến nghị theo dõi sát diễn biến thị trường, không nên vội mở rộng diện tích chỉ vì giá tăng ngắn hạn.',
            'Ngoài hai mặt hàng trên, giá rau củ quả đầu ngày cũng có xu hướng ổn định so với tuần trước. Người tiêu dùng được khuyến cáo nên tham khảo bảng giá của các chợ đầu mối và siêu thị để so sánh trước khi mua sắm.',
        ],
    },
    {
        id: 'kd-02',
        title: 'Chính thức giảm 30% thuế cho doanh nghiệp, hộ kinh doanh',
        summary: 'Chính sách mới áp dụng cho kỳ tính thuế tiếp theo.',
        section: 'Chính sách',
        publishedAt: '2026-11-02T08:13:00+07:00',
        image: img('kd02'),
        content: [
            'Chính sách hỗ trợ thuế mới dành cho doanh nghiệp và hộ kinh doanh vừa được công bố, nhằm giảm gánh nặng chi phí trong bối cảnh nhiều ngành còn khó khăn về đơn hàng và dòng tiền. Theo nội dung thông báo, chính sách sẽ được áp dụng cho kỳ tính thuế tiếp theo.',
            'Các đối tượng được hưởng ưu đãi chủ yếu là nhóm doanh nghiệp nhỏ và vừa, cùng hộ kinh doanh có doanh thu trong ngưỡng quy định. Doanh nghiệp cần đối chiếu điều kiện cụ thể để xác định mình có thuộc diện áp dụng hay không, vì mỗi nhóm có thể có tiêu chí khác nhau.',
            'Kế toán doanh nghiệp được khuyên nên tính toán lại dự báo thuế phải nộp trong kỳ tới, đồng thời kiểm tra hồ sơ kê khai để bảo đảm đủ căn cứ khi áp dụng ưu đãi. Việc chuẩn bị sớm sẽ giúp tránh sai sót khi quyết toán cuối năm.',
            'Các hiệp hội ngành hàng đánh giá chính sách có tác dụng tích cực đối với dòng tiền của doanh nghiệp, nhất là trong giai đoạn đầu tư và mở rộng sản xuất. Tuy nhiên, họ cũng đề nghị cơ quan chức năng sớm hướng dẫn chi tiết để tránh hiểu sai khi triển khai.',
            'Người kinh doanh được khuyến nghị theo dõi các văn bản hướng dẫn chính thức từ cơ quan thuế, không nên căn cứ vào thông tin lan truyền trên mạng xã hội khi chưa đối chiếu nguồn gốc.',
        ],
    },
    {
        id: 'kd-03',
        title: 'Tăng lương tối thiểu vùng từ 1-1-2027, cao nhất tăng tới 390.000 đồng',
        summary: 'Mức tăng cao nhất áp dụng cho vùng I, từ ngày 1-1-2027.',
        section: 'Chính sách',
        publishedAt: '2026-11-03T09:26:00+07:00',
        image: img('kd03'),
        content: [
            'Mức lương tối thiểu vùng dự kiến điều chỉnh từ ngày 1-1-2027 vừa được đưa ra lấy ý kiến, với mức tăng cao nhất áp dụng cho vùng I, nơi tập trung nhiều khu công nghiệp và đô thị lớn. Việc điều chỉnh được xây dựng trên cơ sở tình hình kinh tế xã hội và chỉ số giá tiêu dùng.',
            'Đại diện người lao động cho rằng mức tăng là cần thiết để bảo đảm đời sống công nhân trước áp lực chi phí nhà ở, đi lại và ăn uống ngày càng cao. Trong khi đó, một số doanh nghiệp sử dụng nhiều lao động giản đơn bày tỏ lo ngại về áp lực chi phí nhân công trong bối cảnh đơn hàng chưa thực sự ổn định.',
            'Các chuyên gia lao động khuyến nghị doanh nghiệp rà soát lại bảng lương, cơ cấu chi phí và kế hoạch sử dụng lao động trong năm tới để có phương án thích ứng phù hợp. Một số đơn vị có thể tính đến cải tiến quy trình hoặc tăng năng suất để bù đắp phần chi phí tăng thêm.',
            'Đối với người lao động, điều quan trọng là kiểm tra kỹ mức lương được ghi trong hợp đồng, bảo đảm không thấp hơn mức tối thiểu vùng theo quy định khi có hiệu lực. Mức lương thực nhận cũng cần được đối chiếu với các khoản phụ cấp và bảo hiểm.',
            'Theo dự kiến, các mức lương mới sẽ được công bố chính thức sau khi hoàn tất quy trình lấy ý kiến và thẩm định. Doanh nghiệp và người lao động nên theo dõi thông báo từ cơ quan có thẩm quyền để cập nhật kịp thời.',
        ],
    },
    {
        id: 'kd-04',
        title: 'Thành phố mở thêm không gian công cộng ven sông',
        summary: 'Các tuyến đường đi bộ và công viên mới được quy hoạch dọc bờ sông.',
        section: 'Thị trường',
        publishedAt: '2026-11-04T07:39:00+07:00',
        image: img('kd04'),
        content: [
            'Thành phố vừa công bố quy hoạch mở thêm nhiều không gian công cộng dọc bờ sông, bao gồm các tuyến đường đi bộ, công viên và khu sinh hoạt cộng đồng. Dự án được kỳ vọng không chỉ cải thiện chất lượng sống mà còn tạo động lực cho hoạt động kinh doanh dịch vụ quanh khu vực.',
            'Theo quy hoạch, các tuyến đi bộ sẽ được nối liền với hệ thống giao thông công cộng hiện hữu, thuận tiện cho người dân và du khách tiếp cận. Dọc theo tuyến, nhiều vị trí được dành cho cửa hàng, quán cà phê và không gian trưng bày sản phẩm địa phương.',
            'Giới kinh doanh bất động sản và dịch vụ cho rằng khu vực ven sông có thể trở thành điểm nóng thương mại mới. Tuy nhiên, các chuyên gia đô thị lưu ý cần kiểm soát mật độ xây dựng để không làm mất đi tính chất không gian mở mà quy hoạch hướng tới.',
            'Các hộ kinh doanh nhỏ trong khu vực được khuyến khích tham gia lấy ý kiến và đăng ký ưu tiên thuê mặt bằng khi dự án triển khai. Chính quyền địa phương cho biết sẽ công bố lộ trình thi công theo từng giai đoạn để người dân và doanh nghiệp chủ động chuẩn bị.',
            'Dự án dự kiến được triển khai trong nhiều năm, với giai đoạn đầu tập trung vào các đoạn đường và công viên có sẵn nền tảng hạ tầng, giúp đưa không gian mới vào sử dụng nhanh hơn.',
        ],
    },
    {
        id: 'kd-05',
        title: 'Đề xuất những giải pháp mới để giảm ùn tắc vào giờ cao điểm',
        summary: 'Đề xuất tập trung vào phân luồng và mở rộng vận tải công cộng.',
        section: 'Chính sách',
        publishedAt: '2026-11-05T08:52:00+07:00',
        image: img('kd05'),
        content: [
            'Nhiều đề xuất mới nhằm giảm ùn tắc giao thông vào giờ cao điểm vừa được đưa ra tại một hội nghị chuyên đề. Trọng tâm là phân luồng phương tiện hợp lý, mở rộng vận tải công cộng và điều chỉnh thời gian làm việc, học tập ở một số khu vực đông dân cư.',
            'Đại diện các doanh nghiệp vận tải cho rằng mở thêm tuyến xe buýt và tăng tần suất chạy vào giờ cao điểm sẽ giúp giảm đáng kể lượng xe cá nhân đổ ra đường. Họ đề nghị cơ quan quản lý có chính sách ưu đãi về nhiên liệu và bến bãi để khuyến khích doanh nghiệp đầu tư.',
            'Một số chuyên gia kinh tế đô thị đề xuất áp dụng linh hoạt giờ làm việc đối với doanh nghiệp, giúp giãn bớt dòng người tham gia giao thông cùng một thời điểm. Họ cho rằng các giải pháp này cần đi kèm đánh giá tác động cụ thể đối với từng ngành nghề.',
            'Về phía doanh nghiệp bãi đỗ xe, đề xuất tập trung vào việc mở thêm điểm gửi xe tại các nút giao trọng điểm và khuyến khích người dân gửi xe ở bãi ngoài trung tâm rồi chuyển sang phương tiện công cộng. Mô hình này đã được thử nghiệm ở một số đô thị lớn trong khu vực.',
            'Các đề xuất sẽ được tổng hợp và báo cáo cơ quan có thẩm quyền để xem xét. Người dân và doanh nghiệp có thể theo dõi để nắm rõ các chính sách được áp dụng và chuẩn bị phương án di chuyển phù hợp.',
        ],
    },
    { id: 'kd-06', title: 'Cổ phiếu ngân hàng dẫn dắt thị trường phiên đầu tuần', summary: 'Thanh khoản tăng và nhiều mã vốn hóa lớn đồng loạt đi lên.', section: 'Tài chính', publishedAt: '2026-11-06T09:05:00+07:00', image: img('kd06') },
    { id: 'kd-07', title: 'Doanh nghiệp xuất khẩu tìm hướng đi mới sau biến động thương mại', summary: 'Nhiều công ty đa dạng hóa thị trường để giảm rủi ro.', section: 'Doanh nghiệp', publishedAt: '2026-11-01T07:18:00+07:00', image: img('kd07') },
    { id: 'kd-08', title: 'Đầu tư hạ tầng logistics: cơ hội cho doanh nghiệp địa phương', summary: 'Các cụm kho bãi mới được kỳ vọng kéo chi phí vận chuyển xuống.', section: 'Doanh nghiệp', publishedAt: '2026-11-02T08:31:00+07:00', image: img('kd08') },
];