import { styled } from "styled-components";

export const Container = styled.div`
    height: 50vh;

    .flex-col {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }
    .center {
        justify-content: center;
    }
    h1 {
        font-size: 30px;
        font-weight: 600;
        margin: 20px 0 30px;
    }
    .flex {
        display: flex;
    }
    .input {
        outline: none;
        border: none;
        border-bottom: 0.2px solid;
        font-size: ${({ theme }) => theme.fontSize.sm};
        font-family: ${({ theme }) => theme.fontFamily};
        width: 100%;
    }
    .goal {
        font-size: 40px !important;
        font-weight: 600;
    }
    .currency {
        font-size: 40px !important;
        font-weight: 600;
        border-bottom: 0.2px solid;
    }
    .back-btn {
        cursor: pointer;
    }

    .loader {
        color: ${({ theme }) => theme.color.secondary};
        font-size: 90px;
        height: 90px;
    }
    .categories {
        display: flex;
        flex-wrap: wrap;
        column-gap: 10px;
        row-gap: 10px;

        .category {
            text-transform: capitalize;
            height: 20px;
            padding: 2px 10px;
            cursor: pointer;
            background-color: ${({ theme }) => theme.color.secondary};

            font-size: ${({ theme }) => theme.fontSize.sm} !important;
            border-radius: 5px;
            border: 1px solid ${({ theme }) => theme.color.primary};
            transition: background-color 0.2s ease-in-out;
        }
        .category:hover {
            border: none;
            background-color: ${({ theme }) => theme.color.color2};
            transition: background-color 0.2s ease-in-out;
            font-weight: 500;
        }
        .selected {
            border: none;
            background-color: ${({ theme }) => theme.color.color2};
            transition: background-color 0.2s ease-in-out;
            font-weight: 500;
        }
    }
    .donate-btn {
        margin-bottom: 32px;
    }
`;
