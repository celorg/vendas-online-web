import { Input as InputAntd, InputProps as InputPropsAntd } from 'antd';
import { BoxInput, TitleInput } from './input.style';

interface InputProps extends InputPropsAntd {
    title?: string;
    margin?: string;
}

export default function Input({title, margin, ...props} :InputProps) {
    
    return (
        <BoxInput style={{ margin }}>
            {title && (
                <TitleInput >
                    {title}
                </TitleInput>
            )}
            <InputAntd {...props} />
        </BoxInput>
        
    )

};
