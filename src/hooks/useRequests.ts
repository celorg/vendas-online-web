import axios, { AxiosError } from "axios";
import React, { useState } from "react";
import { useGlobalContext } from "./useGlobalContext";
import { toast } from "react-toastify";

export const useRequests = () => {

    const [loading, setLoading] = useState(false);
    const { setNotification } = useGlobalContext();

    const getRequest = async (url: string) => {

        setLoading(true);

        return await axios.get(url)
            .then((res) => {
                return res.data;
            }).catch((err: AxiosError | any) => {
                alert('Erro')
            });
    };

    const postRequest = async (url: string, body: any) => {

        setLoading(true);

        try {
            
    
            const response = await axios.post(url, body);
            // handle success, e.g., update UI or show a success message
            alert('Deu certo');
    
            return response.data;
        } catch (error: AxiosError | any) {
            let errors = error?.response?.data?.message;
            if(Array.isArray(errors)){
                toast.error(errors[0])
                setNotification(errors[0], 'error')
                }else{
                    toast.error(errors)
                    setNotification(errors, 'error');
                }
        } finally {
            setLoading(false);
        }
        
    }

    return {
        loading,
        getRequest,
        postRequest
    }

}