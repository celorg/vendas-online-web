"use client"

import React, { ReactNode, createContext, useContext, useState } from "react";

interface NotificationProps {
    message: string;
    type: string;
}

interface GlobalData {
    accessToken?: string;
    notification?: NotificationProps;
}

interface GlobalContextProps {
    globalData: GlobalData;
    setGlobalData: (GlobalData: GlobalData) => void;
}

export const GlobalContext = createContext({} as GlobalContextProps);

interface GlobalProvider {
    children: ReactNode
}

export default function GlobalProvider({children}: GlobalProvider) {
    
    const [globalData, setGlobalData] = useState<GlobalData>({});

    return (
        <GlobalContext.Provider value={{ globalData, setGlobalData }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {

    const { globalData, setGlobalData } = useContext(GlobalContext);

    const setAcessToken = (accessToken: string) => {
        setGlobalData({
            ...globalData,
            accessToken
        })
    }

    const setNotification = (message: string, type: string) => {
        setGlobalData({
            ...globalData,
            notification: {
                message,
                type
            }
        });
        
    }

    return {
        accessToken: globalData?.accessToken,
        notification: globalData?.notification,
        setAcessToken,
        setNotification
    }
}