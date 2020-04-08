import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import JobCard from './JobCard';

const JobsCards: React.FC = () => {
    const { data, isLoading } = useContext(GlobalContext);

    const { jobs } = data;

    return (
        <>
            {!isLoading &&
                jobs &&
                jobs.map((job) => (
                    <div key={job.id}>
                        <hr style={{ margin: '20px 0' }} />
                        <JobCard {...job} />
                    </div>
                ))}
        </>
    );
};

export default JobsCards;
