import { Router } from "express";
import paymentController from "../controllers/paymentController";
import webHookController from "../controllers/webhookController";
import verifySignature from "../auth/verifySignature";

const router = Router();

router.post("/create", verifySignature, paymentController.createPayment);
router.post("/success", webHookController.successWebHookRequest);
router.post("/failure", webHookController.failureWebhookRequest);

export default router;

