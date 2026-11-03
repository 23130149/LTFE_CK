import { categoryMessages } from '../../config/categoryConfig';

export default function CategoryStates({ status, error, onRetry }) {
    const isError = status === 'error';
    if (status === 'loading') return <div className="category-state" role="status"><span className="category-state__loader" aria-hidden="true" />{categoryMessages.loading}</div>;
    return <div className="category-state" role={isError ? 'alert' : 'status'}>
        <h2>{isError ? categoryMessages.errorTitle : categoryMessages.emptyTitle}</h2>
        <p>{isError ? error : categoryMessages.emptyDescription}</p>
        <button type="button" onClick={onRetry}>{categoryMessages.retry}</button>
    </div>;
}
