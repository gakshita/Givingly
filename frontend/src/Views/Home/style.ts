import theme from "src/theme";
import { styled } from "styled-components";

export const Container = styled.div`
    flex: 1;
    background-color: ${({ theme }) => theme.color.secondary};
    padding: 20px 40px;
    margin-top: 80px;

    h1 {
        font-size: 40px;
        font-weight: 600;
    }
    h2 {
        font-size: 30px;
        font-weight: 600;
        margin: 0;
    }
    .main {
        max-width: 940px;
        margin: auto;
    }
    .projects {
        margin: 50px 0;
        width: 100%;
    }
`;

export const CategoryContainer = styled.div`
    color: ${({ theme }) => theme.color.ternary};
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.sm};
    cursor: pointer;
    .label {
        margin-top: 10px;
        font-weight: 500;
        text-transform: capitalize;
    }
    svg {
        border-radius: 10px;
        border: 1px solid #000;
        margin: auto;
        font-size: 22px;
        display: flex;
        padding: 10px;
        transition: background-color 0.25s ease-in;
    }
    .selected {
        svg {
            background-color: ${({ theme }) => theme.color.ternary};
            color: ${({ theme }) => theme.color.secondary};
        }
    }
    &:hover {
        svg {
            background-color: ${({ theme }) => theme.color.ternary};
            color: ${({ theme }) => theme.color.secondary};
            transition: background-color 0.25s ease-in;
        }
    }
`;

export const Flex = styled.div`
    display: flex;
    column-gap: 15px;
    flex-wrap: wrap;
`;

export const ProjectBox = styled.div`
    display: flex;
    column-gap: 40px;
    margin-bottom: 30px;
    cursor: pointer;
    .proj-img {
        border-radius: 10px;
        background-color: ${({ theme }) => theme.color.color1};
        width: 425px;
        height: 260px;
        background-color: ${({ theme }) => theme.color.color2};
        display: flex;

        img {
            max-width: 425px;
            max-height: 260px;
            margin: auto;
        }
    }
    .right {
        display: flex;
        flex-direction: column;
        row-gap: 15px;
        max-width: 420px;
        justify-content: center;
        width: 100%;

        .title {
            // font-size: ${({ theme }) => theme.fontSize.lg};
            font-weight: 600;
        }
        .desc {
            font-size: ${({ theme }) => theme.fontSize.sm};
        }
        .stats {
            display: flex;
            flex-direction: column;
            row-gap: 15px;
            .numbers {
                display: flex;
                justify-content: space-between;

                .label {
                    font-size: ${({ theme }) => theme.fontSize.sm};
                    font-weight: 500;
                }
                .value {
                    font-size: ${({ theme }) => theme.fontSize.lg};
                    font-weight: 600;
                }
            }
        }
    }
`;

export const SmallProjectBox = styled.div`
    display: flex;
    flex-direction: column;
    column-gap: 40px;
    // row-gap: 20px;
    margin-bottom: 30px;
    cursor: pointer;
    width: 245px;
    height: 345px;

    .empty {
        background-color: ${({ theme }) => theme.color.color2};
        height: 100%;
        border-radius: 10px;
        display: flex;
        place-content: center;
        place-items: center;
        font-weight: 500;
    }
    .proj-img {
        border-radius: 10px;
        background-color: ${({ theme }) => theme.color.color2};
        width: 245px;
        height: 140px;
        display: flex;
        img {
            max-width: 245px;
            max-height: 140px;
            margin: auto;
        }
    }
    h3 {
        font-size: 22px;
        font-weight: 600;
        margin-top: 10px;
        margin-bottom: 5px;
    }
    .right {
        display: flex;
        flex-direction: column;
        row-gap: 15px;
        max-width: 420px;
        justify-content: center;

        .stats {
            display: flex;
            flex-direction: column;
            row-gap: 15px;
            .numbers {
                display: flex;
                justify-content: space-between;

                .label {
                    font-size: ${({ theme }) => theme.fontSize.sm};
                    font-weight: 500;
                }
                .value {
                    font-size: ${({ theme }) => theme.fontSize.lg};
                    font-weight: 600;
                }
            }
        }
    }
`;
