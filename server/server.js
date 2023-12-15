import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import { DATABASE } from "./config.js";
import authRoutes from "./routes/auth.js";

const app = express();

// db connection 
mongoose.set("strictQuery", false);
mongoose.connect(DATABASE)
    .then(() => console.log("db_connected"))
    .catch(err => console.log(err));


//middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// routes midddleware
app.use("/api", authRoutes);

app.listen(8000, () => console.log("server is runing on_port_8000"));

