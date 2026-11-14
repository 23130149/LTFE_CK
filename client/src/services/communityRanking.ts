import type { CommunityComment, CommunityPost } from '../types/community.ts';

export function communityScore(post: CommunityPost, likes: readonly string[], comments: readonly CommunityComment[]): number {
    return post.demoLikes + Number(likes.includes(post.id)) + 2 * comments.filter(item => item.postId === post.id).length;
}

export function pollPercentages(counts: readonly number[]): number[] {
    const total = counts.reduce((sum, count) => sum + count, 0);
    if (total === 0) return counts.map(() => 0);
    const exact = counts.map(count => count * 100 / total);
    const rounded = exact.map(Math.floor);
    const rest = 100 - rounded.reduce((sum, count) => sum + count, 0);
    exact.map((value, index) => ({ index, fraction: value - rounded[index] }))
        .sort((a, b) => b.fraction - a.fraction || a.index - b.index).slice(0, rest)
        .forEach(({ index }) => { rounded[index] += 1; });
    return rounded;
}
