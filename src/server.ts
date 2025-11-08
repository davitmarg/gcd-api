import express from "express";
import { gcdRouter } from "./routes/gcd";

const app = express();
const PORT = 3000;

app.use("/gcd", gcdRouter);

if (process.env.NODE_ENV !== "test") {
    app.listen(PORT, () =>
        console.log(`Server running on http://localhost:${PORT}`)
    );
}

export default app;
