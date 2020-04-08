import React from 'react';
import './App.scss';
import GlobalStateProvider from './context/GlobalState';
import Search from './modules/Search/Search';
import JobsCount from './modules/Jobs/JobsCount';
import JobsCards from './modules/Jobs/JobsCards';

const App = () => {
    return (
        <div className="App">
            <div className="container">
                <GlobalStateProvider>
                    <Search />
                    <div className="body">
                        <JobsCount />
                        <JobsCards />
                    </div>
                </GlobalStateProvider>
            </div>
        </div>
    );
};

export default App;
