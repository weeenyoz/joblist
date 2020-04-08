import React from 'react';
import './App.scss';
import Search from './modules/Search/Search';
import GlobalStateProvider from './context/GlobalState';

const App = () => {
    return (
        <div className="App">
            <GlobalStateProvider>
                <Search />
            </GlobalStateProvider>
        </div>
    );
};

export default App;
