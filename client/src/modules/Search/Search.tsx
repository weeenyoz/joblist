import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Box, Card, CardContent, Button, createStyles, Theme } from '@material-ui/core';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import { getJobs } from '../../context/GlobalAction';
import { GlobalContext } from '../../context/GlobalState';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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

    const [searchText, setSearchText] = useState('');

    const { dispatch } = useContext(GlobalContext);

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    };

    const handleSearch = async () => {
        const getJobsAction = await getJobs(searchText);
        dispatch(getJobsAction);
    };

    return (
        <>
            <Card>
                <CardContent>
                    <Box className={classes.searchBox}>
                        <Box className={classes.searchField}>
                            <SearchTwoToneIcon />
                            <TextField
                                placeholder="Search for job title or company name"
                                style={{ width: '100%', marginLeft: '5px' }}
                                onChange={changeHandler}
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
