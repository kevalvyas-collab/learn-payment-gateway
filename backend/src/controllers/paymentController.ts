import { Request, Response } from "express";
import { generatePayUHash } from "../utils/paymentHelper";
import constants from "../lib/constant";



class PaymentController {
    createPayment = async (req: Request, res: Response) => {
        try {
            const { amount, productinfo, firstname, email, phone } = req.body;

            const txnid = "txn_" + Date.now();

            const udf1 = "";
            const udf2 = "";
            const udf3 = "";
            const udf4 = "";
            const udf5 = "";

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

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error generating payment" });
        }
    };
}

const paymentController = new PaymentController();
export default paymentController;
