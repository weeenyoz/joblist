import { GlobalStateProps } from './GlobalState';
import { Action } from './GlobalAction';
import { GetJobsResponse } from '../modules/Jobs/interface';

const reducer = (state: GlobalStateProps, action: Action): GlobalStateProps => {
    switch (action.type) {
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: action.payload as GlobalStateProps['isLoading'],
            };
        case 'SEARCH_JOBS':
            return {
                ...state,
                isLoading: false,
                data: action.payload as GetJobsResponse,
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
