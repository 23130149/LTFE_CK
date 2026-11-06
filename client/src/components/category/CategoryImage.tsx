import type { CategoryImageData } from '../../types/category.ts';
type ImageProps = { image?: Partial<CategoryImageData> | null; priority?: boolean };
import { useState } from 'react';
import { categoryMessages } from '../../config/categoryConfig.ts';

export default function CategoryImage({ image, priority = false }: ImageProps) {
    return <ImageContent key={image?.src || 'missing'} image={image} priority={priority} />;
}

function ImageContent({ image, priority }: ImageProps) {
    const [failed, setFailed] = useState(false);
    return <div className="category-image">
        {!image?.src || failed ? <div className="category-image__fallback" role="img" aria-label={categoryMessages.missingImage}>
            <svg viewBox="0 0 64 48" width="64" height="48" aria-hidden="true"><path d="M6 8h21l5 5 5-5h21v31H37l-5 5-5-5H6zM32 13v31M13 17h10m-10 7h10m18-7h10m-10 7h10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>
            <span>{categoryMessages.missingImage}</span>
        </div> : <img src={image.src} alt={image.alt || ''} width="720" height="450" loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} decoding="async" onError={() => setFailed(true)} />}
    </div>;
}
