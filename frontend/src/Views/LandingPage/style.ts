import { styled } from "styled-components";

export const Container = styled.div`
    flex: 1;
    display: flex;

    place-items: center;
    place-content: center;
    column-gap: 120px;

    // padding: 0 50px;
    // justify-content: space-between;

    .left {
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        max-width: 432px;

        .heading {
            font-size: ${({ theme }) => theme.fontSize.heading};
            margin: 0;
            line-height: 107px;
            font-weight: 600;
        }
        .sub-head {
            margin: 0;
            font-weight: 600;
            line-height: 38px;
        }
        .desc {
            font-size: ${({ theme }) => theme.fontSize.lg};
            font-weight: 500;
        }
    }
    .right {
        img {
            height: 400px;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        .left {
            text-align: center;
            max-width: 300px;

            .align {
                margin: auto;
            }
            .heading {
                font-size: ${({ theme }) => theme.fontSize.mheading};
                line-height: 50px;
            }
        }
        .right {
            img {
                height: 200px;
                margin-top: 50px;
            }
        }
    }
`;
