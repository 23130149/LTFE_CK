import { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import CategoryImage from '../components/category/CategoryImage.tsx';
import CommunityComments from '../components/community/CommunityComments.tsx';
import { communityDate } from '../services/communityFormat.ts';
import { useAppDispatch, useAppSelector } from '../store/hooks.ts';
import { selectCommunityLikes, selectCommunityPostById, selectCommunityTopicById, selectCommunityWarning, selectRelatedCommunityPosts } from '../store/communitySelectors.ts';
import { likeToggled } from '../store/slice/CommunitySlice.ts';
import { communityArticlePath, routes } from '../routing/routes.ts';

export default function CommunityDetail() {
    const { id } = useParams();
    const { hash } = useLocation();
    const dispatch = useAppDispatch();
    const warning = useAppSelector(selectCommunityWarning);
    const likes = useAppSelector(selectCommunityLikes);
    const post = useAppSelector(state => selectCommunityPostById(state, id ?? ''));
    const topic = useAppSelector(state => selectCommunityTopicById(state, post?.topicId ?? ''));
    const related = useAppSelector(state => selectRelatedCommunityPosts(state, id ?? ''));
    const title = post ? `${post.title} | Cộng đồng — Demo` : 'Không tìm thấy thảo luận | Cộng đồng — Demo';
    useEffect(() => {
        const previous = document.title;
        document.title = title;
        return () => { document.title = previous; };
    }, [title]);
    useEffect(() => {
        if (hash === '#binh-luan') document.getElementById('binh-luan')?.scrollIntoView();
        else window.scrollTo(0, 0);
    }, [id, hash]);
    const liked = post ? likes.includes(post.id) : false;
    return <main className="community-page community-detail" id="main-content">
        <nav className="category-breadcrumb" aria-label="Đường dẫn trang"><Link to={routes.home}>Trang chủ</Link><span aria-hidden="true">/</span><Link to={routes.community}>Cộng đồng</Link><span aria-hidden="true">/</span><span aria-current="page">Thảo luận</span></nav>
        {warning && <p className="community-error" role="status">{warning}</p>}
        {!post ? <section className="community-empty"><h1>Thảo luận không tồn tại</h1><p>Bài demo có thể thuộc một trình duyệt khác hoặc chưa được lưu. Hãy chọn bài trong danh sách hiện tại.</p><Link to={routes.community}>← Về Cộng đồng</Link></section> : <>
            <article><Link className="community-topic-label" to={`${routes.community}?muc=${post.topicId}`}>{topic?.name}</Link><h1>{post.title}</h1><div className="community-detail__byline"><strong>{post.author}</strong><time dateTime={post.publishedAt}>{communityDate(post.publishedAt)} · Thời gian demo</time></div>
                <div className="community-disclosure"><strong>Thảo luận demo</strong><p>Nội dung và tác giả minh họa cho đồ án. Bài do bạn tạo chỉ có trên trình duyệt này, không được gửi đến Tuổi Trẻ.</p></div>
                {post.image && <figure><CategoryImage image={post.image} priority /><figcaption>Ảnh minh họa dùng trong đồ án, không mô tả nhân vật hoặc sự kiện trong bài.</figcaption></figure>}
                <div className="community-detail__body">{post.content.split(/\n\s*\n/).map((paragraph, index) => <p key={`${post.id}-${index}`}>{paragraph}</p>)}</div>
                <div className="community-post__actions"><button type="button" aria-pressed={liked} onClick={() => dispatch(likeToggled(post.id))}>♡ {liked ? 'Đã đồng cảm' : 'Đồng cảm'} · {post.demoLikes + Number(liked)} (demo)</button><Link to={routes.community}>← Về Cộng đồng</Link></div>
            </article>
            <CommunityComments key={post.id} postId={post.id} />
            {related.length > 0 && <section className="community-related"><h2>Cùng chủ đề {topic?.name}</h2><ul>{related.map(item => <li key={item.id}><Link to={communityArticlePath(item.id)}>{item.title} →</Link></li>)}</ul></section>}
        </>}
    </main>;
}
