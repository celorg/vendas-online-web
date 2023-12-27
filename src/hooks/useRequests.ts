import axios, { AxiosError } from "axios";
import React, { useState } from "react";

export const useRequests = () => {

    const [loading, setLoading] = useState(false);

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

        try {
            setLoading(true);
    
            const response = await axios.post(url, body);
            // handle success, e.g., update UI or show a success message
            alert('Deu certo');
    
            return response.data;
        } catch (error) {
            // let errors = err?.response?.data?.message;
            // if(Array.isArray(errors)){
                //         setError(errors[0]);
                //     }else{
                //         setError(errors);
                //     }
            console.error('Error:', error);
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