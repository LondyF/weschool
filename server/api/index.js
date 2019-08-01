const express = require("express");
const Router = express.Router;

const UserRoutes = require('./routes/UserRoutes')

module.exports = () => {
    const app = Router();
    
    UserRoutes(app);

    return app;
}