import { Input as InputAntd, InputProps as InputPropsAntd } from 'antd';
import { BoxInput, TitleInput } from './input.style';

interface InputProps extends InputPropsAntd {
    title?: string;
}

export default function Input({title, ...props} :InputProps) {
    
    return (
        <BoxInput>
            {title && (
                <TitleInput >
                    {title}
                </TitleInput>
            )}
            <InputAntd {...props} />
        </BoxInput>
        
    )

};
