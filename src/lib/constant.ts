import dotenv from 'dotenv';
dotenv.config();
const ENV_CONFIG = {
    SERVER_PORT: process.env.PORT || 7000,
};

const constants = {
    ENV_CONFIG

};

export default constants;