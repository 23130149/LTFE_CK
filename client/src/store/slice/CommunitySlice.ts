import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { communityComments, communityPolls, communityPosts, communityTopics } from '../../data/communityData.ts';
import { communityLimits, validateCommunityPost } from '../../services/communityStorage.ts';
import type { CommunityBrowserState, CommunityComment, CommunityPoll, CommunityPost, CommunityTopic } from '../../types/community.ts';

export interface CommunityState {
    topics: CommunityTopic[];
    fixturePosts: CommunityPost[];
    fixtureComments: CommunityComment[];
    polls: CommunityPoll[];
    local: CommunityBrowserState;
    warning: string;
    persistence: 'ready' | 'unavailable' | 'protected';
}

const initialState: CommunityState = {
    topics: [...communityTopics],
    fixturePosts: [...communityPosts],
    fixtureComments: [...communityComments],
    polls: [...communityPolls],
    local: { version: 1, posts: [], comments: [], memberships: ['sinh-vien', 'cong-nghe'], likes: [], votes: {} },
    warning: '',
    persistence: 'ready',
};

const communitySlice = createSlice({
    name: 'community',
    initialState,
    reducers: {
        postPublished(state, { payload: post }: PayloadAction<CommunityPost>) {
            if (validateCommunityPost(post) || !state.topics.some(topic => topic.id === post.topicId)
                || state.local.posts.length >= communityLimits.posts || !post.id.startsWith('local-post-')
                || [...state.local.posts, ...state.fixturePosts].some(item => item.id === post.id)) return;
            state.local.posts.unshift(post);
        },
        commentAdded(state, { payload: comment }: PayloadAction<CommunityComment>) {
            if (!comment.content.trim() || comment.content.length > communityLimits.comment
                || !comment.author.trim() || comment.author.length > communityLimits.author
                || state.local.comments.length >= communityLimits.comments || !comment.id.startsWith('local-comment-')
                || [...state.local.comments, ...state.fixtureComments].some(item => item.id === comment.id)
                || ![...state.local.posts, ...state.fixturePosts].some(post => post.id === comment.postId)) return;
            state.local.comments.push(comment);
        },
        commentRemoved(state, { payload: id }: PayloadAction<string>) {
            const index = state.local.comments.findIndex(comment => comment.id === id);
            if (index !== -1) state.local.comments.splice(index, 1);
        },
        membershipToggled(state, { payload: id }: PayloadAction<string>) {
            if (!state.topics.some(topic => topic.id === id)) return;
            const index = state.local.memberships.indexOf(id);
            if (index === -1) state.local.memberships.push(id);
            else state.local.memberships.splice(index, 1);
        },
        likeToggled(state, { payload: id }: PayloadAction<string>) {
            if (![...state.local.posts, ...state.fixturePosts].some(post => post.id === id)) return;
            const index = state.local.likes.indexOf(id);
            if (index === -1) state.local.likes.push(id);
            else state.local.likes.splice(index, 1);
        },
        pollVoted(state, { payload: { pollId, optionId } }: PayloadAction<{ pollId: string; optionId: string }>) {
            if (state.local.votes[pollId] || !state.polls.some(poll => poll.id === pollId && poll.options.some(option => option.id === optionId))) return;
            state.local.votes[pollId] = optionId;
        },
        persistenceChanged(state, { payload }: PayloadAction<Pick<CommunityState, 'persistence' | 'warning'>>) {
            state.persistence = payload.persistence;
            state.warning = payload.warning;
        },
    },
});

export const { postPublished, commentAdded, commentRemoved, membershipToggled, likeToggled, pollVoted, persistenceChanged } = communitySlice.actions;
export default communitySlice.reducer;