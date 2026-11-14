import { useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { useCommunity } from '../../hooks/useCommunity.ts';
import { communityDate } from '../../services/communityFormat.ts';

export default function CommunityComments({ postId }: { postId: string }) {
    const { state, comments, comment, removeComment } = useCommunity();
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const submitted = useRef(false);
    const items = comments.filter(item => item.postId === postId);
    function submit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (submitted.current) return;
        const form = event.currentTarget;
        const data = new FormData(form);
        const result = comment(postId, String(data.get('author') || ''), String(data.get('content') || ''));
        setError(result);
        if (!result) { submitted.current = true; form.reset(); setMessage('Đã thêm bình luận demo trên trình duyệt này; không gửi lên server.'); }
    }
    return <section className="community-comments" id="binh-luan" tabIndex={-1} aria-labelledby="community-comments-title">
        <h2 id="community-comments-title">Góc trò chuyện <span>({items.length})</span></h2><p className="community-muted">Bình luận demo, hiển thị trên trình duyệt này. Không nhập thông tin riêng tư.</p>
        <form className="community-form" noValidate onSubmit={submit} onChange={() => { submitted.current = false; setMessage(''); }} aria-label="Bình luận demo">
            <label htmlFor="comment-author">Tên hiển thị demo</label><input id="comment-author" name="author" maxLength={40} placeholder="Bạn đọc · demo" autoComplete="off" />
            <label htmlFor="comment-content">Bình luận (bắt buộc, tối đa 1.000 ký tự)</label><textarea id="comment-content" name="content" rows={4} required maxLength={1000} aria-describedby={error ? 'community-comment-error' : undefined} />
            {error && <p className="community-error" id="community-comment-error" role="alert">{error}</p>}<button type="submit" className="community-primary">Gửi bình luận demo</button>
            {message && <p role="status" className="community-success">{message}</p>}
        </form>
        {items.length ? <ul className="community-comment-list">{items.map(item => <li key={item.id}><div className="community-comment__meta"><strong>{item.author}</strong><time dateTime={item.createdAt}>{communityDate(item.createdAt)} · demo</time></div><p>{item.content}</p>{state.comments.some(own => own.id === item.id) && <button type="button" className="community-text-button" onClick={() => { removeComment(item.id); setMessage('Đã xóa bình luận bạn tạo trong demo.'); }}>Xóa bình luận của bạn</button>}</li>)}</ul> : <p className="community-empty">Chưa có bình luận demo. Hãy mở đầu bằng một chia sẻ tôn trọng.</p>}
    </section>;
}
