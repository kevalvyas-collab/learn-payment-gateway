"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const paymentController_1 = __importDefault(require("../controllers/paymentController"));
const webhookController_1 = __importDefault(require("../controllers/webhookController"));
const router = (0, express_1.Router)();
router.post("/create", paymentController_1.default.createPayment);
router.post("/success", webhookController_1.default.successWebHookRequest);
router.post("/failure", webhookController_1.default.failureWebhookRequest);
exports.default = router;
//# sourceMappingURL=payment.js.map