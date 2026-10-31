import { hotTags } from '../data/menu';

export default function HotTags() {
    return (
        <div className="container">
            <div className="section__ht-flex">
                <span className="btn-nn">Chủ đề nổi bật</span>
                <div className="list-tag">
                    {hotTags.map((t) => <a key={t} href="#" className="item">{t}</a>)}
                </div>
            </div>
        </div>
    );
}