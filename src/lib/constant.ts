import dotenv from 'dotenv';
dotenv.config();
const ENV_CONFIG = {
<<<<<<< HEAD
    SERVER_PORT: process.env.PORT || 7000,
=======
    SERVER_PORT: process.env.PORT,
>>>>>>> e6b4321 (update folder structure)
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

export default constants;