import axios from "axios";
import { BASEURL } from "src/config";
import { useEffect } from "react";
import { loadScript } from "@Utils/loadScript";

const usePayments = () => {
    const createOrder = async (
        amount: string,
        currency: string,
        receipt: string
    ): Promise<string> => {
        const response = await axios.post(
            `${BASEURL}payment/create/order`,
            null,
            {
                params: {
                    amount,
                    currency,
                    receipt
                }
            }
        );
        console.log(response.data.id);

        return response.data.id;
    };

    const checkout = async (
        amount: string,
        currency: string,
        order_id: string,
        afterPay: (res: any) => void,
        onCancel: () => void
    ) => {
        var options = {
            key: "rzp_test_26yMwKnYtNV110",
            amount: amount,
            currency: currency,
            name: "Givingly",
            description: "Thankyou for your donation",
            order_id: order_id,
            handler: function (response: any) {
                // alert(response.razorpay_payment_id);
                // alert(response.razorpay_order_id);
                // alert(response.razorpay_signature);
                afterPay(response);
            },
            modal: {
                ondismiss: function () {
                    onCancel();
                }
            },
            prefill: {
                name: "Akshita Goyal",
                email: "akshita@gmail.com",
                contact: "1234567890"
            },
            notes: {
                address: "Razorpay Corporate Office"
            },
            theme: {
                color: "#000000"
            }
        };
        const rzp1 = new (window as any).Razorpay(options);
        let response = rzp1.open();
    };

    const onPay = async (
        amount: string,
        currency: string,
        receipt: string,
        afterPay: (res: any) => void,
        onCancel: () => void
    ) => {
        const order_id = await createOrder(amount, currency, receipt);
        await checkout(amount, currency, order_id, afterPay, onCancel);
    };

    useEffect(() => {
        loadScript("https://checkout.razorpay.com/v1/checkout.js");
    }, []);

    return { onPay };
};
export default usePayments;
