import { Router } from "express";
import paymentController from "../controllers/paymentController";
import webHookController from "../controllers/webhookController";

const router = Router();

router.post("/create", paymentController.createPayment);
router.post("/success", webHookController.successWebHookRequest);
router.post("/failure", webHookController.failureWebhookRequest);

export default router;

