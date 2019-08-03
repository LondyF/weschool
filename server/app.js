import express from "express";
import routes from "./api"
const app = express();

app.use(routes());
app.listen(3001, () => {
    console.log("SERVER RUNNNG ON PORT 3001")
})