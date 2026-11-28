import { Link } from 'react-router-dom'
import { hotTags } from '../data/menu.ts'
import { newsTopicPath } from '../routing/routes.ts'

export default function HotTags() {
    return (
        <div className="container">
            <div className="section__ht-flex">
                <span className="btn-nn">Chủ đề nổi bật</span>
                <div className="list-tag">
                    {hotTags.map((t) => <Link key={t} to={newsTopicPath(t)} className="item">{t}</Link>)}
                </div>
            </div>
        </div>
    )
}
