import type { CategoryStatus } from '../../types/category.ts';
import { categoryMessages } from '../../config/categoryConfig.ts';

export default function CategoryStates({ status, error, onRetry }: { status: CategoryStatus; error?: string; onRetry?: () => void }) {
    const isError = status === 'error';
    if (status === 'loading') return <div className="category-state" role="status"><span className="category-state__loader" aria-hidden="true" />{categoryMessages.loading}</div>;
    return <div className="category-state" role={isError ? 'alert' : 'status'}>
        <h2>{isError ? categoryMessages.errorTitle : categoryMessages.emptyTitle}</h2>
        <p>{isError ? error : categoryMessages.emptyDescription}</p>
        {onRetry && <button type="button" onClick={onRetry}>{categoryMessages.retry}</button>}
    </div>;
}
