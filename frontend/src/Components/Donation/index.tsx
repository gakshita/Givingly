import Button from "@Components/Buttons";
import { Container } from "./style";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CustomModal from "@Components/Modal";
import { useDonationModal } from "src/context/GlobalContext";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASEURL } from "src/config";
import { CircularProgress } from "@mui/material";
import { categories } from "src/config";
import Completed from "@Components/Completed";
import usePayments from "src/hooks/usePayments";
import { useLocation } from "react-router-dom";
import { useRefresher } from "src/context/Refresher";
type InputType = {
    creator: string;
    expiration: string;
    project_info: {
        name: string;
        description: string;
        goal: number;
        categories: string[];
    };
};
const initialState: InputType = {
    creator: "akshita",
    expiration: "",
    project_info: {
        name: "",
        description: "",
        goal: 100,
        categories: []
    }
};

export default function Donation() {
    const { showModal, setShowModal } = useDonationModal();
    const [donationAmount, setDonationAmount] = useState(10);
    const [processing, setProcessing] = useState(false);
    const [completed, setCompleted] = useState(false);
    const { onPay } = usePayments();
    const location = useLocation();
    const projectId = parseInt(location.pathname.split("/")[2]);
    const { forceRefresh } = useRefresher();

    const afterPay = async (res: any) => {
        setProcessing(false);
        await axios.post(`${BASEURL}donate`, null, {
            params: {
                donar: "akshita",
                amount: donationAmount,
                project_id: projectId
            }
        });
        setCompleted(true);
        forceRefresh();
    };

    const onCancel = () => {
        setProcessing(false);
    };
    useEffect(() => {
        setCompleted(false);
    }, [showModal]);

    return (
        <CustomModal showModal={showModal} setShowModal={setShowModal}>
            <Container>
                <ArrowBackIosIcon
                    onClick={() => setShowModal(false)}
                    className="back-btn"
                />

                <div className={`flex-col ${completed && "center"}`}>
                    {completed ? (
                        <Completed
                            text={
                                <>
                                    {" "}
                                    Thankyou for your <br />
                                    contribution!
                                </>
                            }
                        />
                    ) : (
                        <>
                            <div>
                                <h1 className="title">
                                    Enter the donation <br />
                                    amount:
                                </h1>
                                <div className="flex">
                                    <span className="currency">$</span>

                                    <input
                                        className="input goal"
                                        type="number"
                                        placeholder={"100"}
                                        value={donationAmount}
                                        onChange={(e) =>
                                            setDonationAmount(
                                                parseInt(e.target.value)
                                            )
                                        }
                                    ></input>
                                </div>
                            </div>
                            <Button
                                text={
                                    processing ? (
                                        <CircularProgress
                                            className="loader"
                                            size={"22px"}
                                        />
                                    ) : (
                                        "Pay now"
                                    )
                                }
                                func={() => {
                                    setProcessing(true);
                                    onPay(
                                        donationAmount.toString(),
                                        "INR",
                                        "receipt",
                                        afterPay,
                                        onCancel
                                    );
                                    // afterPay({});
                                }}
                                width="100%"
                                className="donate-btn"
                            />
                        </>
                    )}
                </div>
            </Container>
        </CustomModal>
    );
}
