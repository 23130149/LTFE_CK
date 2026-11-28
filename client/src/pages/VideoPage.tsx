const videos = [
    {
        title: 'Người dân thay đổi thói quen di chuyển nhờ sự tiện lợi của metro',
        image: '/images/sections/xe.svg',
        href: 'https://tuoitre.vn/video/nguoi-dan-thay-doi-thoi-quen-di-chuyen-nho-su-tien-loi-cua-metro-202368.htm',
    },
    {
        title: 'Khám phá những không gian đọc sách tại TP.HCM',
        image: '/images/education/reading.jpg',
        href: 'https://tuoitre.vn/video/chuyen-dong-tphcm-san-toa-do-tri-thuc-diem-danh-nhung-khong-gian-doc-sach-truyen-cam-hung-tai-tphcm-202940.htm',
    },
    {
        title: 'Khám phá hang động Bo Cúng ở Thanh Hóa',
        image: '/images/sections/du-lich.svg',
        href: 'https://tuoitre.vn/video/ngam-ve-dep-hoang-so-cua-hang-dong-bo-cung-dep-nhat-xu-thanh-203128.htm',
    },
]

export default function VideoPage() {
    return <section className="container news-collection">
        <h1>Video</h1>
        <p className="news-collection__note">Chọn một video để xem trên Tuổi Trẻ Online.</p>
        <ul className="video-grid">
            {videos.map(video => <li key={video.href}>
                <a href={video.href} className="video-card">
                    <img src={video.image} alt="" loading="lazy" />
                    <span>{video.title}</span>
                </a>
            </li>)}
        </ul>
    </section>
}
