import React, { useState } from 'react';

export const GlobalContext = React.createContext({});

export const GlobalProvider = ({
    children
}) => {
    const [startState, setStartState] = useState(false);

    return (
        <GlobalContext.Provider
            value={{
                startState,
                setStartState
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};