import express from "express";
import { connect } from "mongoose";

import { MONGO_DB_URL } from "./config"
import routes from "./api"

const app = express();

app.use(routes());
connect(MONGO_DB_URL, { useNewUrlParser: true }, (err) => {
    if(err) throw err
    
    app.listen(3002, () => {
        console.log("SERVER RUNNNG O PORT 3002")
    })
})
