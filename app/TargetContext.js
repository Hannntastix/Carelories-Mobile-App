import React, { createContext, useState, useContext } from 'react';

const TargetContext = createContext();

export const TargetProvider = ({ children }) => {
    const [userTarget, setuserTarget] = useState([]);

    const updateTargets = (newTargets) => {
        setuserTarget(newTargets);
    };

    const getActiveTarget = () => {
        return userTarget.find(target => target.status === 'IN USE') || null;
    };

    return (
        <TargetContext.Provider value={{ userTarget, updateTargets, getActiveTarget }}>
            {children}
        </TargetContext.Provider>
    );
};

export const useTarget = () => {
    const context = useContext(TargetContext);
    if (context === undefined) {
        throw new Error('useTarget must be used within a TargetProvider');
    }
    return context;
};