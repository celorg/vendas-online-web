'use client';

import { Button } from "antd";
import styled from "styled-components";

interface ButtonAntdProps {
    margin: string;
}

export const ButtonAntd = styled(Button)<ButtonAntdProps>`
   width: 100%;
`