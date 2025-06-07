
import express from "express"
import dotenv from "dotenv"

import authRoutes from "./routes/auth.route.js";
import {connectDB} from "./lib/db";
dotenv.config();

const app = express();
app.use("/api/auth", authRoutes);
const app = express();
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log('Server running on PORT'+PORT);
    connectDB();
});

