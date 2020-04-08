import { GlobalStateProps } from './GlobalState';
import { Action } from './GlobalAction';

const reducer = (state: GlobalStateProps, action: Action): GlobalStateProps => {
    switch (action.type) {
        case 'SEARCH_JOBS':
            return {
                ...state,
                jobs: [...(action.payload as GlobalStateProps['jobs']), ...state.jobs],
            };
        case 'JOBS_ERROR':
            return {
                ...state,
                error: action.payload as GlobalStateProps['error'],
            };
        default:
            return {
                ...state,
            };
    }
};

export default reducer;
