"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyPayUHash = exports.generatePayUHash = void 0;
const crypto_1 = __importDefault(require("crypto"));
const constant_1 = __importDefault(require("../lib/constant"));
const PAY_U_KEY = constant_1.default.PAY_U_CONFIG.PAY_U_KEY;
const PAY_U_SALT = constant_1.default.PAY_U_CONFIG.PAY_U_SALT;
const generatePayUHash = (data) => {
    const hashString = PAY_U_KEY + "|" +
        data.txnid + "|" +
        data.amount + "|" +
        data.productinfo + "|" +
        data.firstname + "|" +
        data.email + "|" +
        data.udf1 + "|" +
        data.udf2 + "|" +
        data.udf3 + "|" +
        data.udf4 + "|" +
        data.udf5 + "||||||" +
        PAY_U_SALT;
    return crypto_1.default.createHash("sha512").update(hashString).digest("hex");
};
exports.generatePayUHash = generatePayUHash;
const verifyPayUHash = (data) => {
    const status = data.status || "";
    const txnid = data.txnid || "";
    const amount = data.amount || "";
    const productinfo = data.productinfo || "";
    const firstname = data.firstname || "";
    const email = data.email || "";
    const hashString = PAY_U_SALT + "|" +
        status + "|||||||||||" +
        email + "|" +
        firstname + "|" +
        productinfo + "|" +
        amount + "|" +
        txnid + "|" +
        PAY_U_KEY;
    const calculated = crypto_1.default.createHash("sha512").update(hashString).digest("hex");
    return calculated === data.hash;
};
exports.verifyPayUHash = verifyPayUHash;
//# sourceMappingURL=paymentHelper.js.map