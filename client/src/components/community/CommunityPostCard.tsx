import { Link } from 'react-router-dom';
import CategoryImage from '../category/CategoryImage.tsx';
import { communityTopics } from '../../data/communityData.ts';
import { useCommunity } from '../../hooks/useCommunity.ts';
import { communityArticlePath, routes } from '../../routing/routes.ts';
import type { CommunityPost } from '../../types/community.ts';
import { communityDate } from '../../services/communityFormat.ts';

export default function CommunityPostCard({ post }: { post: CommunityPost }) {
    const { state, comments, toggleLike } = useCommunity();
    const liked = state.likes.includes(post.id);
    const topic = communityTopics.find(item => item.id === post.topicId);
    const commentCount = comments.filter(item => item.postId === post.id).length;
    return <article className="community-post" data-post-id={post.id}>
        <div className="community-post__byline"><span className="community-avatar" aria-hidden="true">{post.author.slice(0, 1)}</span><div><strong>{post.author}</strong><time dateTime={post.publishedAt}>{communityDate(post.publishedAt)} · Thời gian demo</time></div></div>
        <Link className="community-topic-label" to={`${routes.community}?muc=${post.topicId}`}>{topic?.name}</Link>
        <h3><Link to={communityArticlePath(post.id)}>{post.title}</Link></h3>
        <p className="community-post__summary">{post.content.split('\n\n')[0]}</p>
        {post.image && <Link to={communityArticlePath(post.id)} aria-label={`Đọc: ${post.title}`}><CategoryImage image={post.image} /></Link>}
        <div className="community-post__actions"><button type="button" aria-pressed={liked} onClick={() => toggleLike(post.id)}>♡ {liked ? 'Đã đồng cảm' : 'Đồng cảm'} · {post.demoLikes + Number(liked)}</button><Link to={`${communityArticlePath(post.id)}#binh-luan`}>{commentCount} bình luận demo →</Link></div>
    </article>;
}
