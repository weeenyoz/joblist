import React from 'react';
import { Grid, createStyles, makeStyles, Theme } from '@material-ui/core';
import LocationOnTwoToneIcon from '@material-ui/icons/LocationOnTwoTone';
import BusinessCenterTwoToneIcon from '@material-ui/icons/BusinessCenterTwoTone';
import SchoolTwoToneIcon from '@material-ui/icons/SchoolTwoTone';
import WatchLaterTwoToneIcon from '@material-ui/icons/WatchLaterTwoTone';
import { JobProps } from './interface';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        jobDetail: {
            display: 'flex',
            alignItems: 'center',
            margin: '10px 0',
        },
    }),
);

interface JobDetailsProps {
    data: {
        experience: JobProps['xp_lvl'];
        degree: JobProps['degree'];
        jobType: JobProps['job_type'];
        jobLocation: JobProps['job_location'];
    };
}

const JobDetails: React.FC<JobDetailsProps> = (props: JobDetailsProps) => {
    const classes = useStyles();

    const { data } = props;
    const { experience, degree, jobType, jobLocation } = data;

    return (
        <Grid container>
            <Grid item xs={12} md={6} className={classes.jobDetail}>
                <LocationOnTwoToneIcon /> <span style={{ marginLeft: '10px' }}>{jobLocation}</span>
            </Grid>
            <Grid item xs={12} md={6} className={classes.jobDetail}>
                <BusinessCenterTwoToneIcon />
                <span style={{ marginLeft: '10px' }}>{experience}</span>
            </Grid>
            <Grid item xs={12} md={6} className={classes.jobDetail}>
                <SchoolTwoToneIcon /> <span style={{ marginLeft: '10px' }}>{degree}</span>
            </Grid>
            <Grid item xs={12} md={6} className={classes.jobDetail}>
                <WatchLaterTwoToneIcon /> <span style={{ marginLeft: '10px' }}>{jobType}</span>
            </Grid>
        </Grid>
    );
};

export default JobDetails;
