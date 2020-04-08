import React, { useContext } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { GlobalContext } from '../../context/GlobalState';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            height: '300px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '& > * + *': {
                marginLeft: theme.spacing(2),
            },
        },
    }),
);

const Loading: React.FC = () => {
    const classes = useStyles();

    const { isLoading } = useContext(GlobalContext);

    return (
        <>
            {isLoading && (
                <div className={classes.root}>
                    <CircularProgress color="primary" />
                </div>
            )}
        </>
    );
};

export default Loading;
