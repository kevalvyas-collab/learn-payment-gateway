import crypto from "crypto";
import constants from "../lib/constant";

const PAY_U_KEY = constants.PAY_U_CONFIG.PAY_U_KEY;
const PAY_U_SALT = constants.PAY_U_CONFIG.PAY_U_SALT;

export const generatePayUHash = (data: any) => {
    console.log('---- data ---->', data);
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
    let hashData = {
        txnid: data.txnid,
        amount: data.amount,
        productinfo: data.productinfo,
        firstname: data.firstname,
        email: data.email,
        udf1: data.udf1,
        udf2: data.udf2,
        udf3: data.udf3,
        udf4: data.udf4, udf5: data.udf5
    };
    const expectedHash = generatePayUHash(hashData);

    console.log('expected hash', expectedHash);
    console.log('available hash', data.hash);
    return expectedHash === data.hash;
};
