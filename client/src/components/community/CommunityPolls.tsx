import { useState } from 'react';
import type { FormEvent } from 'react';
import { communityPolls } from '../../data/communityData.ts';
import { useCommunity } from '../../hooks/useCommunity.ts';
import { pollPercentages } from '../../services/communityRanking.ts';
import type { CommunityPoll } from '../../types/community.ts';

export default function CommunityPolls() {
    return <section className="community-panel community-polls" aria-labelledby="community-polls-title"><h2 id="community-polls-title">BÌNH CHỌN NHANH</h2><p className="community-muted">Bình chọn demo trên trình duyệt. Số ban đầu là fixture minh họa, không phải thống kê thật của Tuổi Trẻ.</p>{communityPolls.map(poll => <Poll key={poll.id} poll={poll} />)}</section>;
}

function Poll({ poll }: { poll: CommunityPoll }) {
    const { state, vote } = useCommunity();
    const voted = state.votes[poll.id];
    const [choice, setChoice] = useState('');
    const [error, setError] = useState('');
    const counts = poll.options.map(option => option.demoVotes + Number(voted === option.id));
    const total = counts.reduce((sum, count) => sum + count, 0);
    const percentages = pollPercentages(counts);
    function submit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!choice) { setError('Vui lòng chọn một đáp án trước khi bình chọn.'); return; }
        if (vote(poll.id, choice)) setError('');
    }
    return <form className="community-poll" onSubmit={submit} noValidate aria-label={poll.question}>
        <fieldset disabled={Boolean(voted)} aria-describedby={error ? `${poll.id}-error` : undefined}><legend>{poll.question}</legend>
            {voted ? <div className="community-poll__results" role="status">{poll.options.map((option, index) => <div key={option.id} className="community-poll__result"><div><span>{option.label}{voted === option.id ? ' · Bạn đã chọn' : ''}</span><strong>{percentages[index]}%</strong></div><progress value={percentages[index]} max={100} aria-label={`${option.label}: ${counts[index]} lượt demo, ${percentages[index]}%`} /></div>)}<p className="community-muted">Tổng {total} lượt demo (gồm 1 lựa chọn trên trình duyệt này).</p></div>
                : poll.options.map(option => <label key={option.id} className="community-radio"><input type="radio" name={poll.id} value={option.id} checked={choice === option.id} onChange={() => { setChoice(option.id); setError(''); }} />{option.label}</label>)}
        </fieldset>
        {error && <p id={`${poll.id}-error`} className="community-error" role="alert">{error}</p>}
        <button type="submit" disabled={Boolean(voted)}>{voted ? 'Đã bình chọn trên trình duyệt này' : 'Bình chọn'}</button>
    </form>;
}
