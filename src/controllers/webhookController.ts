import { Request, Response } from 'express';
import { verifyPayUHash } from '../utils/paymentHelper';

class WebHookController {

    successWebHookRequest = (req: Request, res: Response) => {

        if (!verifyPayUHash(req.body)) return res.status(400).send("Invalid signature");
        res.json({
            status: "success",
            message: "Payment successful",
            data: {
                txnId: req.body.txnid,
                status: req.body.status,
                hash: req.body.hash
            }
        });
    };

    failureWebhookRequest = (req: Request, res: Response) => {
        res.json({
            status: "failed",
            message: "Payment failed",
            data: req.body
        });
    };
}

const webHookController = new WebHookController();
export default webHookController;