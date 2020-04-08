import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

const JobsCount: React.FC = () => {
    const { data, error, isLoading } = useContext(GlobalContext);

    const { jobs } = data;

    return <>{!isLoading && !error && !!jobs && <div>{jobs.length} jobs found</div>}</>;
};

export default JobsCount;
