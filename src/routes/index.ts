import express from "express";
const app = express();
app.disable("x-powered-by");
// import authRouter from "./authentication/RTS-auth";

// app.use("/", authRouter);

export default app