import crypto from "crypto";
import constants from "../lib/constant";

const PAY_U_KEY = constants.PAY_U_CONFIG.PAY_U_KEY;
const PAY_U_SALT = constants.PAY_U_CONFIG.PAY_U_SALT;

export const generatePayUHash = (data: any) => {
    const hashString =
        PAY_U_KEY + "|" +
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


    return crypto.createHash("sha512").update(hashString).digest("hex");
};


export const verifyPayUHash = (data: any) => {
    const status = data.status || "";
    const txnid = data.txnid || "";
    const amount = data.amount || "";
    const productinfo = data.productinfo || "";
    const firstname = data.firstname || "";
    const email = data.email || "";

    const hashString =
        PAY_U_SALT + "|" +
        status + "|||||||||||" +
        email + "|" +
        firstname + "|" +
        productinfo + "|" +
        amount + "|" +
        txnid + "|" +
        PAY_U_KEY;

    const calculated = crypto.createHash("sha512").update(hashString).digest("hex");

    return calculated === data.hash;
};
