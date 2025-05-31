/* eslint-disable no-undef */
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import aiRoute from "./routes/ai.route.js";
dotenv.config({});

const app = express();
app.use(express.json());

const PORT = process.env.PORT;
const mode = process.env.MODE;

if (mode === "dev") {
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  });
} else if (mode === "prod") {
  app.use(
    cors({
      origin: "https://codalyzer.vercel.app",
      credentials: true,
    })
  );
}

// app.use(express.json);
app.use("/ai", aiRoute);

app.listen(PORT, () => {
  console.log(`Server running at PORT ${PORT}`);
});
