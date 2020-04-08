import React, { createContext, Dispatch, useReducer } from 'react';
import GlobalReducer from './GlobalReducer';
import { Action } from './GlobalAction';
import { GetJobsResponse } from '../modules/Jobs/interface';

export interface GlobalStateProps {
    data: GetJobsResponse;
    dispatch: Dispatch<Action>;
    error: string[];
}

const initialState: GlobalStateProps = {
    data: { jobs: [], max_score: null, page: 0, size: 0, total_num: 0, sort: 0, query: '' },
    dispatch: () => {},
    error: [''],
};

export const GlobalContext = createContext<GlobalStateProps>(initialState);

const GlobalStateProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(GlobalReducer, initialState);

    return (
        <GlobalContext.Provider value={{ ...state, dispatch }}>{children}</GlobalContext.Provider>
    );
};

export default GlobalStateProvider;
