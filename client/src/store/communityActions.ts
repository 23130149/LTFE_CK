import type { ThunkAction, UnknownAction } from '@reduxjs/toolkit';
import { communityLimits, validateCommunityPost } from '../services/communityStorage.ts';
import type { CommunityPostInput } from '../types/community.ts';
import type { RootState } from './Store.ts';
import { selectCommunityPostById } from './communitySelectors.ts';
import { commentAdded, pollVoted, postPublished } from './slice/CommunitySlice.ts';

type CommunityThunk<Result> = ThunkAction<Result, RootState, unknown, UnknownAction>;
type PublishResult = { error: string; persisted: boolean; id?: string };

export const publishCommunityPost = (input: CommunityPostInput): CommunityThunk<PublishResult> => (dispatch, getState) => {
    const clean = { title: input.title.trim(), content: input.content.trim(), topicId: input.topicId, author: input.author.trim() || 'Bạn đọc · demo' };
    const error = validateCommunityPost(clean);
    if (error) return { error, persisted: false };
    if (getState().community.local.posts.length >= communityLimits.posts) return { error: 'Bản demo cho phép tối đa 30 bài trên trình duyệt này.', persisted: false };
    const post = { ...clean, id: `local-post-${crypto.randomUUID()}`, publishedAt: new Date().toISOString(), demoLikes: 0 };
    dispatch(postPublished(post));
    return { error: '', persisted: getState().community.persistence === 'ready', id: post.id };
};

export const commentOnCommunityPost = (postId: string, author: string, content: string): CommunityThunk<string> => (dispatch, getState) => {
    const clean = content.trim(), name = author.trim() || 'Bạn đọc · demo';
    if (!clean || clean.length > communityLimits.comment) return 'Nhập bình luận từ 1 đến 1.000 ký tự.';
    if (name.length > communityLimits.author) return 'Tên hiển thị tối đa 40 ký tự.';
    if (!selectCommunityPostById(getState(), postId)) return 'Bài viết không tồn tại.';
    if (getState().community.local.comments.length >= communityLimits.comments) return 'Bản demo đã đạt giới hạn 200 bình luận trên trình duyệt này.';
    dispatch(commentAdded({ id: `local-comment-${crypto.randomUUID()}`, postId, author: name, content: clean, createdAt: new Date().toISOString() }));
    return '';
};

export const voteInCommunityPoll = (pollId: string, optionId: string): CommunityThunk<boolean> => (dispatch, getState) => {
    const { polls, local } = getState().community;
    if (local.votes[pollId] || !polls.some(poll => poll.id === pollId && poll.options.some(option => option.id === optionId))) return false;
    dispatch(pollVoted({ pollId, optionId }));
    return true;
};
