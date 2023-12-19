'use client'

import Image from 'next/image'
import { BackgroundImage, Container, ContainerLogin, LimitedContainer, LogoImage, TitleLogin } from './page.style';
import Input from '@/components/input/Input';
import Button from '@/components/buttons/Button';
import React, { useState } from 'react';

export default function Home() {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const [user, setUser] = useState({
        userName: '',
        password: ''
    });

    const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
       setUserName(e.target.value);
    };

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
     };

    const handleLogin = () => {
        
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
                <Input title="USÚARIO" margin='32px 0px 0px' value={userName} onChange={handleUserName} />
                <Input title="SENHA" type='password' margin='32px 0px 0px' value={password} onChange={handlePassword} />
                <Button type='primary' margin='64px 0px 16px 0px' size='large' onClick={handleLogin} >Entrar</Button>
            </LimitedContainer>
        </ContainerLogin>
    </Container>
)
}
