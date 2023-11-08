import theme from "src/theme";
import { styled } from "styled-components";

export const Container = styled.div`
    flex: 1;
    background-color: ${({ theme }) => theme.color.secondary};
    padding: 80px 40px;
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

export const ProjectBox = styled.div`
    display: flex;
    column-gap: 40px;
    margin-bottom: 30px;
    cursor: pointer;
    place-content: center;

    .proj-img {
        border-radius: 10px;
        background-color: ${({ theme }) => theme.color.color1};
        min-width: 500px;
        height: 700px;
        background-color: ${({ theme }) => theme.color.color2};
        display: flex;

        img {
            max-width: 425px;
            // max-height: 260px;
            margin: auto;
        }
    }
    .flex {
        display: flex;
        column-gap: 20px;
        hr {
            width: initial !important;
        }
    }
    .right {
        display: flex;
        flex-direction: column;
        row-gap: 15px;
        flex: 1;
        max-width: 600px;
        justify-content: center;

        .creator {
            text-transform: capitalize;
            font-weight: 500;
        }
        .title {
            // font-size: ${({ theme }) => theme.fontSize.lg};
            font-weight: 600;
        }
        hr {
            width: 100%;
            margin: 0;
            border: 0.2px solid #80808052;
        }
        .desc {
            font-size: ${({ theme }) => theme.fontSize.sm};
            flex: 1;
            padding: 30px 0;

            label {
                font-weight: 600;
                font-size: ${({ theme }) => theme.fontSize.md};
                margin-bottom: 20px;
            }
            .desc-text {
                margin-top: 20px;
            }
        }
        .stats {
            display: flex;
            max-width: 270px;
            padding: 30px 0;

            flex-direction: column;
            row-gap: 15px;
            flex: 1;
            .stat {
                border-radius: 10px;
                padding: 5px 0;
            }
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
            .colored {
                background-color: ${({ theme }) => theme.color.primary};
                padding: 5px 25px;
            }
        }
        .date {
            display: flex;
            column-gap: 10px;

            .days {
                font-size: ${({ theme }) => theme.fontSize.sm};
                font-weight: 500;
                margin: auto 0;
            }
        }
        .btn {
            margin-top: 30px;
        }
    }
`;
