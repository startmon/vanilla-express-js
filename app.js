import express from "express"
import cors from "cors"
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import router from "./router/router.js";

dotenv.config();

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
    origin: process.env.FRONTEND_URL,
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
};

app.use(cors(corsOptions));
app.use(router)
app.get("*",(req,res)=>{
    res.send("this is express template")
})
export default app;