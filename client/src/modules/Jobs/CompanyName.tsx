import React from 'react';
import { JobProps } from './interface';

interface CompanyNameProps {
    name: JobProps['company_name'];
}

const CompanyName: React.FC<CompanyNameProps> = (props: CompanyNameProps) => {
    const { name } = props;

    return <span className="company-name">{name}</span>;
};

export default CompanyName;
