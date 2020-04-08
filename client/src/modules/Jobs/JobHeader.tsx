import React from 'react';
import { JobProps } from './interface';

interface HeaderProps {
    title: JobProps['job_title'];
}

const JobHeader: React.FC<HeaderProps> = (props: HeaderProps) => {
    const { title } = props;

    return (
        <>
            <h4 className="title">{title}</h4>
        </>
    );
};

export default JobHeader;
