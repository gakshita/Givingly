import styled, { css } from "styled-components";

export const ButtonStyle = styled.button<ButtonProps>`
    background: ${({ theme }) => theme.color.ternary};
    display: flex;
    position: relative;
    // font-family: ${({ theme }) => theme.fontFamily}};
    font-weight: 600;
    color: ${({ theme }) => theme.color.text_1};
    border-radius: 5px;
    border: none;
    box-sizing: border-box;
    width: ${(props) => (props.width ? props.width : "fit-content")};
    cursor: pointer;
    font-size: ${(props) => props.fontSize};
    justify-content: center;
    height: ${(props) => props.height};
    align-items: center;
    padding: 8px 20px;
    color: white;
    font-family: "Poppins", sans-serif;
`;

interface ButtonProps {
    width?: string;
    height?: string;
    fontSize?: string;
}
