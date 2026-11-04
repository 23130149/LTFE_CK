export default function ArticleCard({ article, showSapo = true }) {
    const url = `/bai/${article.id}`;
    return (
        <article className="box-category-item">
            <a href={url} className="box-category-link-with-avatar img-resize">
                <img src={article.image} alt={article.title} />
            </a>
            <div className="box-category-content">
                <h3 className="box-category-title-text">
                    <a href={url} className="box-category-link-title">{article.title}</a>
                </h3>
                <a href="#" className="box-category-category">{article.zone}</a>
                <span className="box-category-time">{article.time}</span>
                {showSapo && <p className="box-category-sapo">{article.sapo}</p>}
            </div>
        </article>
    );
}