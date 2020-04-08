import React from 'react';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { JobProps } from './interface';
import { kFormatter } from '../../utils/format';

interface SalaryRangeProps {
    data: {
        salaryFrom: JobProps['salary_range_from'];
        salaryTo: JobProps['salary_range_to'];
    };
}

const SalaryRange: React.FC<SalaryRangeProps> = (props: SalaryRangeProps) => {
    const { data } = props;
    const { salaryFrom, salaryTo } = data;

    return (
        <div className="salary-range">
            <AttachMoneyIcon fontSize="small" />
            {kFormatter(salaryFrom)} -
            <AttachMoneyIcon fontSize="small" />
            {kFormatter(salaryTo)}
        </div>
    );
};

export default SalaryRange;
