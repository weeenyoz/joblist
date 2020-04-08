import React from 'react';
import { Grid, createStyles, makeStyles, Theme } from '@material-ui/core';
import LocationOnTwoToneIcon from '@material-ui/icons/LocationOnTwoTone';
import BusinessCenterTwoToneIcon from '@material-ui/icons/BusinessCenterTwoTone';
import SchoolTwoToneIcon from '@material-ui/icons/SchoolTwoTone';
import WatchLaterTwoToneIcon from '@material-ui/icons/WatchLaterTwoTone';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        jobDetail: {
            display: 'flex',
            alignItems: 'center',
        },
    }),
);

const JobDetails = () => {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={12} md={6} className={classes.jobDetail}>
                <LocationOnTwoToneIcon /> <span style={{ marginLeft: '10px' }}>Cebu</span>
            </Grid>
            <Grid item xs={12} md={6} className={classes.jobDetail}>
                <BusinessCenterTwoToneIcon /> <span style={{ marginLeft: '10px' }}>1-3years</span>
            </Grid>
            <Grid item xs={12} md={6} className={classes.jobDetail}>
                <SchoolTwoToneIcon /> <span style={{ marginLeft: '10px' }}>Diplpma</span>
            </Grid>
            <Grid item xs={12} md={6} className={classes.jobDetail}>
                <WatchLaterTwoToneIcon /> <span style={{ marginLeft: '10px' }}>Full time</span>
            </Grid>
        </Grid>
    );
};

export default JobDetails;
