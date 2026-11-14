import { communityPolls, communityPosts, communityTopics } from '../data/communityData.ts';
import type { CommunityBrowserState, CommunityComment, CommunityPost, CommunityPostInput } from '../types/community.ts';

export const communityStorageKey = 'ltfe-ck:community:v1';
export const communityLimits = { posts: 30, comments: 200, title: 160, content: 5000, author: 40, comment: 1000 } as const;
const record = (value: unknown): value is Record<string, unknown> => typeof value === 'object' && value !== null && !Array.isArray(value);
const text = (value: unknown, max: number): value is string => typeof value === 'string' && value.trim().length > 0 && value.length <= max;
const date = (value: unknown): value is string => typeof value === 'string' && value.length <= 40 && Number.isFinite(Date.parse(value));
const localId = (value: unknown, prefix: string): value is string => typeof value === 'string' && value.startsWith(prefix) && /^[a-z0-9-]{1,80}$/.test(value);
export const isCommunityTopic = (id: unknown): id is string => communityTopics.some(topic => topic.id === id);

export function validateCommunityPost(input: CommunityPostInput): string {
    if (!input.title.trim() || input.title.length > communityLimits.title) return 'Nhập tiêu đề từ 1 đến 160 ký tự.';
    if (!input.content.trim() || input.content.length > communityLimits.content) return 'Nhập nội dung từ 1 đến 5.000 ký tự.';
    if (!isCommunityTopic(input.topicId)) return 'Vui lòng chọn một chủ đề hợp lệ.';
    if (input.author.length > communityLimits.author) return 'Tên hiển thị tối đa 40 ký tự.';
    return '';
}

function validPost(value: unknown): value is CommunityPost {
    return record(value) && localId(value.id, 'local-post-') && text(value.title, communityLimits.title)
        && text(value.content, communityLimits.content) && text(value.author, communityLimits.author)
        && isCommunityTopic(value.topicId) && date(value.publishedAt) && value.demoLikes === 0 && value.image === undefined;
}

function validComment(value: unknown, postIds: Set<string>): value is CommunityComment {
    return record(value) && localId(value.id, 'local-comment-') && typeof value.postId === 'string' && postIds.has(value.postId)
        && text(value.author, communityLimits.author) && text(value.content, communityLimits.comment) && date(value.createdAt);
}

const uniqueIds = (values: { id: string }[]) => new Set(values.map(value => value.id)).size === values.length;
const stringList = (value: unknown, max: number, valid: (id: unknown) => boolean): value is string[] => Array.isArray(value)
    && value.length <= max && value.every(id => typeof id === 'string' && valid(id)) && new Set(value).size === value.length;

export function parseCommunityState(value: unknown): CommunityBrowserState | null {
    if (!record(value) || value.version !== 1 || !Array.isArray(value.posts) || value.posts.length > communityLimits.posts
        || !value.posts.every(validPost) || !uniqueIds(value.posts)) return null;
    const posts = value.posts.map(({ id, title, content, author, topicId, publishedAt }) => ({ id, title, content, author, topicId, publishedAt, demoLikes: 0 }));
    const postIds = new Set([...communityPosts, ...posts].map(post => post.id));
    if (!Array.isArray(value.comments) || value.comments.length > communityLimits.comments
        || !value.comments.every(item => validComment(item, postIds)) || !uniqueIds(value.comments)
        || !stringList(value.memberships, communityTopics.length, isCommunityTopic)
        || !stringList(value.likes, postIds.size, id => typeof id === 'string' && postIds.has(id)) || !record(value.votes)) return null;
    const votes = value.votes;
    const checkedVotes: Record<string, string> = {};
    for (const [id, choice] of Object.entries(votes)) {
        if (typeof choice !== 'string' || !communityPolls.some(poll => poll.id === id && poll.options.some(option => option.id === choice))) return null;
        checkedVotes[id] = choice;
    }
    return {
        version: 1, posts,
        comments: value.comments.map(({ id, postId, author, content, createdAt }) => ({ id, postId, author, content, createdAt })),
        memberships: [...value.memberships], likes: [...value.likes], votes: checkedVotes,
    };
}

export function readCommunityState(): { state: CommunityBrowserState; warning: string } {
    const state: CommunityBrowserState = { version: 1, posts: [], comments: [], memberships: ['sinh-vien', 'cong-nghe'], likes: [], votes: {} };
    try {
        const raw = localStorage.getItem(communityStorageKey);
        if (!raw) return { state, warning: '' };
        if (raw.length > 400_000) throw new Error('oversized');
        const parsed = parseCommunityState(JSON.parse(raw));
        if (!parsed) throw new Error('invalid');
        return { state: parsed, warning: '' };
    } catch {
        return { state, warning: 'Không đọc được dữ liệu demo đã lưu. Trang dùng dữ liệu ban đầu; thao tác mới sẽ thử lưu lại trên trình duyệt này.' };
    }
}

export function writeCommunityState(state: CommunityBrowserState): boolean {
    try { const raw = JSON.stringify(state); if (raw.length > 400_000) return false; localStorage.setItem(communityStorageKey, raw); return true; }
    catch { return false; }
}
