const express = require('express')
const app = express();

const routes = require("./api");

app.use(routes());
app.listen(3001, () => {
    console.log("SERVER RUNNNG")
})