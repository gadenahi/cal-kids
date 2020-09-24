import React, { useState } from 'react';

export const GlobalContext = React.createContext({});

export const GlobalProvider = ({
    children
}) => {
    const [startState, setStartState] = useState(false);
    const [inputName, setInputName] = useState("");
    const [timerState, setTimerState] = useState(false)

    return (
        <GlobalContext.Provider
            value={{
                startState,
                setStartState,
                inputName,
                setInputName,
                timerState,
                setTimerState
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};