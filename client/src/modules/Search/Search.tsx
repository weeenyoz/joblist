import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Card, CardContent, Button, createStyles, Theme } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import { getJobs } from '../../context/GlobalAction';
import { GlobalContext } from '../../context/GlobalState';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '50%',
        },
        searchBox: {
            display: 'flex',
            flexDirection: 'column',
        },
        searchField: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: theme.spacing(3),
        },
    }),
);

const Search: React.FC = () => {
    const classes = useStyles();

    const { jobs, dispatch } = useContext(GlobalContext);

    const handleSearch = async () => {
        const getJobsAction = await getJobs();
        dispatch(getJobsAction);
    };

    useEffect(() => {
        console.log('jobs: ', jobs);
    }, [jobs]);

    return (
        <>
            <Card className={classes.root}>
                <CardContent>
                    <Box className={classes.searchBox}>
                        <Box className={classes.searchField}>
                            <SearchTwoToneIcon />
                            <TextField
                                placeholder="Search for job title or company name"
                                style={{ width: '100%', marginLeft: '5px' }}
                            />
                        </Box>
                        <Button
                            variant="outlined"
                            color="primary"
                            style={{ borderRadius: '20px' }}
                            onClick={handleSearch}
                        >
                            Filter Result
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </>
    );
};

export default Search;
