import { createContext, useContext } from 'react';
import type { CommunityBrowserState, CommunityComment, CommunityPost, CommunityPostInput } from '../types/community.ts';

export interface CommunityContextValue {
    state: CommunityBrowserState;
    posts: readonly CommunityPost[];
    comments: readonly CommunityComment[];
    warning: string;
    toggleMembership: (id: string) => void;
    toggleLike: (id: string) => void;
    vote: (pollId: string, optionId: string) => boolean;
    publish: (input: CommunityPostInput) => { error: string; persisted: boolean; id?: string };
    comment: (postId: string, author: string, content: string) => string;
    removeComment: (id: string) => void;
}

export const CommunityContext = createContext<CommunityContextValue | null>(null);

export function useCommunity(): CommunityContextValue {
    const value = useContext(CommunityContext);
    if (!value) throw new Error('Missing Community provider');
    return value;
}
