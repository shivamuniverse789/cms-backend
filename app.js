import express from "express";
import cors from "cors";
import connectDB from "./config/database.js"
import dotenv from "dotenv";
import routes from "./routes/pageRoutes.js"

dotenv.config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/", routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
