import crypto from 'crypto';
import { Request, Response, NextFunction } from 'express';
import constants from '../lib/constant';


const Webhook_Secret = constants.ENV_CONFIG.X_WEBHOOK_SIGNATURE;

function verifySignature(req: Request, res: Response, next: NextFunction) {
    try {
        const signature = req.headers["x-webhook-signature"];
        console.log('signature', signature);
        if (!signature) {
            console.log("Missing signature");
            return res.status(401).send("Unauthorized - Missing signature");
        }

        // Convert JSON body to string exactly as received
        const bodyString = req.body.toString();

        // Create HMAC SHA256 hash
        const hash = crypto
            .createHmac("sha256", Webhook_Secret)
            .update(bodyString)
            .digest("hex");
        console.log('hash', hash);
        if (hash !== signature) {
            console.log("Invalid signature");
            return res.status(401).send("Unauthorized - Invalid signature");
        }

        next();
    } catch (err) {
        console.log("Signature verification failed", err);
        return res.status(500).send("Internal Error");
    }
}

export default verifySignature;