import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

const JobsCount: React.FC = () => {
    const { data } = useContext(GlobalContext);

    const { size } = data;

    return <>{!!size && <div>{size} jobs found</div>}</>;
};

export default JobsCount;
