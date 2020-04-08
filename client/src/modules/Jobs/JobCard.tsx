import React from 'react';
import { Grid, createStyles, makeStyles, Theme } from '@material-ui/core';
import JobHeader from './JobHeader';
import SalaryRange from './SalaryRange';
import JobDetails from './JobDetails';
import CompanyName from './CompanyName';
import Hours from './Hours';
import './styles.scss';
import { JobProps } from './interface';

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

interface JobCardProps extends JobProps {}

const JobCard: React.FC<JobCardProps> = (props: JobCardProps) => {
    const classes = useStyles();

    const {
        job_title,
        salary_range_from,
        salary_range_to,
        job_country,
        degree,
        job_type,
        xp_lvl,
        job_location,
    } = props;

    return (
        <>
            <Grid container>
                <Grid item xs={12} md={8}>
                    <JobHeader title={job_title} />
                </Grid>

                <Grid item xs={12} md={4}>
                    <SalaryRange data={{ from: salary_range_from, to: salary_range_to }} />
                </Grid>

                <Grid item xs={12} className={classes.jobDetails}>
                    <JobDetails
                        data={{
                            experience: xp_lvl,
                            degree,
                            jobType: job_type,
                            jobLocation: job_location,
                        }}
                    />
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
