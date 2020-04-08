import { GlobalStateProps } from './GlobalState';
import { GetJobsResponse } from '../modules/Jobs/interface';
import axios from 'axios';

export interface SearchJobsAction {
    type: string;
    payload: GetJobsResponse | GlobalStateProps['error'];
}

export type Action = SearchJobsAction;

export const getJobs = async (query: string): Promise<SearchJobsAction> => {
    try {
        const result = await axios.get(
            `https://search.bossjob.com/api/v1/search/job_filter?size=10&query=${query}`,
        );

        const data = result.data.data;

        return {
            type: 'SEARCH_JOBS',
            payload: data,
        };
    } catch (error) {
        return {
            type: 'JOBS_ERROR',
            payload: error.error,
        };
    }
};
