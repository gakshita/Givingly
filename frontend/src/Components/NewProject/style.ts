import { styled } from "styled-components";

export const Container = styled.div`
    h1 {
        font-size: 40px;
        font-weight: 600;
        margin: 20px 0 30px;
    }
    .flex {
        display: flex;
    }
    .form {
        display: flex;
        column-gap: 20px;
        margin-bottom: 20px;

        .detail {
            margin-bottom: 20px;
            display: flex;
            flex-direction: column;

            .input {
                outline: none;
                border: none;
                border-bottom: 0.2px solid;
                font-size: ${({ theme }) => theme.fontSize.sm};
                font-family: ${({ theme }) => theme.fontFamily};
                width: 100%;
            }

            // input[type="date"]::-webkit-calendar-picker-indicator {
            //     color: rgba(0, 0, 0, 0);
            //     opacity: 1;
            //     display: block;
            //     background: url("calendar.png") no-repeat;
            //     width: 20px;
            //     height: 20px;
            //     border-width: thin;
            //     cursor: pointer;
            // }
        }
        label {
            font-size: ${({ theme }) => theme.fontSize.sm};
            font-weight: 500;
            margin-bottom: 10px;
        }
        textarea {
            width: 100%;
        }
        .right {
            width: 50%;
        }
        .left {
            width: 50%;
        }

        .goal {
            font-size: ${({ theme }) => theme.fontSize.xxxl} !important;
            font-weight: 600;
        }
        .currency {
            font-size: ${({ theme }) => theme.fontSize.xxxl} !important;
            font-weight: 600;
            border-bottom: 0.2px solid;
        }

        textarea::placeholder {
            position: absolute;
            width: 100%;
            // text-align: center;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
    .back-btn {
        cursor: pointer;
    }
`;
