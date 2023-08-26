import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import { register } from "./controllers/register.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import requestRoutes from "./routes/request.js";
import postRoutes from "./routes/post.js";
import blockOfFlatsRoutes from "./routes/blockOfFlats.js";
import appartementRoutes from "./routes/appartement.js";

// CONFIGURATIONS
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json({limit: "300mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

// ROUTES
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/request", requestRoutes);
app.use("/post", postRoutes);
app.use("/blockOfFlats", blockOfFlatsRoutes);
app.use("/appartement", appartementRoutes);


// MONGODB CONNECTION
const PORT = process.env.PORT || 6001;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
}).catch((error) => console.log(`${error} did not connect.`));

