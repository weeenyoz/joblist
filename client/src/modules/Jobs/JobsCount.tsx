import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

const JobsCount: React.FC = () => {
    const { data, isLoading } = useContext(GlobalContext);

    const { size } = data;

    return <>{!isLoading && !!size && <div>{size} jobs found</div>}</>;
};

export default JobsCount;
