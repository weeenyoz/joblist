import axios from 'axios';
import { GlobalStateProps } from './GlobalState';
import { GetJobsResponse } from '../modules/Jobs/interface';
import { SET_LOADING, SEARCH_JOBS, JOBS_ERROR } from './constants';

export interface SetLoadingAction {
    type: string;
    payload: boolean;
}

export interface SearchJobsAction {
    type: string;
    payload: GetJobsResponse | GlobalStateProps['error'];
}

export type Action = SearchJobsAction | SetLoadingAction;

export const setLoading = (status: boolean): SetLoadingAction => {
    return {
        type: SET_LOADING,
        payload: status,
    };
};

export const getJobs = async (query: string): Promise<SearchJobsAction> => {
    try {
        const result = await axios.get(
            `https://search.bossjob.com/api/v1/search/job_filter?size=12&query=${query}`,
        );

        const data = result.data.data;

        return {
            type: SEARCH_JOBS,
            payload: data,
        };
    } catch (error) {
        return {
            type: JOBS_ERROR,
            payload: 'An Error Occured',
        };
    }
};
