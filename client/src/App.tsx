import React from 'react';
import './App.scss';
import GlobalStateProvider from './context/GlobalState';
import Search from './modules/Search/Search';
import JobsCount from './modules/Jobs/JobsCount';
import JobsCards from './modules/Jobs/JobsCards';
import Loading from './modules/Loading/Loading';
import Error from './modules/Error/Error';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';

const App = () => {
    return (
        <div className="App">
            <div className="container">
                <ThemeProvider theme={theme}>
                    <GlobalStateProvider>
                        <Search />
                        <div className="body">
                            <JobsCount />
                            <JobsCards />
                            <Loading />
                            <Error />
                        </div>
                    </GlobalStateProvider>
                </ThemeProvider>
            </div>
        </div>
    );
};

export default App;
