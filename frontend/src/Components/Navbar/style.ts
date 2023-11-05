import styled, { css } from "styled-components";
export const Container = styled.div`
    background-color: inherit;
    position: fixed;
    width: 100%;
    .navbar {
        padding: 20px 50px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: inherit;
        transition: all 0.5s ease-in;
    }
    .scrolled {
        transition: all 0.5s ease-in;
        background-color: #addfac;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(3.6px);
        -webkit-backdrop-filter: blur(3.6px);
    }
    .heading {
        margin: auto 0;
        font-size: ${({ theme }) => theme.fontSize.xl};
        font-weight: 600;
        cursor: pointer;
    }
    .right {
        display: flex;
        column-gap: 50px;
        font-weight: 600;
        font-size: ${({ theme }) => theme.fontSize.lg};

        .tab {
            margin: auto;
            cursor: pointer;
        }
    }

    @media (max-width: 768px) {
        max-width: 280px;
        margin: auto;
        width: 100%;
        padding: 24px 0;
        .right {
            column-gap: 10px;
        }
    }
`;
