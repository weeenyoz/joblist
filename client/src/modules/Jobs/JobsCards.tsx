import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import JobCard from './JobCard';

const JobsCards = () => {
    const { data } = useContext(GlobalContext);

    console.log('data.jobs: ', data.jobs);
    return (
        <>
            {data.jobs.map((job) => (
                <div key={job.id}>
                    <hr style={{ margin: '20px 0' }} />
                    <JobCard {...job} />
                </div>
            ))}
        </>
    );
};

export default JobsCards;
