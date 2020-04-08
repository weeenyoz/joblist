import React from 'react';
import { Grid, createStyles, makeStyles, Theme } from '@material-ui/core';
import JobHeader from './JobHeader';
import SalaryRange from './SalaryRange';
import JobDetails from './JobDetails';
import CompanyName from './CompanyName';
import Hours from './Hours';
import './styles.scss';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        jobDetails: {
            margin: '30px 0',
        },
        companyAndHours: {
            display: 'flex',
            justifyContent: 'space-between',
        },
    }),
);

const JobCard = () => {
    const classes = useStyles();
    return (
        <>
            <Grid container>
                <Grid item xs={12} md={8}>
                    <JobHeader />
                </Grid>

                <Grid item xs={12} md={4}>
                    <SalaryRange />
                </Grid>

                <Grid item xs={12} className={classes.jobDetails}>
                    <JobDetails />
                </Grid>

                <Grid item xs={12} className={classes.companyAndHours}>
                    <CompanyName />
                    <Hours />
                </Grid>
            </Grid>
        </>
    );
};

export default JobCard;
