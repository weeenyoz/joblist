import React from 'react';
import { Grid, createStyles, makeStyles, Theme } from '@material-ui/core';
import JobHeader from './JobHeader';
import SalaryRange from './SalaryRange';
import JobRequirements from './JobRequirements';
import CompanyName from './CompanyName';
import Hours from './Hours';
import { JobProps } from './interface';
import './styles.scss';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        jobRequirements: {
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
        degree,
        job_type,
        xp_lvl,
        job_location,
        company_name,
    } = props;

    return (
        <>
            <Grid container>
                <Grid item xs={12} md={8}>
                    <JobHeader title={job_title} />
                </Grid>

                <Grid item xs={12} md={4}>
                    <SalaryRange
                        data={{ salaryFrom: salary_range_from, salaryTo: salary_range_to }}
                    />
                </Grid>

                <Grid item xs={12} className={classes.jobRequirements}>
                    <JobRequirements
                        data={{
                            experience: xp_lvl,
                            degree,
                            jobType: job_type,
                            jobLocation: job_location,
                        }}
                    />
                </Grid>

                <Grid item xs={12} className={classes.companyAndHours}>
                    <CompanyName name={company_name} />
                    <Hours />
                </Grid>
            </Grid>
        </>
    );
};

export default JobCard;
