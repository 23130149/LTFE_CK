import { useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { communityTopics } from '../../data/communityData.ts';
import { useCommunity } from '../../hooks/useCommunity.ts';
import { communityArticlePath } from '../../routing/routes.ts';

export default function CommunityComposer({ onPublished }: { onPublished: () => void }) {
    const { publish } = useCommunity();
    const [open, setOpen] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState<{ id: string; persisted: boolean } | null>(null);
    const trigger = useRef<HTMLButtonElement>(null);
    const submitted = useRef(false);
    function close() { setOpen(false); setError(''); trigger.current?.focus(); }
    function submit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (submitted.current) return;
        const data = new FormData(event.currentTarget);
        const result = publish({ title: String(data.get('title') || ''), content: String(data.get('content') || ''), author: String(data.get('author') || ''), topicId: String(data.get('topic') || '') });
        if (result.error || !result.id) { setError(result.error); return; }
        submitted.current = true;
        setSuccess({ id: result.id, persisted: result.persisted });
        close();
        onPublished();
    }
    return <section className="community-composer">
        <div className="community-composer__intro"><span className="community-avatar" aria-hidden="true">✎</span><div><h2>Chia sẻ câu chuyện của bạn</h2><p>Một ý kiến nhỏ có thể mở ra cuộc trò chuyện lớn.</p></div><button type="button" className="community-primary" ref={trigger} aria-expanded={open} aria-controls="community-compose-fields" onClick={() => { submitted.current = false; setSuccess(null); setOpen(value => !value); }}> {open ? 'Đóng form' : 'Chia sẻ ý kiến'}</button></div>
        <div id="community-compose-fields" hidden={!open}>
            {open && <form className="community-form" noValidate onSubmit={submit} aria-label="Đăng bài demo">
                <p className="community-muted">Bài chỉ lưu trên trình duyệt này, không gửi đến Tuổi Trẻ hoặc đăng công khai. Không nhập thông tin riêng tư. Tối đa 30 bài demo.</p>
                <label htmlFor="community-title">Tiêu đề <span>(bắt buộc, tối đa 160 ký tự)</span></label><input id="community-title" name="title" required maxLength={160} autoFocus aria-describedby={error ? 'community-compose-error' : undefined} />
                <div className="community-form__row"><div><label htmlFor="community-author">Tên hiển thị demo</label><input id="community-author" name="author" maxLength={40} placeholder="Bạn đọc · demo" autoComplete="off" /></div><div><label htmlFor="community-topic">Chủ đề (bắt buộc)</label><select id="community-topic" name="topic" required defaultValue=""><option value="" disabled>Chọn chủ đề</option>{communityTopics.map(topic => <option key={topic.id} value={topic.id}>{topic.name}</option>)}</select></div></div>
                <label htmlFor="community-content">Nội dung <span>(bắt buộc, tối đa 5.000 ký tự)</span></label><textarea id="community-content" name="content" required maxLength={5000} rows={7} />
                {error && <p className="community-error" id="community-compose-error" role="alert">{error}</p>}
                <div className="community-form__actions"><button className="community-primary" type="submit">Đăng bài demo</button><button type="button" onClick={close}>Hủy</button></div>
            </form>}
        </div>
        {success && <p className="community-success" role="status">{success.persisted ? 'Bài viết demo đã được lưu trên trình duyệt này.' : 'Bài viết demo chỉ được thêm trong phiên này vì trình duyệt không cho lưu dữ liệu.'} <Link to={communityArticlePath(success.id)}>Mở bài viết →</Link></p>}
    </section>;
}
