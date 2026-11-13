import { categoryMessages } from '../../config/categoryConfig.ts';

export default function CategoryEmpty() {
    return <div className="category-state" role="status">
        <h2>{categoryMessages.emptyTitle}</h2>
        <p>{categoryMessages.emptyDescription}</p>
    </div>;
}
