import { useState } from 'react';
import { Link } from 'react-router-dom';
import { communityTopics } from '../../data/communityData.ts';
import { useCommunity } from '../../hooks/useCommunity.ts';
import { routes } from '../../routing/routes.ts';
import type { CommunityTopic } from '../../types/community.ts';

export default function CommunityGroups() {
    const { state } = useCommunity();
    return <div className="community-groups">
        <GroupList key="yours" title="CỘNG ĐỒNG CỦA BẠN" topics={communityTopics.filter(topic => state.memberships.includes(topic.id))} own />
        <GroupList key="suggested" title="GỢI Ý CỘNG ĐỒNG" topics={communityTopics.filter(topic => !state.memberships.includes(topic.id))} />
    </div>;
}

function GroupList({ title, topics, own = false }: { title: string; topics: readonly CommunityTopic[]; own?: boolean }) {
    const [expanded, setExpanded] = useState(false);
    const { posts, toggleMembership } = useCommunity();
    return <section className="community-group-section" aria-label={title}>
        <h2>{title}</h2><p className="community-muted">{own ? 'Lựa chọn demo trên trình duyệt; ban đầu chọn sẵn Sinh viên và Công nghệ.' : 'Khám phá những câu chuyện gần gũi với bạn.'}</p>
        {topics.length ? <ul>{topics.slice(0, expanded ? topics.length : 2).map(topic => <li key={topic.id} className="community-group"><span className={`community-group__symbol community-group__symbol--${topic.id}`} aria-hidden="true">{topic.symbol}</span><div><h3><Link to={`${routes.community}?muc=${topic.id}`}>{topic.name}</Link></h3><p>{topic.description}</p><span className="community-muted">{posts.filter(post => post.topicId === topic.id).length} bài demo</span></div><button type="button" aria-label={`${own ? 'Rời' : 'Tham gia'} cộng đồng ${topic.name} trong demo`} aria-pressed={own} onClick={() => toggleMembership(topic.id)}>{own ? 'Rời' : 'Tham gia'}</button></li>)}</ul> : <p className="community-empty">{own ? 'Bạn chưa chọn cộng đồng nào. Hãy tham gia một nhóm gợi ý.' : 'Bạn đã chọn tất cả cộng đồng demo.'}</p>}
        {topics.length > 2 && <button type="button" className="community-text-button" aria-expanded={expanded} onClick={() => setExpanded(value => !value)}>{expanded ? 'Thu gọn' : `Xem thêm cộng đồng (${topics.length - 2})`} →</button>}
    </section>;
}
