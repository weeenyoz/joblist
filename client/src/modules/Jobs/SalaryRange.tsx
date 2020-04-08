import React from 'react';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const SalaryRange = () => {
    return (
        <div className="salary-range">
            <span className="salary-from">
                <AttachMoneyIcon fontSize="small" />
                30K
            </span>
            -
            <span className="salary-to">
                <AttachMoneyIcon fontSize="small" />
                50K
            </span>
        </div>
    );
};

export default SalaryRange;
