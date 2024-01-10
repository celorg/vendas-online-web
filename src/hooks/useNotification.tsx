'use client'

import { notification as notificationAntd, NotificationArgsProps } from "antd";
import { useGlobalContext } from "./useGlobalContext";
import { useEffect } from "react";


export const useNotification = () => {

    const [api, contextHolder] = notificationAntd.useNotification();
    const { notification } = useGlobalContext();

    useEffect(() => {
        console.log('testando useEffect')
        if(notification?.message && notification?.type){
            api.error({
                message: notification?.message,
                description: 'Teste',
                placement: 'bottomRight',
              }); 
        }
    }, [notification])

    return {
        api,
        contextHolder
    }

}