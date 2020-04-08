import React from 'react';
import { Grid, createStyles, makeStyles, Theme } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';
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

    const getRequirements = () => {
        let location = (
            <>
                <LocationOnOutlinedIcon color="primary" />
                <span style={{ marginLeft: '10px' }}>{jobLocation}</span>
            </>
        );
        let exp = (
            <>
                <BusinessCenterOutlinedIcon color="primary" />
                <span style={{ marginLeft: '10px' }}>{experience}</span>
            </>
        );
        let deg = (
            <>
                <SchoolOutlinedIcon color="primary" />
                <span style={{ marginLeft: '10px' }}>{degree}</span>
            </>
        );
        let type = (
            <>
                <WatchLaterOutlinedIcon color="primary" />
                <span style={{ marginLeft: '10px' }}>{jobType}</span>
            </>
        );

        let requirements = [location, exp, deg, type];

        return requirements.map((requirement) => (
            <Grid item xs={12} md={6} className={classes.jobDetail}>
                {requirement}
            </Grid>
        ));
    };

    return <Grid container>{getRequirements()}</Grid>;
};

export default JobDetails;
