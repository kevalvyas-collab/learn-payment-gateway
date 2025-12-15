import express from 'express';
import constants from './lib/constant';
import paymentRoutes from "./routes/payment";
import { errorHandler } from './auth/errorHandler';
import path from 'path';

const app = express();
const PORT = constants.ENV_CONFIG.SERVER_PORT;

// Webhooks need raw body
// app.use("/webhook", express.raw({ type: "*/*" }));
app.use("/payment/webhook", express.raw({ type: "*/*" }));

// Serve public folder
// app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.resolve("./public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Error handler
app.use(errorHandler);

// Routes
app.use("/payment", paymentRoutes);

// Default route
app.get("/", (req, res) => {
    res.sendFile(path.resolve("src/public/index.html"));
});

app.listen(PORT, () => {
    console.log(`Server is listening on PORT :-  ${PORT}`);
});
