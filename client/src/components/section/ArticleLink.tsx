import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { SectionArticle } from '../../types/Article.ts'

export default function ArticleLink({ article, className, children }: { article: SectionArticle; className?: string; children: ReactNode }) {
    if (!article.href) return <span className={className}>{children}</span>
    return <Link to={article.href} className={className}>{children}</Link>
}
