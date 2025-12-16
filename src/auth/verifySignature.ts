import { Request, Response, NextFunction } from 'express';
import constants from '../lib/constant';

const STORED_HASH = constants.ENV_CONFIG.X_WEBHOOK_SIGNATURE;

function verifySignature(req: Request, res: Response, next: NextFunction) {
    const signature = req.headers['x-webhook-signature'];

    if (typeof signature !== 'string') {
        return res.status(401).send('Unauthorized - Missing signature');
    }


    if (signature !== STORED_HASH) {
        return res.status(401).send('Unauthorized - Invalid signature');
    }

    next();
}

export default verifySignature;
