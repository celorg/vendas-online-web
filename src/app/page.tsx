import Image from 'next/image'
import { BackgroundImage, Container, ContainerLogin, LimitedContainer, LogoImage, TitleLogin } from './page.style';
import Input from '@/components/input/Input';
import Button from '@/components/buttons/Button';

export default function Home() {
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
                <Input title="Usúario" />
                <Input title="Senha" />
                <Button type='primary' margin='64px 0px 16px 0px' size='large' >Entrar</Button>
            </LimitedContainer>
        </ContainerLogin>
    </Container>
)
}
