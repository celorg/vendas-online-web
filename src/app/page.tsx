'use client'

import Image from 'next/image'
import { BackgroundImage, Container, ContainerError, ContainerLogin, LimitedContainer, LogoImage, TitleLogin } from './page.style';
import Input from '@/components/input/Input';
import Button from '@/components/buttons/Button';
import React, { useState } from 'react';

import axios, { AxiosError } from 'axios';
import { Alert, Space } from 'antd';

export default function Home() {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState<string | undefined>('');

    const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
       setUserName(e.target.value);
    };

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
     };

    const handleLogin = async() => {

        let data = {
            email: userName,
            password: password
        }

        const response = await axios.post('http://localhost:8080/auth',{
            email: userName,
            password: password
        }).then((res) => {
            return res.data
        }).catch((err: AxiosError | any) => {
            let errors = err?.response?.data?.message;
            if(Array.isArray(errors)){
                setError(errors[0]);
            }else{
                setError(errors);
            }
            
        });

        if(error){
            setTimeout(() => {
                setError('')
            }, 10000);
        }
        
    }

  return (
    <Container>
        <BackgroundImage 
            src="/imagens/background.png"
            alt="vendas online"
            title="Vendas online"
        />
        <ContainerLogin>
            <LimitedContainer>
                <LogoImage 
                    src="/imagens/images.jpeg" 
                />
                <TitleLogin level={2} type='secondary' >LOGIN</TitleLogin>
                {error && (
                    <Space direction="vertical" style={{ width: '100%' }}>
                        <Alert message={error} type="error" />
                    </Space>
                    // <ContainerError>{error}</ContainerError>
                )}
                <Input title="USÚARIO" margin='32px 0px 0px' value={userName} onChange={handleUserName} />
                <Input title="SENHA" type='password' margin='32px 0px 0px' value={password} onChange={handlePassword} />
                <Button type='primary' margin='64px 0px 16px 0px' size='large' onClick={handleLogin} >Entrar</Button>
            </LimitedContainer>
        </ContainerLogin>
    </Container>
)
}
