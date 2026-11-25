import type { ReactNode } from 'react';
import { CommunityContext } from '../../hooks/useCommunity.ts';
import { useAppDispatch, useAppSelector } from '../../store/hooks.ts';
import { selectCommunityComments, selectCommunityLocalState, selectCommunityPosts, selectCommunityWarning } from '../../store/communitySelectors.ts';
import { commentOnCommunityPost, publishCommunityPost, voteInCommunityPoll } from '../../store/communityActions.ts';
import { commentRemoved, likeToggled, membershipToggled } from '../../store/slice/CommunitySlice.ts';
import '../../styles/community.css';

export default function CommunityProvider({ children }: { children: ReactNode }) {
    const dispatch = useAppDispatch();
    const state = useAppSelector(selectCommunityLocalState);
    const posts = useAppSelector(selectCommunityPosts);
    const comments = useAppSelector(selectCommunityComments);
    const warning = useAppSelector(selectCommunityWarning);
    return <CommunityContext.Provider value={{
        state, posts, comments, warning,
        publish: input => dispatch(publishCommunityPost(input)),
        toggleMembership: id => { dispatch(membershipToggled(id)); },
        toggleLike: id => { dispatch(likeToggled(id)); },
        vote: (pollId, optionId) => dispatch(voteInCommunityPoll(pollId, optionId)),
        comment: (postId, author, content) => dispatch(commentOnCommunityPost(postId, author, content)),
        removeComment: id => { dispatch(commentRemoved(id)); },
    }}>{children}</CommunityContext.Provider>;
}
