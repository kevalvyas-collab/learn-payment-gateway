import express from 'express';
import constants from './lib/constant';

const app = express();
const PORT = constants.ENV_CONFIG.SERVER_PORT;

app.use(express.json());


app.post('/webhook', (req, res) => {
    console.log("---- Webhook Received ----");
    console.log("Headers:", req.headers);
    console.log("Body:", req.body);
    console.log("--------------------------");

    // ALWAYS respond quickly
    res.status(200).send("Webhook received");

});
app.listen(PORT, () => {
    console.log(`Server is listening on PORT :-  ${PORT}`);
});