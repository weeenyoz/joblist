import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import errorImage2 from '../../assets/error2.png';
import { GlobalContext } from '../../context/GlobalState';
import './styles.scss';

const Error = () => {
    const { error, isLoading } = useContext(GlobalContext);

    return (
        <>
            {!!error && !isLoading && (
                <div className="error-img">
                    <img src={errorImage2} />
                    <Typography variant="h3" component="h2" color="secondary">
                        {error}
                    </Typography>
                </div>
            )}
        </>
    );
};

export default Error;
