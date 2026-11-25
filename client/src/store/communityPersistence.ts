import { readCommunityState, writeCommunityState } from '../services/communityStorage.ts';
import communityReducer, { persistenceChanged } from './slice/CommunitySlice.ts';
import type { CommunityState } from './slice/CommunitySlice.ts';

const unavailableWarning = 'Trình duyệt không cho lưu dữ liệu mẫu.';

export function readInitialCommunityState(): CommunityState {
    const initial = readCommunityState();
    return {
        ...communityReducer(undefined, { type: '@@community/initial' }),
        local: initial.state,
        warning: initial.warning ? 'Không đọc được dữ liệu đã lưu.' : '',
        persistence: initial.warning ? 'protected' : 'ready',
    };
}

interface CommunityPersistenceStore {
    getState: () => { community: CommunityState };
    dispatch: (action: ReturnType<typeof persistenceChanged>) => unknown;
    subscribe: (listener: () => void) => () => void;
}

export function subscribeCommunityPersistence(store: CommunityPersistenceStore) {
    let previous = store.getState().community.local;
    return store.subscribe(() => {
        const current = store.getState().community;
        if (current.local === previous) return;
        previous = current.local;
        if (current.persistence === 'protected') return;
        const persisted = writeCommunityState(current.local);
        const persistence = persisted ? 'ready' : 'unavailable';
        const warning = persisted ? '' : unavailableWarning;
        if (current.persistence !== persistence || current.warning !== warning) {
            store.dispatch(persistenceChanged({ persistence, warning }));
        }
    });
}
