"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const constant_1 = __importDefault(require("../lib/constant"));
const Webhook_Secret = constant_1.default.ENV_CONFIG.X_WEBHOOK_SIGNATURE;
function verifySignature(req, res, next) {
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
        const hash = crypto_1.default
            .createHmac("sha256", Webhook_Secret)
            .update(bodyString)
            .digest("hex");
        console.log('hash', hash);
        if (hash !== signature) {
            console.log("Invalid signature");
            return res.status(401).send("Unauthorized - Invalid signature");
        }
        next();
    }
    catch (err) {
        console.log("Signature verification failed", err);
        return res.status(500).send("Internal Error");
    }
}
exports.default = verifySignature;
//# sourceMappingURL=verifySignature.js.map