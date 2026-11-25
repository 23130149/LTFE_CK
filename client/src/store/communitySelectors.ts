import { createSelector } from '@reduxjs/toolkit';
import { communityScore, pollPercentages } from '../services/communityRanking.ts';
import type { RootState } from './Store.ts';

export type CommunityTab = 'moi-nhat' | 'thinh-hanh' | 'da-tham-gia';

export const selectCommunityTopics = (state: RootState) => state.community.topics;
export const selectCommunityLocalState = (state: RootState) => state.community.local;
export const selectCommunityWarning = (state: RootState) => state.community.warning;
export const selectCommunityMemberships = (state: RootState) => state.community.local.memberships;
export const selectCommunityLikes = (state: RootState) => state.community.local.likes;
export const selectCommunityVotes = (state: RootState) => state.community.local.votes;
export const selectCommunityPolls = (state: RootState) => state.community.polls;
const selectLocalPosts = (state: RootState) => state.community.local.posts;
const selectLocalComments = (state: RootState) => state.community.local.comments;
const selectFixturePosts = (state: RootState) => state.community.fixturePosts;
const selectFixtureComments = (state: RootState) => state.community.fixtureComments;
const selectId = (_state: RootState, id: string) => id;
const newestFirst = (a: { id: string; publishedAt: string }, b: { id: string; publishedAt: string }) =>
    Date.parse(b.publishedAt) - Date.parse(a.publishedAt) || a.id.localeCompare(b.id);

export const selectCommunityPosts = createSelector([selectLocalPosts, selectFixturePosts], (local, fixture) => [...local, ...fixture]);
export const selectCommunityComments = createSelector([selectFixtureComments, selectLocalComments], (fixture, local) => [...fixture, ...local]);
export const selectCommunityPostById = (state: RootState, id: string) => selectCommunityPosts(state).find(post => post.id === id);
export const selectCommunityTopicById = (state: RootState, id: string) => selectCommunityTopics(state).find(topic => topic.id === id);
export const selectCommunityCommentsByPost = createSelector([selectCommunityComments, selectId], (comments, id) => comments.filter(comment => comment.postId === id));
export const selectCommunityJoinedTopics = createSelector([selectCommunityTopics, selectCommunityMemberships], (topics, memberships) => topics.filter(topic => memberships.includes(topic.id)));
export const selectCommunitySuggestedTopics = createSelector([selectCommunityTopics, selectCommunityMemberships], (topics, memberships) => topics.filter(topic => !memberships.includes(topic.id)));
export const selectCommunityLatestPosts = createSelector([selectCommunityPosts], posts => [...posts].sort(newestFirst));
export const selectCommunityTrendingPosts = createSelector(
    [selectCommunityPosts, selectCommunityLikes, selectCommunityComments],
    (posts, likes, comments) => [...posts].sort((a, b) => communityScore(b, likes, comments) - communityScore(a, likes, comments) || newestFirst(a, b)),
);
export const selectCommunityParticipatedPosts = createSelector(
    [selectCommunityLatestPosts, selectCommunityLikes, selectLocalPosts, selectLocalComments],
    (posts, likes, localPosts, comments) => {
        const participated = new Set([...likes, ...localPosts.map(post => post.id), ...comments.map(comment => comment.postId)]);
        return posts.filter(post => participated.has(post.id));
    },
);
export const selectCommunityPostsByTopic = createSelector([selectCommunityPosts, selectId], (posts, id) => posts.filter(post => post.topicId === id));
export const selectCommunityFeed = createSelector(
    [selectCommunityLatestPosts, selectCommunityTrendingPosts, selectCommunityParticipatedPosts, selectId,
        (_state: RootState, _topicId: string, tab: CommunityTab) => tab],
    (latest, trending, participated, topicId, tab) => {
        const posts = tab === 'thinh-hanh' ? trending : tab === 'da-tham-gia' ? participated : latest;
        return topicId ? posts.filter(post => post.topicId === topicId) : posts;
    },
);
export const selectCommunityHotPosts = createSelector([selectCommunityTrendingPosts], posts => posts.slice(0, 5));
export const selectRelatedCommunityPosts = createSelector(
    [selectCommunityPosts, selectCommunityPostById],
    (posts, post) => post ? posts.filter(item => item.id !== post.id && item.topicId === post.topicId).slice(0, 3) : [],
);
export const selectCommunityPollData = createSelector(
    [selectCommunityPolls, selectCommunityVotes, selectId],
    (polls, votes, id) => {
        const poll = polls.find(item => item.id === id);
        const voted = votes[id];
        const counts = poll?.options.map(option => option.demoVotes + Number(voted === option.id)) ?? [];
        return { poll, voted, counts, total: counts.reduce((sum, count) => sum + count, 0), percentages: pollPercentages(counts) };
    },
);
