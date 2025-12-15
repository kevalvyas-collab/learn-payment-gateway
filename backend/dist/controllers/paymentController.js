"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const paymentHelper_1 = require("../utils/paymentHelper");
const constant_1 = __importDefault(require("../lib/constant"));
class PaymentController {
    constructor() {
        this.createPayment = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { amount, productinfo, firstname, email, phone } = req.body;
                const txnid = "txn_" + Date.now();
                const udf1 = "";
                const udf2 = "";
                const udf3 = "";
                const udf4 = "";
                const udf5 = "";
                const payload = {
                    key: constant_1.default.PAY_U_CONFIG.PAY_U_KEY,
                    txnid,
                    amount,
                    productinfo,
                    firstname,
                    email,
                    phone,
                    surl: "http://localhost:3000/payment/success",
                    furl: "http://localhost:3000/payment/failure",
                    hash: (0, paymentHelper_1.generatePayUHash)({
                        txnid,
                        amount,
                        productinfo,
                        firstname,
                        email,
                        udf1, udf2, udf3, udf4, udf5
                    }),
                    udf1, udf2, udf3, udf4, udf5
                };
                res.json(payload);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: "Error generating payment" });
            }
        });
    }
}
const paymentController = new PaymentController();
exports.default = paymentController;
//# sourceMappingURL=paymentController.js.map