"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const verifySignature_1 = __importDefault(require("../auth/verifySignature"));
const webhookController_1 = __importDefault(require("../controllers/webhookController"));
const router = (0, express_1.default)();
router.post("/", verifySignature_1.default, webhookController_1.default.handleWebHook);
exports.default = router;
//# sourceMappingURL=webhook.js.map