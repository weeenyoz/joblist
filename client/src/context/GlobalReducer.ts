import { GlobalStateProps } from './GlobalState';
import { Action } from './GlobalAction';
import { GetJobsResponse } from '../modules/Jobs/interface';
import { SET_LOADING, SEARCH_JOBS, JOBS_ERROR } from './constants';

const reducer = (state: GlobalStateProps, action: Action): GlobalStateProps => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.payload as GlobalStateProps['isLoading'],
            };
        case SEARCH_JOBS:
            return {
                ...state,
                isLoading: false,
                data: action.payload as GetJobsResponse,
            };
        case JOBS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload as GlobalStateProps['error'],
            };
        default:
            return {
                ...state,
            };
    }
};

export default reducer;
