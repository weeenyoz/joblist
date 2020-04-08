import { GlobalStateProps } from './GlobalState';
import axios from 'axios';

export interface SearchJobsAction {
    type: string;
    payload: GlobalStateProps['jobs'] | GlobalStateProps['error'];
}

export type Action = SearchJobsAction;

export const getJobs = async (query: string): Promise<SearchJobsAction> => {
    try {
        const result = await axios.get(
            `https://search.bossjob.com/api/v1/search/job_filter?size=10&query=${query}`,
        );
        const jobs = result.data.data.jobs;

        return {
            type: 'SEARCH_JOBS',
            payload: jobs,
        };
    } catch (error) {
        return {
            type: 'JOBS_ERROR',
            payload: error.error,
        };
    }
};
