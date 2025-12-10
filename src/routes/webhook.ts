import Router from 'express';
import verifySignature from '../auth/verifySignature';
import webHookController from '../controllers/webhookController';

const router = Router();

router.post("/", verifySignature, webHookController.handleWebHook);

export default router;