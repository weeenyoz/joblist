export interface JobProps {
    id: number;
    degree: string;
    job_title: string;
    job_country: string;
    job_type: string;
    job_location: string;
    salary_range_from: number;
    salary_range_to: number;
    company_name: string;
    company_location: string;
    xp_lvl: string;
}

export interface GetJobsResponse {
    jobs: Array<JobProps>;
    max_score: null;
    page: number;
    size: number;
    total_num: number;
    sort: number;
    query: string;
}
