"use client"

import React, { ReactNode, createContext, useContext, useState } from "react";

interface GlobalData {
    accessToken?: string;
}

interface GlobalContextProps {
    globalData: GlobalData;
    setGlobalData: (GlobalData: GlobalData) => void;
}

const GlobalContext = createContext({} as GlobalContextProps);

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

    return {
        accessToken: globalData?.accessToken,
        setAcessToken,
    }
}