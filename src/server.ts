import express from "express";
import { gcdRouter } from "./routes/gcd";

const app = express();
const PORT = 3000;

app.use("/gcd", gcdRouter);

app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
);
