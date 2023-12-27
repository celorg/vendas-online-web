'use client'

import { BackgroundImage, Container, ContainerError, ContainerLogin, LimitedContainer, TitleLogin } from './page.style';
import Input from '@/components/input/Input';
import Button from '@/components/buttons/Button';
import React, { useContext, useState } from 'react';

import axios, { AxiosError } from 'axios';
import { Alert, Space } from 'antd';
import SVGLogo from '@/components/icons/SVGLogo';
import { useRequests } from '@/hooks/useRequests';
import { useGlobalContext } from '@/hooks/useGlobalContext';

interface LoginDTO {
    email: string;
    password: string;
}

export default function Home() {

    const { accessToken, setAcessToken } = useGlobalContext();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const { postRequest, loading } = useRequests();

    const [error, setError] = useState<string | undefined>('');

    const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
       setUserName(e.target.value);
    };

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
     };

    const handleLogin = async() => {
        setAcessToken('novo token')
        postRequest('http://localhost:8080/auth', {
            email: userName,
            password: password
        });
        
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
                <SVGLogo />
                ({accessToken})
                <TitleLogin level={2} type='secondary' >LOGIN</TitleLogin>
                {error && (
                    <Space direction="vertical" style={{ width: '100%' }}>
                        <Alert message={error} type="error" />
                    </Space>
                    // <ContainerError>{error}</ContainerError>
                )}
                <Input title="USÚARIO" margin='32px 0px 0px' value={userName} onChange={handleUserName} />
                <Input title="SENHA" type='password' margin='32px 0px 0px' value={password} onChange={handlePassword} />
                <Button loading={loading} type='primary' margin='64px 0px 16px 0px' size='large' onClick={handleLogin} >Entrar</Button>
            </LimitedContainer>
        </ContainerLogin>
    </Container>
)
}
