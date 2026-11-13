import { useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { communityComments, communityPolls, communityPosts } from '../../data/communityData.ts';
import { CommunityContext } from '../../hooks/useCommunity.ts';
import { communityLimits, isCommunityTopic, readCommunityState, validateCommunityPost, writeCommunityState } from '../../services/communityStorage.ts';
import type { CommunityBrowserState, CommunityPostInput } from '../../types/community.ts';
import '../../styles/community.css';

export default function CommunityProvider() {
    const [initial] = useState(readCommunityState);
    const [state, setState] = useState(initial.state);
    const [warning, setWarning] = useState(initial.warning);
    const current = useRef(state);
    const posts = [...state.posts, ...communityPosts];
    const comments = [...communityComments, ...state.comments];
    function commit(next: CommunityBrowserState): boolean {
        const persisted = writeCommunityState(next);
        current.current = next;
        setState(next);
        setWarning(persisted ? '' : 'Trình duyệt không cho lưu dữ liệu demo. Thay đổi chỉ có trong phiên này và có thể mất khi tải lại.');
        return persisted;
    }
    function toggleList(key: 'memberships' | 'likes', id: string) {
        const previous = current.current;
        const values = previous[key];
        commit({ ...previous, [key]: values.includes(id) ? values.filter(value => value !== id) : [...values, id] });
    }
    function publish(input: CommunityPostInput) {
        const clean = { title: input.title.trim(), content: input.content.trim(), topicId: input.topicId, author: input.author.trim() || 'Bạn đọc · demo' };
        const error = validateCommunityPost(clean);
        if (error) return { error, persisted: false };
        const previous = current.current;
        if (previous.posts.length >= communityLimits.posts) return { error: 'Bản demo cho phép tối đa 30 bài trên trình duyệt này.', persisted: false };
        const post = { ...clean, id: `local-post-${crypto.randomUUID()}`, publishedAt: new Date().toISOString(), demoLikes: 0 };
        const persisted = commit({ ...previous, posts: [post, ...previous.posts] });
        return { error: '', persisted, id: post.id };
    }
    return <CommunityContext.Provider value={{
        state, posts, comments, warning, publish,
        toggleMembership: id => { if (isCommunityTopic(id)) toggleList('memberships', id); },
        toggleLike: id => { if (posts.some(post => post.id === id)) toggleList('likes', id); },
        vote: (pollId, optionId) => {
            const previous = current.current;
            if (previous.votes[pollId] || !communityPolls.some(poll => poll.id === pollId && poll.options.some(option => option.id === optionId))) return false;
            commit({ ...previous, votes: { ...previous.votes, [pollId]: optionId } });
            return true;
        },
        comment: (postId, author, content) => {
            const previous = current.current;
            const clean = content.trim(), name = author.trim() || 'Bạn đọc · demo';
            if (!clean || clean.length > communityLimits.comment) return 'Nhập bình luận từ 1 đến 1.000 ký tự.';
            if (name.length > communityLimits.author) return 'Tên hiển thị tối đa 40 ký tự.';
            if (!posts.some(post => post.id === postId)) return 'Bài viết không tồn tại.';
            if (previous.comments.length >= communityLimits.comments) return 'Bản demo đã đạt giới hạn 200 bình luận trên trình duyệt này.';
            const item = { id: `local-comment-${crypto.randomUUID()}`, postId, author: name, content: clean, createdAt: new Date().toISOString() };
            commit({ ...previous, comments: [...previous.comments, item] });
            return '';
        },
        removeComment: id => { const previous = current.current; commit({ ...previous, comments: previous.comments.filter(item => item.id !== id) }); },
    }}><Outlet /></CommunityContext.Provider>;
}
