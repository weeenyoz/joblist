import React from 'react';
import { JobProps } from './interface';
import { makeStyles, createStyles, Theme, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            textAlign: 'left',
            margin: '0',
            color: theme.palette.primary.main,
        },
    }),
);
interface HeaderProps {
    title: JobProps['job_title'];
}

const JobHeader: React.FC<HeaderProps> = (props: HeaderProps) => {
    const classes = useStyles();

    const { title } = props;

    return (
        <>
            <Typography variant="h5" component="h5" className={classes.title}>
                {title}
            </Typography>
        </>
    );
};

export default JobHeader;
