import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import {connectDB} from "./DBConnection/db.js";
import aiRoute from "./routes/ai.route.js";
import authRoute from "./routes/auth.route.js";
dotenv.config({});

const app = express();

app.use(express.json());

const PORT = process.env.PORT;
const mode = process.env.MODE;

if (mode === "dev") {
  app.use(
    cors({
      origin: process.env.client_uri,
      credentials: true,
    })
  );
} else if (mode === "prod") {
  app.use(
    cors({
      origin: process.env.client_uri,
      credentials: true,
    })
  );
}

app.use("/ai", aiRoute);

app.use("/auth", authRoute);

app.listen(PORT, () => {
  console.log(`Server running at PORT ${PORT}`);
  connectDB();
});
