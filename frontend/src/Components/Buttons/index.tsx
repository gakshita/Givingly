import { ButtonStyle } from "./style";
import React, { useTheme } from "styled-components";

type ButtonProps = {
    width?: string;
    fontSize?: string;
    height?: string;
    text: string | React.ReactElement;
    func: () => void;
    disabled?: boolean;
    className?: string;
};
const Button: React.FC<ButtonProps> = ({
    width,
    fontSize,
    height,
    text,
    func,
    disabled,
    className
}) => {
    const theme = useTheme();
    return (
        <ButtonStyle
            className={`${disabled && "custom-disabled"} ${className}`}
            width={width}
            fontSize={fontSize ? theme.fontSize[fontSize] : "16px"}
            height={height ? height : "40px"}
            onClick={() => func()}
            disabled={disabled}
        >
            {text}
        </ButtonStyle>
    );
};
export default Button;
