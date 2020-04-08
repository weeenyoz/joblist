import React, { createContext, Dispatch, useReducer } from 'react';
import GlobalReducer from './GlobalReducer';
import { Action } from './GlobalAction';
import { JobProps } from '../modules/Jobs/interface';

export interface GlobalStateProps {
    jobs: Array<JobProps>;
    dispatch: Dispatch<Action>;
    error: string[];
}

const initialState: GlobalStateProps = {
    jobs: [],
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
