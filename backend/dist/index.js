"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const constant_1 = __importDefault(require("./lib/constant"));
const payment_1 = __importDefault(require("./routes/payment"));
const errorHandler_1 = require("./auth/errorHandler");
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = constant_1.default.ENV_CONFIG.SERVER_PORT;
// Webhooks need raw body
// app.use("/webhook", express.raw({ type: "*/*" }));
app.use("/payment/webhook", express_1.default.raw({ type: "*/*" }));
// Serve public folder
// app.use(express.static(path.join(__dirname, "../public")));
app.use(express_1.default.static(path_1.default.resolve("./public")));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
// Error handler
app.use(errorHandler_1.errorHandler);
// Routes
app.use("/payment", payment_1.default);
// Default route
app.get("/", (req, res) => {
    res.sendFile(path_1.default.resolve("src/public/index.html"));
});
app.listen(PORT, () => {
    console.log(`Server is listening on PORT :-  ${PORT}`);
});
//# sourceMappingURL=index.js.map