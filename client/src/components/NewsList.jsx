import ArticleCard from './ArticleCard';

export default function NewsList({ articles }) {
    return (
        <section className="container section__middle-news">
            <div className="section__mn-flex">
                <div className="section__mn-main">
                    {articles.map((a) => (
                        <div key={a.id} className="news-row"><ArticleCard article={a} /></div>
                    ))}
                </div>
                <div className="section__mn-sub">
                    <div className="ad-placeholder tall">Quảng cáo / Xem nhiều</div>
                </div>
            </div>
        </section>
    );
}