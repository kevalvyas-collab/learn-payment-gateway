import { Request, Response } from 'express';

class WebHookController {
    handleWebHook = (req: Request, res: Response) => {
        console.log("---- Secure Webhook Received ----");
        console.log("Body:", req.body.toString());
        res.status(200).send("Webhook handled successfully");
    };
}

const webHookController = new WebHookController();
export default webHookController;