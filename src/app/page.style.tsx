'use client';

import styled from 'styled-components';

import { Space, Typography } from 'antd';

const { Text, Title} = Typography;

export const Container = styled.div`
    display: flex;
    justify-content: right;
`

export const BackgroundImage = styled.img`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: -1;
`
export const LogoImage = styled.img`
    width: 300px;
    height: 200px;
`

export const TitleLogin = styled(Title)`
    color: #006397;
`

export const ContainerLogin = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    width: 100%;
    height: 100vh;
    padding: 22px;
    max-width: 646px;
    z-index: 2;
`

export const LimitedContainer = styled.div`
    width: 100%;
    max-width: 498px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`


/* Enable hover only on non-touch devices */
/* @media (hover: hover) and (pointer: fine) {
  
}

@media (prefers-reduced-motion) {
  
}

/* Mobile */
/* @media (max-width: 700px) { */
  
/* } */

/* Tablet and Smaller Desktop */
/* @media (min-width: 701px) and (max-width: 1120px) { */
  
/* } */

/* @media (prefers-color-scheme: dark) { */
  
/* } */
