"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const paymentHelper_1 = require("../utils/paymentHelper");
class WebHookController {
    constructor() {
        this.successWebHookRequest = (req, res) => {
            if (!(0, paymentHelper_1.verifyPayUHash)(req.body))
                return res.status(400).send("Invalid signature");
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
        this.failureWebhookRequest = (req, res) => {
            res.json({
                status: "failed",
                message: "Payment failed",
                data: req.body
            });
        };
    }
}
const webHookController = new WebHookController();
exports.default = webHookController;
//# sourceMappingURL=webhookController.js.map