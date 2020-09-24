import React, { useState } from 'react';

export const GlobalContext = React.createContext({});

export const GlobalProvider = ({
    children
}) => {
    const [startState, setStartState] = useState(false);
    const [inputName, setInputName] = useState("");

    return (
        <GlobalContext.Provider
            value={{
                startState,
                setStartState,
                inputName,
                setInputName
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};