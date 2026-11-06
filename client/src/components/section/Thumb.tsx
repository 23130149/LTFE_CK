import type { Article } from '../../types/Article.ts'

type Props = { article: Article; className?: string }

// Ảnh của bài viết; nếu bài chưa có ảnh thì hiện khung trống cùng kích thước
export default function Thumb({ article, className = '' }: Props) {
    if (!article.image) return <div className={`sec-thumb sec-thumb--empty ${className}`} aria-hidden="true" />
    return <img className={`sec-thumb ${className}`} src={article.image} alt={article.title} loading="lazy" />
}
