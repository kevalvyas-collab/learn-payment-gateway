import express from 'express';
import cors from 'cors';
import constants from './lib/constant';
import paymentRoutes from "./routes/payment";


const app = express();
const PORT = constants.ENV_CONFIG.SERVER_PORT;


/** Solve CORS Origin ERROR  */
app.use(cors({
    origin: ' http://localhost:3000'
}));
// Webhooks need raw body
app.use("/payment/webhook", express.raw({ type: "*/*" }));

// Serve public folder

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/payment", paymentRoutes);

// Default route
app.listen(PORT, () => {
    console.log(`Server is listening on PORT :-  ${PORT}`);
});
