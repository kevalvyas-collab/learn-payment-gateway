"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const ENV_CONFIG = {
    SERVER_PORT: process.env.PORT || 7000,
    X_WEBHOOK_SIGNATURE: process.env.X_WEBHOOK_SIGNATURE
};
const PAY_U_CONFIG = {
    PAY_U_KEY: process.env.PAY_U_KEY,
    PAY_U_SALT: process.env.PAY_U_SALT,
    PAY_U_BASE_URL: process.env.PAY_U_BASE_URL
};
const constants = {
    ENV_CONFIG,
    PAY_U_CONFIG
};
exports.default = constants;
//# sourceMappingURL=constant.js.map