import styled, { css } from "styled-components";

export const LayoutStyle = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    max-width: 1400px;

    // padding: 0 4rem;
    background-color: ${({ theme }) => theme.color.primary};
    display: flex;
    flex-direction: column;
`;
