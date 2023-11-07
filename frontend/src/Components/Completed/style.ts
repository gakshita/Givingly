import { styled } from "styled-components";

export const Container = styled.div`
    .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .checkmark__circle {
        stroke-dasharray: 166;
        stroke-dashoffset: 166;
        stroke-width: 2;
        stroke-miterlimit: 10;
        stroke: ${({ theme }) => theme.color.primary};
        fill: none;
        animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
    }
    .checkmark {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        display: block;
        stroke-width: 2;
        stroke: #fff;
        stroke-miterlimit: 10;
        margin: 20px auto;
        box-shadow: inset 0px 0px 0px ${({ theme }) => theme.color.primary};
        animation: fill 0.4s ease-in-out 0.4s forwards,
            scale 0.3s ease-in-out 0.9s both;
    }
    .checkmark__check {
        transform-origin: 50% 50%;
        stroke-dasharray: 48;
        stroke-dashoffset: 48;
        animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
    }
    @keyframes stroke {
        100% {
            stroke-dashoffset: 0;
        }
    }
    @keyframes scale {
        0%,
        100% {
            transform: none;
        }
        50% {
            transform: scale3d(1.1, 1.1, 1);
        }
    }
    @keyframes fill {
        100% {
            box-shadow: inset 0px 0px 0px 30px
                ${({ theme }) => theme.color.primary};
        }
    }
`;
