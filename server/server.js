import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import { DATABASE } from "./config.js";
import authRoutes from "./routes/auth.js";
import adRoutes from "./routes/ad.js";

const app = express();

// db connection 
mongoose.set("strictQuery", false);
mongoose.connect(DATABASE)
    .then(() => console.log("db_connected"))
    .catch(err => console.log(err));


//middleware
app.use(express.json({ limit: "10mb" }));
app.use(morgan("dev"));
app.use(cors());

// routes midddleware
app.use("/api", authRoutes);
app.use("/api", adRoutes);

app.listen(8000, () => console.log("server is runing on_port_8000"));

