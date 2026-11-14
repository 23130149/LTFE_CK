import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import CommunityComposer from '../components/community/CommunityComposer.tsx';
import CommunityGroups from '../components/community/CommunityGroups.tsx';
import CommunityPostCard from '../components/community/CommunityPostCard.tsx';
import CommunitySidebar from '../components/community/CommunitySidebar.tsx';
import { communityTopics } from '../data/communityData.ts';
import { useCommunity } from '../hooks/useCommunity.ts';
import { communityScore } from '../services/communityRanking.ts';
import { routes } from '../routing/routes.ts';
import type { CommunityPost } from '../types/community.ts';

const tabs = [{ id: 'moi-nhat', label: 'Mới nhất' }, { id: 'thinh-hanh', label: 'Thịnh hành' }, { id: 'da-tham-gia', label: 'Đã tham gia' }] as const;

export default function CommunityPage() {
    const { posts, state, comments, warning } = useCommunity();
    const [params, setParams] = useSearchParams();
    const topicId = params.get('muc') || '';
    const tab = tabs.find(item => item.id === params.get('tab'))?.id || 'moi-nhat';
    const topic = communityTopics.find(item => item.id === topicId);
    useEffect(() => {
        const previous = document.title;
        document.title = 'Cộng đồng | Tuổi Trẻ — Demo học tập';
        return () => { document.title = previous; };
    }, []);
    function change(key: string, value: string) {
        const next = new URLSearchParams(params);
        if (value) next.set(key, value); else next.delete(key);
        setParams(next, { preventScrollReset: true });
    }
    function resetAfterPublish() {
        const next = new URLSearchParams(params);
        next.delete('muc'); next.delete('tab');
        setParams(next, { preventScrollReset: true });
    }
    const participated = new Set([...state.likes, ...state.posts.map(post => post.id), ...state.comments.map(comment => comment.postId)]);
    const filtered = posts.filter(post => (!topicId || post.topicId === topicId) && (tab !== 'da-tham-gia' || participated.has(post.id)));
    const sorted = [...filtered].sort((a, b) => (tab === 'thinh-hanh' ? communityScore(b, state.likes, comments) - communityScore(a, state.likes, comments) : 0)
        || Date.parse(b.publishedAt) - Date.parse(a.publishedAt) || a.id.localeCompare(b.id));
    return <main className="community-page" id="main-content">
        <nav className="category-breadcrumb" aria-label="Đường dẫn trang"><Link to={routes.home}>Trang chủ</Link><span aria-hidden="true">/</span><span aria-current="page">Cộng đồng</span></nav>
        <div className="community-heading"><div><span className="community-eyebrow">KẾT NỐI · LẮNG NGHE · CHIA SẺ</span><h1>CỘNG ĐỒNG</h1></div><p>Câu chuyện của bạn,<br />góc nhìn của chúng ta.</p></div>
        <div className="community-disclosure"><strong>Không gian demo học tập</strong><p>Bài viết, tác giả, thời gian và số tương tác đều là minh họa. Hoạt động chỉ được lưu trên trình duyệt này; không có tài khoản hay kết nối hệ thống Tuổi Trẻ.</p></div>
        {warning && <p className="community-error" role="status">{warning}</p>}
        <CommunityGroups />
        <div className="community-layout"><div className="community-feed">
            <CommunityComposer onPublished={resetAfterPublish} />
            <section aria-labelledby="community-feed-title" className="community-discussions"><h2 id="community-feed-title">Cùng nhau trò chuyện</h2>
                <nav className="community-tabs" aria-label="Sắp xếp thảo luận">{tabs.map(item => <button key={item.id} type="button" aria-pressed={tab === item.id} onClick={() => change('tab', item.id === 'moi-nhat' ? '' : item.id)}>{item.label}</button>)}</nav>
                <p className="community-muted community-sort-note">{tab === 'thinh-hanh' ? 'Xếp theo điểm demo: đồng cảm + 2 × bình luận; cùng điểm ưu tiên bài mới.' : tab === 'da-tham-gia' ? 'Các bài bạn đã đồng cảm, bình luận hoặc tự đăng trong demo trên trình duyệt này.' : 'Sắp xếp theo thời gian đăng trong fixture và bài bạn tự tạo.'}</p>
                <div className="community-filter-summary"><p role="status">{sorted.length} thảo luận{topicId ? ` · ${topic?.name || 'Chủ đề không tồn tại'}` : ' · Tất cả chủ đề'}</p>{topicId && <button type="button" onClick={() => change('muc', '')}>Bỏ lọc chủ đề</button>}</div>
                <DiscussionList key={`${topicId}:${tab}:${posts.length}`} posts={sorted} onReset={() => { const next = new URLSearchParams(params); next.delete('muc'); next.delete('tab'); setParams(next); }} />
            </section>
        </div><CommunitySidebar topicId={topicId} onTopic={id => change('muc', id)} /></div>
    </main>;
}

function DiscussionList({ posts, onReset }: { posts: readonly CommunityPost[]; onReset: () => void }) {
    const [visible, setVisible] = useState(5);
    if (!posts.length) return <div className="community-empty"><h3>Chưa có thảo luận phù hợp</h3><p>Thử chủ đề khác hoặc đồng cảm, bình luận, đăng bài demo để tạo hoạt động của bạn.</p><button type="button" onClick={onReset}>Xem tất cả thảo luận</button></div>;
    return <><div className="community-post-list">{posts.slice(0, visible).map(post => <CommunityPostCard key={post.id} post={post} />)}</div><div className="community-more"><p className="community-muted" role="status">Đang hiển thị {Math.min(visible, posts.length)}/{posts.length} thảo luận</p>{visible < posts.length ? <button type="button" onClick={() => setVisible(count => count + 5)}>Xem thêm thảo luận ↓</button> : <p>Bạn đã xem hết thảo luận phù hợp.</p>}</div></>;
}
