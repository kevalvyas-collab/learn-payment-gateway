import { Router } from "express";
import { createPayment, successWebhookRequest, failureWebhookRequest } from "../controllers/paymentController";

const router = Router();

router.post("/create", createPayment);
router.post("/success", successWebhookRequest);
router.post("/failure", failureWebhookRequest);

export default router;

