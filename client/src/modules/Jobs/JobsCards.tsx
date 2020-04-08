import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import JobCard from './JobCard';

const JobsCards = () => {
    const { data } = useContext(GlobalContext);

    return (
        <>
            {data.jobs.map((job) => (
                <>
                    <hr style={{ margin: '20px 0' }} />
                    <JobCard />
                </>
            ))}
        </>
    );
};

export default JobsCards;
