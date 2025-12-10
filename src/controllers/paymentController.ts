import { Request, Response } from "express";
import { generatePayUHash, verifyPayUHash } from "../utils/paymentHelper";
import constants from "../lib/constant";

export const createPayment = async (req: Request, res: Response) => {
    try {
        const { amount, productinfo, firstname, email, phone } = req.body;

        const txnid = "txn_" + Date.now();

        const udf1 = "";
        const udf2 = "";
        const udf3 = "";
        const udf4 = "";
        const udf5 = "";

        // const hash = ;


        const payload = {
            key: constants.PAY_U_CONFIG.PAY_U_KEY,
            txnid,
            amount,
            productinfo,
            firstname,
            email,
            phone,
            surl: "http://localhost:3000/payment/success",
            furl: "http://localhost:3000/payment/failure",
            hash: generatePayUHash({
                txnid,
                amount,
                productinfo,
                firstname,
                email,
                udf1, udf2, udf3, udf4, udf5
            }),
            udf1, udf2, udf3, udf4, udf5
        };

        res.json(payload);
        console.log('create payment method', payload);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error generating payment" });
    }
};

export const successWebhookRequest = (req: Request, res: Response) => {

    if (!verifyPayUHash(req.body)) return res.status(400).send("Invalid signature");
    res.json({
        status: "success",
        message: "Payment successful",
        data: req.body
    });
};

export const failureWebhookRequest = (req: Request, res: Response) => {

    res.json({
        status: "failed",
        message: "Payment failed",
        data: req.body
    });
};