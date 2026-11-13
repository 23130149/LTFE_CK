import { Link } from 'react-router-dom';
import { useCommunity } from '../../hooks/useCommunity.ts';
import { communityTopics } from '../../data/communityData.ts';
import { communityArticlePath } from '../../routing/routes.ts';
import { communityScore } from '../../services/communityRanking.ts';
import CommunityPolls from './CommunityPolls.tsx';

export default function CommunitySidebar({ topicId, onTopic }: { topicId: string; onTopic: (id: string) => void }) {
    const { posts, comments, state } = useCommunity();
    const hot = [...posts].sort((a, b) => communityScore(b, state.likes, comments) - communityScore(a, state.likes, comments) || Date.parse(b.publishedAt) - Date.parse(a.publishedAt) || a.id.localeCompare(b.id)).slice(0, 5);
    return <aside className="community-sidebar" aria-label="Khám phá và bình chọn">
        <section className="community-panel community-trends"><h2>XU HƯỚNG THẢO LUẬN</h2><p className="community-muted">Khám phá chủ đề trong dữ liệu demo.</p><div className="community-tags"><button type="button" aria-pressed={!topicId} onClick={() => onTopic('')}>Tất cả</button>{communityTopics.map(topic => <button type="button" key={topic.id} aria-pressed={topicId === topic.id} onClick={() => onTopic(topic.id)}># {topic.name}</button>)}</div></section>
        <CommunityPolls />
        <section className="community-panel community-hot"><h2>ĐIỂM NÓNG CỘNG ĐỒNG</h2><p className="community-muted">Nổi bật trong dữ liệu demo. Điểm = đồng cảm minh họa + 2 × bình luận demo.</p><ol>{hot.map(post => <li key={post.id}><span>{communityTopics.find(topic => topic.id === post.topicId)?.name}</span><h3><Link to={communityArticlePath(post.id)}>{post.title}</Link></h3></li>)}</ol></section>
    </aside>;
}
