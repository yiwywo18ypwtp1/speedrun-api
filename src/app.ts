import dotenv from 'dotenv'
dotenv.config()
import express from "express"
import authRouter from "./routes/auth.router";

const app = express();
const PORT = 5001;

app.use(express.json());
app.use("/auth", authRouter);


app.get("/", (req, res) => {
    res.status(200).json("i am working");
});

app.listen(PORT, () => {
    console.log(`Listening ${PORT}...`)
})
