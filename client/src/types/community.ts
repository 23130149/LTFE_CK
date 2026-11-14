import type { CategoryImageData } from './category.ts';

export interface CommunityTopic {
    id: string;
    name: string;
    description: string;
    symbol: string;
}

export interface CommunityPost {
    id: string;
    title: string;
    content: string;
    author: string;
    topicId: string;
    publishedAt: string;
    demoLikes: number;
    image?: CategoryImageData;
}

export interface CommunityComment {
    id: string;
    postId: string;
    author: string;
    content: string;
    createdAt: string;
}

export interface CommunityPoll {
    id: string;
    question: string;
    options: readonly { id: string; label: string; demoVotes: number }[];
}

export interface CommunityBrowserState {
    version: 1;
    posts: CommunityPost[];
    comments: CommunityComment[];
    memberships: string[];
    likes: string[];
    votes: Record<string, string>;
}

export type CommunityPostInput = Pick<CommunityPost, 'title' | 'content' | 'author' | 'topicId'>;
