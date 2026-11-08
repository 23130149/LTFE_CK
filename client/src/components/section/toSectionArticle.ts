import type { SectionArticle } from '../../types/Article.ts'
import type { CategoryArticle } from '../../types/category.ts'

const timeFormatter = new Intl.DateTimeFormat('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh', hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit', year: 'numeric', hour12: false })

export function toSectionArticle(article: CategoryArticle): SectionArticle {
    const date = article.publishedAt ? new Date(article.publishedAt) : null
    return {
        id: article.id,
        title: article.title,
        sapo: article.summary,
        zone: article.section,
        time: date ? timeFormatter.format(date) : '',
        image: article.image.src,
    }
}
