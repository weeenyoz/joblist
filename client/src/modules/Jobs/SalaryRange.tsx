import React from 'react';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { JobProps } from './interface';
import { kFormatter } from '../../utils/format';

interface SalaryRangeProps {
    data: {
        from: JobProps['salary_range_from'];
        to: JobProps['salary_range_to'];
    };
}

const SalaryRange: React.FC<SalaryRangeProps> = (props: SalaryRangeProps) => {
    const { data } = props;
    const { from, to } = data;

    return (
        <div className="salary-range">
            <span className="salary-from">
                <AttachMoneyIcon fontSize="small" />
                {kFormatter(from)}
            </span>
            -
            <span className="salary-to">
                <AttachMoneyIcon fontSize="small" />
                {kFormatter(to)}
            </span>
        </div>
    );
};

export default SalaryRange;
